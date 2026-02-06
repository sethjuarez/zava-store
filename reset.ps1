#!/usr/bin/env pwsh
# Resets the demo back to the clean React Router starter state
git checkout app/routes/home.tsx app/app.css
Write-Host "Demo reset complete." -ForegroundColor Green
