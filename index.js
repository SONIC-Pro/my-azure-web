const express = require('express');
const app = express();

// 1. 设置端口，必须监听 process.env.PORT
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    // 2. 从 Header 中读取由 Azure 身份验证模块塞入的用户名
    const username = req.headers['x-ms-client-principal-name'] || '访客';
    
    res.send(`
        <h1>你好, ${username}!</h1>
        <p>欢迎回来。这是来自 Azure App Service 的个性化响应。</p>
        <hr>
        <p>如果你看到的是“访客”，请确保你已经开启了身份验证并已登录。</p>
    `);
});

app.listen(port, () => {
    console.log(`应用正在端口 ${port} 上运行`);
});
