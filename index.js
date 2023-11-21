// index.js
// list4-3(p191)1121

// 1：expressオブジェクトをrequire
const express = require('express')
// 2：appオブジェクト（アプリケーションの作成）
var app = express()
// 3：ルーティングの設定
app.get('/', (req, res) => {
    res.send('Welcom to Express!')
})
// 4：待ち受け開始
app.listen(3008, () => {
    console.log('Start server port:3008')
})