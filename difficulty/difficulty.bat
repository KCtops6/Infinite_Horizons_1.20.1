@echo off
color 9
echo difficulty selector
echo N: Normal (default mode)
echo E: Expert (harder progression)
set /p DIFF="Mode: "

if /I "%DIFF%"=="N" (
    echo global.mode = 'normal' > "%~dp0..\kubejs\startup_scripts\difficulty.js"
    echo Mode set to Normal.
) else if /I "%DIFF%"=="E" (
    echo global.mode = 'expert' > "%~dp0..\kubejs\startup_scripts\difficulty.js"
    echo Mode set to Expert.
) else (
    echo Invalid output!
)

pause
exit
