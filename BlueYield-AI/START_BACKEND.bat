@echo off
cd /d "%~dp0"
echo Installing/checking Python packages...
python -m pip install -r backend\requirements.txt
echo.
echo Training BlueYield model...
python scripts\train_model.py
echo.
echo Starting BlueYield backend...
cd backend
python -m uvicorn app.main:app --reload
pause
