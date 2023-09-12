import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// router
import beeceptorRouter from "./routes/beeceptorRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";

// app setup
const app = express();
app.use(express.json());
app.use(cors());

// serving static files
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (_req, res, _next) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

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
