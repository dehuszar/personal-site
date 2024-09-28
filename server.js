import express from 'express';
const app = express();
const port = 3000

app.use(express.static('build',{extensions:['html']}));
app.listen(port, () => {
	console.log("something is happening")
});

