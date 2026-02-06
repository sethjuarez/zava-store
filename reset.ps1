#!/usr/bin/env pwsh
# Resets the demo back to the clean React Router starter state
git checkout app/routes/home.tsx app/app.css

# Remove generated component files
if (Test-Path "app/components") {
  Remove-Item -Recurse -Force "app/components"
}

Write-Host "Demo reset complete." -ForegroundColor Green
