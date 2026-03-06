// 如果你之后写 index.js 逻辑
app.get('/', (req, res) => {
    // 从 Header 中直接读取用户名
    const username = req.headers['x-ms-client-principal-name'];
    res.send(`<h1>你好, ${username}! 欢迎回来。</h1>`);
});
