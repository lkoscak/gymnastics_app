import { StatusCodes } from "http-status-codes";
import fetch from "node-fetch";

const getApplications = async (_req, res) => {
	try {
		const response = await fetch(
			"https://elevien-fe-job.free.beeceptor.com/applications"
		);
		const data = await response.json();
		res.status(StatusCodes.OK).json(data);
	} catch (error) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "Request could not be processed" });
	}
};
const getCountries = async (_req, res) => {
	try {
		const response = await fetch(
			"https://elevien-fe-job.free.beeceptor.com/countries"
		);
		const data = await response.json();
		res.status(StatusCodes.OK).json(data);
	} catch (error) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "Request could not be processed" });
	}
};

const createApplication = async (req, res) => {
	const application = req.body;
	if (!application) {
		res.status(StatusCodes.BAD_REQUEST).json({ msg: "Bad request" });
	}

	try {
		await fetch("https://elevien-fe-job.free.beeceptor.com/application", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: application,
		});
		res.status(StatusCodes.CREATED).json({ msg: "Created" });
	} catch (error) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "Request could not be processed" });
	}
};

export { getApplications, getCountries, createApplication };
