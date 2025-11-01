# PowerShell script to push Pure Health website to GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Push to GitHub - Pure Health Website" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Adding all files..." -ForegroundColor Green
git add .

Write-Host ""
Write-Host "Step 2: Committing changes..." -ForegroundColor Green
git commit -m "Initial commit - Pure Health website"

Write-Host ""
Write-Host "Step 3: Setting main branch..." -ForegroundColor Green
git branch -M main

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "IMPORTANT: Before Step 4" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Create a new repository (name it 'pure-health' or your choice)" -ForegroundColor White
Write-Host "3. DO NOT check 'Initialize with README'" -ForegroundColor White
Write-Host "4. Click 'Create repository'" -ForegroundColor White
Write-Host "5. Copy the repository URL" -ForegroundColor White
Write-Host ""
$repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git)"

if ($repoUrl) {
    Write-Host ""
    Write-Host "Step 4: Adding remote origin..." -ForegroundColor Green
    
    # Check if origin already exists
    $origin = git remote get-url origin 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Remote 'origin' already exists. Removing it..." -ForegroundColor Yellow
        git remote remove origin
    }
    
    git remote add origin $repoUrl
    
    Write-Host ""
    Write-Host "Step 5: Pushing to GitHub..." -ForegroundColor Green
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "Success! Code pushed to GitHub!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Go to https://vercel.com" -ForegroundColor White
        Write-Host "2. Click 'Add New Project'" -ForegroundColor White
        Write-Host "3. Import your GitHub repository" -ForegroundColor White
        Write-Host "4. Click 'Deploy'" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "Push failed. Please check:" -ForegroundColor Red
        Write-Host "- Did you create the GitHub repository?" -ForegroundColor White
        Write-Host "- Is the URL correct?" -ForegroundColor White
        Write-Host "- Do you have authentication set up?" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "No URL provided. Run these commands manually:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "git remote add origin YOUR_REPO_URL" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
}

