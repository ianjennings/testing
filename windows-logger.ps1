# To run this file open a Windows PowerShell and run:
# `. .\windows-logger.ps1`

# I store my logs on D: drive, likes a boss.
$LogFilePath = "D:\file.txt"

# Function to get the current date and time
function Get-DateTime {
    Get-Date -Format "yyyy-MM-dd HH:mm:ss"
}

# Infinite loop to output and log the date every second
while ($true) {
    $CurrentDateTime = Get-DateTime
    Write-Host $CurrentDateTime
    $CurrentDateTime | Out-File -Append -FilePath $LogFilePath
    Start-Sleep -Seconds 1
}
