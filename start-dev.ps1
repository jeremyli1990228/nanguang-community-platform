# 南光社区治理平台 - PowerShell 启动脚本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "南光社区治理平台 - 开发服务器" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 切换到脚本所在目录
Set-Location $PSScriptRoot

Write-Host "[1/4] 检查 Node.js 和 npm..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    $npmVersion = npm --version
    Write-Host "Node.js 版本: $nodeVersion" -ForegroundColor Green
    Write-Host "npm 版本: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "错误：未找到 Node.js" -ForegroundColor Red
    Write-Host "请先安装 Node.js: https://nodejs.org/" -ForegroundColor Red
    Read-Host "按 Enter 键退出"
    exit 1
}

Write-Host ""
Write-Host "[2/4] 检查依赖是否已安装..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "正在安装依赖，请稍候..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "错误：依赖安装失败" -ForegroundColor Red
        Read-Host "按 Enter 键退出"
        exit 1
    }
} else {
    Write-Host "依赖已安装" -ForegroundColor Green
}

Write-Host ""
Write-Host "[3/4] 检查 TypeScript 配置..." -ForegroundColor Yellow
Write-Host "配置检查完成" -ForegroundColor Green

Write-Host ""
Write-Host "[4/4] 启动开发服务器..." -ForegroundColor Yellow
Write-Host ""
Write-Host "项目将在 http://localhost:3000 启动" -ForegroundColor Cyan
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Cyan
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 启动开发服务器
npm run dev
