---
description: "WorkIQ guidance for retrieving SharePoint-linked documents from Microsoft 365 messages"
applyTo: "**/*"
---

# WorkIQ SharePoint-Linked Document Retrieval

When asked to use WorkIQ to find an email, retrieve a linked Microsoft 365 document, and act on the document contents, use the structured Microsoft Graph flow below. This is especially important for Outlook messages that contain modern SharePoint/OneDrive links instead of traditional email attachments.

## Guidance

- A SharePoint/OneDrive document can appear as an inline Outlook link rather than an attachment. `hasAttachments=false` does not mean there is no document to retrieve.
- Use the repo-local WorkIQ policy when resolving Graph sharing links, because this repo allows `/shares/**` for document retrieval:

```powershell
$env:WORKIQ_POLICY_DIR = (Resolve-Path ".workiq\policy").Path
```

- Resolve SharePoint/OneDrive sharing links through `/shares/{shareToken}/driveItem`.
- Do not assume a downloaded Office document can be parsed locally. Enterprise documents can be protected or stored in formats that local libraries cannot read. If local parsing fails or protection is likely, use `workiq ask` to read or summarize the document through Microsoft 365 Copilot.

## Recommended retrieval sequence

1. Search or fetch candidate messages with structured metadata:

```powershell
npx workiq fetch -u "/me/messages?`$search=""<search terms>""&`$top=5&`$select=id,subject,from,receivedDateTime,hasAttachments,bodyPreview"
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

6. Download only if needed for the demo narrative:

```powershell
npx workiq fetch-blob -u "/shares/$shareToken/driveItem/content" -o "$env:TEMP"
```

7. If local parsing is unreliable, extract document text with WorkIQ Ask:

```powershell
npx workiq ask -q "Read the contents of the linked document from the relevant message and provide the text needed to complete the requested task."
```

## Avoid

- Do not treat `hasAttachments=false` as a blocker for linked documents.
- Do not spend time trying multiple local Office parsers if the document appears protected or unreadable; switch to WorkIQ Ask for content extraction.
- Do not enumerate SharePoint sites by guessing tenant/team paths unless the `/shares/{shareToken}` route fails. Sharing links already contain enough information to resolve the drive item.
