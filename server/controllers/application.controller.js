import Application from "../models/application.model.js";
import Job from "../models/job.model.js";
import User from "../models/user.model.js"; // Ensure this is imported

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        
        const jobId = req.params.id;
        console.log('Job ID from params: ', jobId);
        if(!jobId) {
            return res.status(400).json({ 
                message: 'Job id is required' 
            });
        }

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if(existingApplication) {
            return res.status(400).json({ 
                message: 'You have already applied for this job' 
            });
        }

        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(400).json({ 
                message: 'Job does not exist',
                success: false
            });
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(200).json({
            message: 'Job applied successfully',
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            message: 'Internal server error',
            success: false
        });
    }
};

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'job',
                sort: { createdAt: -1 },
                populate: { path: 'company' }
            });
        
        if(!application) {
            return res.status(400).json({ 
                message: 'No applications found',
                success: false
            });
        } 
        
        return res.status(200).json({
            application,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { 
                sort: { createdAt: -1 } 
            },
            populate: { 
                path: 'applicant' 
            }
        });
        
        if(!job) {
            return res.status(400).json({
                message: 'Job does not exist',
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const applicationId = req.params.id;
        const { status } = req.body;
        if(!status) {
            return res.status(400).json({
                message: 'Status is required',
                success: false
            });
        }

        const application = await Application.findOne({ _id: applicationId });
        if(!application) {
            return res.status(400).json({
                message: 'Application does not exist',
                success: false
            });
        }

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: 'Status updated successfully',
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
