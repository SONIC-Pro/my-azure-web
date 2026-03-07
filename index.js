const express = require('express');
const app = express();

// 1. 设置端口，必须监听 process.env.PORT
const port = process.env.PORT || 8080;

// 定义一个获取环境配置的逻辑
const dbConnection = process.env.DB_URL || "localhost:27017 (这是本地开发环境)";

app.get('/env', (req, res) => {
    res.send(`
        <h1>环境配置测试</h1>
        <p>当前数据库连接地址: <strong>${dbConnection}</strong></p>
    `);
// app.get('/', (req, res) => {
//     // 优先读取 principal-name，如果缺失，尝试读取 principal-id
//     const username = req.headers['x-ms-client-principal-name'] || 
//                      req.headers['x-ms-client-principal-id'] || 
//                      '访客';
//     const secretName = process.env.MY_SECRET_NAME || '未定义的秘密';
//     res.send(`<h1>你好, ${username}!</h1><p>从环境变量读取到的秘密是: ${secretName}</p>`);
    
    // 如果你想显示 GitHub 的登录名，通常需要从 principal-id 获取
    // 但为了实验成功，我们先看 ID 是否能显示出来
    // res.send(`
    //     <h1>调试成功！</h1>
    //     <p>你的 GitHub 内部 ID 是: <strong>${username}</strong></p>
    //     <p>身份提供商: <strong>${req.headers['x-ms-client-principal-idp']}</strong></p>
    //     <hr>
    //     <p>提示：GitHub 有时不会返回 Display Name，所以 Azure 无法填充 principal-name。</p>
    // `);

});

app.listen(port, () => {
    console.log(`应用正在端口 ${port} 上运行`);
});
