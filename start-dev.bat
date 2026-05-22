@echo off
echo ========================================
echo 南光社区治理平台 - 开发服务器启动脚本
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] 检查 Node.js 和 npm...
node --version
if %errorlevel% neq 0 (
    echo 错误：未找到 Node.js
    echo 请先安装 Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo [2/3] 安装依赖（如果需要）...
if not exist "node_modules" (
    echo 正在安装依赖，请稍候...
    npm install
    if %errorlevel% neq 0 (
        echo 错误：依赖安装失败
        pause
        exit /b 1
    )
) else (
    echo 依赖已安装，跳过...
)

echo.
echo [3/3] 启动开发服务器...
echo 项目将在 http://localhost:3000 启动
echo 按 Ctrl+C 停止服务器
echo.
npm run dev

pause
