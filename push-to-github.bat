@echo off
echo =======================================================
echo   Pushing Portfolio to GitHub: shreya-a12/shreya_portfolio
echo =======================================================
echo.

cd /d "%~dp0"

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in PATH!
    echo Please install Git from: https://git-scm.com/download/win
    echo Then run this script again.
    echo.
    pause
    exit /b 1
)

echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "feat: complete developer portfolio website for Shreya Singh"

echo Setting main branch...
git branch -M main

echo Configuring remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/shreya-a12/shreya_portfolio.git

echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo =======================================================
    echo   SUCCESS! Your portfolio is live on GitHub:
    echo   https://github.com/shreya-a12/shreya_portfolio
    echo =======================================================
) else (
    echo.
    echo [NOTE] If push was rejected because the repo already has a README or license:
    echo Running git pull --rebase and retrying push...
    git pull --rebase origin main
    git push -u origin main
)

echo.
pause
