import { Router } from "express";
import {
  // insertSignUpInfo,
  // searchAllInfo,
  insertSignUpData,
  searchAllUserData,
} from "../controller/user.controller";

const router = Router();

router.use(insertSignUpData, searchAllUserData);
router.get("/signupinfo/AllList", searchAllUserData);
router.post("/signupinfo/insertInfo", insertSignUpData);

export default router;
