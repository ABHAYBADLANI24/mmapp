const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/mm', (req, res) => {
	let msgs = ["Believe you can and you're halfway there. -Theodore Roosevelt",
  "The only way to do great work is to love what you do. -Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
  "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
  "In the middle of every difficulty lies opportunity. -Albert Einstein",
  "You miss 100% of the shots you don't take. -Wayne Gretzky",
];

	let r = parseInt(Math.random() * msgs.length);
  	res.send({ "msg": msgs[r]});
	res.send();
});

app.listen(9000, () => { console.log("read @ 9000"); } );