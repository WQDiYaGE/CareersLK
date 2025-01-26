import express from "express";
import { applyJob, getAppliedJobs, getApplicants, updateStatus } from "../controllers/application.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/applyjob/:id").get(isAuthenticated, applyJob);
router.route("/getappliedjobs").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(getApplicants);


router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;