@echo off
echo ========================================
echo 南光社区治理平台 - 构建脚本
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
)

echo.
echo [3/3] 构建项目...
echo 正在构建生产版本，请稍候...
npm run build

if %errorlevel% neq 0 (
    echo 错误：构建失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo 构建成功！
echo 输出目录: dist
echo ========================================
echo.
echo 接下来您可以：
echo 1. 使用 npm run preview 预览构建结果
echo 2. 将 dist 目录部署到 Netlify
echo.
pause
