import { Router } from "express";
import { HomeGet } from '../controllers/HomeController.js'
import { getBlog, getData, getBlogData, postLikeData, postSaveData, postComment } from "../controllers/BlogController.js";
const router2 = Router();

router2.get('/', HomeGet)

router2.post("/blog", getBlog)
router2.get("/getdata", getData)
router2.get("/getdata/:id", getBlogData)
router2.post("/postlike", postLikeData)
router2.post("/postsave", postSaveData)
router2.post("/postcomment", postComment)

export default router2;