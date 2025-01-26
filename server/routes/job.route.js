import express from "express";
import { postJob, getJobs, getJobById, getAdminJobs } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/postjob").post(isAuthenticated, postJob);
router.route("/getjobs").get(getJobs);
router.route("/getjobs/:id").get(getJobById);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

export default router;