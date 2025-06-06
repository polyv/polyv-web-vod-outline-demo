const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8083;

// 启用CORS
app.use(cors());

// 静态文件服务 - 当前目录
app.use(express.static(__dirname));

// 静态文件服务 - vod-ai-outline-ui的dist目录
app.use('/dist', express.static(path.join(__dirname, '../vod-ai-outline-ui/dist')));

// 主页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 VOD AI Outline Demo 服务器已启动`);
    console.log(`📍 本地地址: http://localhost:${PORT}`);
    console.log(`🎯 在浏览器中打开上述地址查看demo`);
    console.log(`⏹️  按 Ctrl+C 停止服务器`);
});

// 优雅关闭
process.on('SIGINT', () => {
    console.log('\n🛑 正在停止服务器...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 正在停止服务器...');
    process.exit(0);
}); 