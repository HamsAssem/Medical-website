# Vercel Deployment Script for Pure Health Website

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Pure Health - Vercel Deployment" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

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
    Write-Host "Then press Enter in the terminal when prompted to open browser." -ForegroundColor Gray
    Write-Host "After logging in, run this script again or run:" -ForegroundColor Gray
    Write-Host "  vercel --prod" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "Logged in as: $whoami" -ForegroundColor Green
Write-Host ""

# Build the project first
Write-Host "Building project..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Build successful!" -ForegroundColor Green
Write-Host ""

# Deploy to production
Write-Host "Deploying to Vercel..." -ForegroundColor Green
vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Deployment Complete!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Your website is now live on Vercel!" -ForegroundColor Yellow
    Write-Host "Check the URL above in the output." -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "Deployment failed. Please check the errors above." -ForegroundColor Red
}

