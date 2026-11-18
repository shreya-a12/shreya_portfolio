# PowerShell script to push portfolio to GitHub
Set-Location -Path $PSScriptRoot

Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "  Pushing Portfolio to GitHub: shreya-a12/shreya_portfolio" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Git is not installed or not in your PATH." -ForegroundColor Red
    Write-Host "Download and install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Or install via PowerShell: winget install --id Git.Git -e" -ForegroundColor Yellow
    Read-Host "Press Enter to exit..."
    exit
}

Write-Host "1. Initializing Git..." -ForegroundColor Green
git init

Write-Host "2. Adding files..." -ForegroundColor Green
git add .

Write-Host "3. Committing files..." -ForegroundColor Green
git commit -m "feat: complete developer portfolio website for Shreya Singh"

Write-Host "4. Setting branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "5. Setting remote origin to https://github.com/shreya-a12/shreya_portfolio.git..." -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin https://github.com/shreya-a12/shreya_portfolio.git

Write-Host "6. Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nIf the remote repo already had a README, pulling with rebase..." -ForegroundColor Yellow
    git pull --rebase origin main
    git push -u origin main
}

Write-Host "`nPortfolio repository link: https://github.com/shreya-a12/shreya_portfolio" -ForegroundColor Cyan
Read-Host "Done! Press Enter to exit..."
