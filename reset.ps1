#!/usr/bin/env pwsh
# Resets the demo back to the clean React Router starter state

# Kill any running dev servers on port 5173
$proc = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($proc) { Stop-Process -Id $proc -Force -ErrorAction SilentlyContinue; Write-Host "Stopped dev server." -ForegroundColor Yellow }

git checkout app/routes/home.tsx app/app.css

# Remove generated component files
if (Test-Path "app/components") {
  Remove-Item -Recurse -Force "app/components"
}

Write-Host "Demo reset complete." -ForegroundColor Green
