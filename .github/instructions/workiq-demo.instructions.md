---
description: "WorkIQ guidance for retrieving SharePoint-linked documents from Microsoft 365 messages"
applyTo: "**/*"
---

# WorkIQ SharePoint-Linked Document Retrieval

When asked to use WorkIQ to find an email, retrieve a linked Microsoft 365 document, and act on the document contents, use the structured Microsoft Graph flow below. This is especially important for Outlook messages that contain modern SharePoint/OneDrive links instead of traditional email attachments.

## Guidance

- A SharePoint/OneDrive document can appear as an inline Outlook link rather than an attachment. `hasAttachments=false` does not mean there is no document to retrieve.
- If a user says "download the attached document" while asking you to act on its contents, treat that as "retrieve/read the document contents." Do not save the binary locally unless the user explicitly asks to save or upload the file itself.
- Use the repo-local WorkIQ policy when resolving Graph sharing links, because this repo allows `/shares/**` for document retrieval:

```powershell
$env:WORKIQ_POLICY_DIR = (Resolve-Path ".workiq\policy").Path
```

- Resolve SharePoint/OneDrive sharing links through `/shares/{shareToken}/driveItem`.
- Assume linked enterprise Office documents are protected and do not download or parse them locally unless the user explicitly asks for the binary file. Use `workiq ask` to read, summarize, or extract the document text through Microsoft 365 Copilot.

## Recommended retrieval sequence

1. Search or fetch candidate messages with structured metadata. In PowerShell, keep the full WorkIQ path in one quoted string and escape OData `$` as `` `$ ``. Avoid complex `$search` expressions with operators like `from:` because quoting mistakes can split the URL at `&` and make WorkIQ treat part of the query as a path. Prefer a simple keyword search, then filter sender/subject from the returned JSON.

```powershell
npx workiq fetch -u "/me/messages?`$search=""<search terms>""&`$top=5&`$select=id,subject,from,receivedDateTime,hasAttachments,bodyPreview"
```

If search quoting fails or the query is ambiguous, fetch recent messages and filter locally instead:

```powershell
npx workiq fetch -u "/me/messages?`$top=25&`$select=id,subject,from,receivedDateTime,hasAttachments,bodyPreview"
```

2. Fetch the full message body by ID:

```powershell
npx workiq fetch -u "/me/messages/{message-id}?`$select=body,from,subject,receivedDateTime"
```

3. Extract the SharePoint/OneDrive URL from the email HTML. Prefer the `originalsrc="https://...sharepoint.com/:w:/..."` attribute when present; fall back to the visible `href` if needed.

4. Convert the SharePoint URL into a Graph share token:

```powershell
$shareUrl = "https://<tenant>.sharepoint.com/:w:/..."
$base64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($shareUrl)).TrimEnd('=').Replace('/','_').Replace('+','-')
$shareToken = "u!$base64"
```

5. Verify the file with the repo-local policy:

```powershell
$env:WORKIQ_POLICY_DIR = (Resolve-Path ".workiq\policy").Path
npx workiq fetch -u "/shares/$shareToken/driveItem?`$select=id,name,size,webUrl"
```

6. Extract document text with WorkIQ Ask. Include enough context from the email or resolved drive item name so Copilot reads the intended file:

```powershell
npx workiq ask -q "Read the contents of the linked document from the relevant message and provide the text needed to complete the requested task."
```

## Avoid

- Do not treat `hasAttachments=false` as a blocker for linked documents.
- Do not download enterprise-linked Office documents as a default step. Verify the drive item metadata, then use WorkIQ Ask for content extraction.
- Do not spend time trying local Office parsers (`python-docx`, `zipfile`, `mammoth`, LibreOffice conversion, etc.) for linked enterprise documents.
- Do not enumerate SharePoint sites by guessing tenant/team paths unless the `/shares/{shareToken}` route fails. Sharing links already contain enough information to resolve the drive item.
