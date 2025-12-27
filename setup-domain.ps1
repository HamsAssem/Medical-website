# Domain Setup Helper Script for Vercel

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Vercel Domain Setup Helper" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
Write-Host "Checking Vercel CLI..." -ForegroundColor Green
$vercelCheck = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelCheck) {
    Write-Host "Vercel CLI is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    Write-Host ""
}

# Check if logged in
Write-Host "Checking Vercel authentication..." -ForegroundColor Green
$whoami = vercel whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "You need to login first!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run this command:" -ForegroundColor Yellow
    Write-Host "  vercel login" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "✓ Logged in as: $whoami" -ForegroundColor Green
Write-Host ""

# Get project info
Write-Host "Getting project information..." -ForegroundColor Green
$projectInfo = vercel ls 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "Your Vercel projects:" -ForegroundColor Cyan
    Write-Host $projectInfo -ForegroundColor White
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Next Steps to Add Domain:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to Vercel Dashboard:" -ForegroundColor Green
Write-Host "   https://vercel.com/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "2. Click on your project: hamosa-medical2" -ForegroundColor Green
Write-Host ""
Write-Host "3. Go to: Settings → Domains" -ForegroundColor Green
Write-Host ""
Write-Host "4. Enter your domain name (e.g., purehealth.com)" -ForegroundColor Green
Write-Host ""
Write-Host "5. Copy the DNS records Vercel shows you" -ForegroundColor Green
Write-Host ""
Write-Host "6. Add those DNS records at your domain registrar" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Ask if they want to open the dashboard
$openDashboard = Read-Host "Would you like to open Vercel Dashboard in your browser? (Y/N)"

if ($openDashboard -eq "Y" -or $openDashboard -eq "y") {
    Write-Host ""
    Write-Host "Opening Vercel Dashboard..." -ForegroundColor Green
    Start-Process "https://vercel.com/dashboard"
    Write-Host ""
    Write-Host "After adding your domain in the dashboard, you'll need to:" -ForegroundColor Yellow
    Write-Host "1. Copy the DNS records Vercel provides" -ForegroundColor White
    Write-Host "2. Add them at your domain registrar" -ForegroundColor White
    Write-Host "3. Wait 15-30 minutes for DNS propagation" -ForegroundColor White
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Domain Setup Guide Created!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "For detailed instructions, see: CUSTOM_DOMAIN_SETUP.md" -ForegroundColor Yellow
Write-Host ""

