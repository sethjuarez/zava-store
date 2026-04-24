---
description: "Cloud agent validation and screenshot guidance"
applyTo: "**/*"
---

# Cloud Agent Validation

When validating UI changes in a cloud/CI agent environment:

- Run the project’s existing validation commands first (`npm run build` and `npm run typecheck` when available).
- If screenshots are requested, avoid shared persistent browser profiles. Prefer a command-line Playwright run or a small Node script that launches Chromium with an isolated temporary user data directory.
- If using a Playwright MCP/browser tool reports that the browser is already in use, do not retry the same shared profile repeatedly. Switch to an isolated browser/profile approach.
- Screenshot capture is validation evidence, not a reason to discard completed implementation work. If screenshots fail due to environment/browser-profile issues after build/typecheck pass, report the screenshot limitation clearly and keep the code changes available in the PR.

Example isolated screenshot flow:

```powershell
$env:PLAYWRIGHT_BROWSERS_PATH = Join-Path $env:TEMP "pw-browsers"
npx playwright install chromium
npm run dev
```

Then capture from another shell/process using a Playwright script or CLI with a temporary output path.
