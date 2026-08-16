@echo off
cd /d "%~dp0"
python scripts\train_model.py
cd backend
uvicorn app.main:app --reload
pause
