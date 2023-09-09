import express from "express";

// app setup
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
