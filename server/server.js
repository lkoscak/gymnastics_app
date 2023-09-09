import express from "express";

// router
import beeceptorRouter from "./routes/beeceptorRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";

// app setup
const app = express();
app.use(express.json());

// route setup
app.use("/api/v1/", beeceptorRouter);
app.use(notFoundMiddleware);

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
