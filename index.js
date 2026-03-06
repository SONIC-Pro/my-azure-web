app.get('/', (req, res) => {
    // 调试用：把所有的请求头打印到页面上
    const allHeaders = JSON.stringify(req.headers, null, 2);
    
    // 尝试读取用户名（注意：Header 键名在某些环境下是全小写的）
    const username = req.headers['x-ms-client-principal-name'] || '访客';
    
    res.send(`
        <h1>调试信息</h1>
        <p>当前识别到的用户名: <strong>${username}</strong></p>
        <hr>
        <h3>所有接收到的请求头 (Headers):</h3>
        <pre>${allHeaders}</pre>
    `);
});
