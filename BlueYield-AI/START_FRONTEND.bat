@echo off
cd /d "%~dp0frontend"
echo Starting BlueYield website at http://localhost:5500
python -m http.server 5500
pause
