import { Router } from "express";
import postRouter from "./post.route";
import userRouter from "./user.route";

const router = Router();

// Endpoint co check server status
router.get('/helth-check', async(req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
      };
      try {
        res.send(healthCheck);
      } catch (e) {
        healthCheck.message = e;
        res.status(503).send();
      }
})

// Import all user routes
router.use('/users', userRouter);
// Import all blog routes
router.use('/posts', postRouter);


export default router;
