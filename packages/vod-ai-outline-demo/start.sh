#!/bin/bash

echo "🚀 启动 VOD AI Outline Demo..."

# 检查Node.js是否安装
if ! command -v node &> /dev/null
then
    echo "❌ 错误: 未找到 Node.js，请先安装 Node.js"
    exit 1
fi

# 检查依赖是否安装
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install
fi

# 启动服务器
echo "🌟 启动服务器..."
npm start 