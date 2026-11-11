
const express = require('express');
const db = require('./config/database');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT NOW() AS currentTime');

        res.send(`
            <h1>MySQL 연결 성공!</h1>
            <p>현재 데이터베이스: db_project</p>
            <p>연결 시간: ${rows[0].currentTime}</p>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('MySQL 연결 실패');
    }
});

app.listen(PORT, () => {
    console.log(`서버 실행: http://localhost:${PORT}`);
});
