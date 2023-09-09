import express from "express";

import {
	getApplications,
	getCountries,
	createApplication,
} from "../controllers/beeceptorController.js";

const router = express.Router();

router.route("/application").get(getApplications).post(createApplication);
router.route("/country").get(getCountries);

export default router;
