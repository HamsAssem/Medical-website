# PowerShell script to help add product images
# This script will open the images folder for you

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Pure Health - Image Setup Helper" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$imagesFolder = "$PSScriptRoot\public\images"

Write-Host "Opening images folder..." -ForegroundColor Green
Write-Host "Folder: $imagesFolder" -ForegroundColor Gray
Write-Host ""

# Open the folder in Windows Explorer
Start-Process explorer.exe -ArgumentList $imagesFolder

Write-Host "INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "1. The folder should now be open in Windows Explorer" -ForegroundColor White
Write-Host "2. Drag and drop your Spermaid+ photo into this folder" -ForegroundColor White
Write-Host "3. Right-click the photo → Rename → Change to: spermaid-product.jpg" -ForegroundColor White
Write-Host "4. Drag and drop your Fertil Max photo into this folder" -ForegroundColor White
Write-Host "5. Right-click the photo → Rename → Change to: fertilmax-product.jpg" -ForegroundColor White
Write-Host ""
Write-Host "After adding the images, refresh your browser!" -ForegroundColor Green
Write-Host ""

Read-Host "Press Enter when you've added the images"

# Check if images exist
$spermaid = Get-ChildItem -Path $imagesFolder -Filter "spermaid-product.*" -ErrorAction SilentlyContinue
$fertilmax = Get-ChildItem -Path $imagesFolder -Filter "fertilmax-product.*" -ErrorAction SilentlyContinue

Write-Host ""
if ($spermaid) {
    Write-Host "✓ Spermaid+ image found: $($spermaid.Name)" -ForegroundColor Green
} else {
    Write-Host "✗ Spermaid+ image not found" -ForegroundColor Red
}

if ($fertilmax) {
    Write-Host "✓ Fertil Max image found: $($fertilmax.Name)" -ForegroundColor Green
} else {
    Write-Host "✗ Fertil Max image not found" -ForegroundColor Red
}

Write-Host ""
Write-Host "Done! Refresh your browser at http://localhost:3000" -ForegroundColor Cyan

