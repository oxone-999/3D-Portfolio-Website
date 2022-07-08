import express from "express";
import { addModels, addProjects, addTimeline, contact, deleteModels, deleteProjects, deleteTimeline, getUser, login, logout, myProfile, updateUser } from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated,myProfile);

userRouter.route("/admin/update").put(isAuthenticated,updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated,addTimeline);
userRouter.route("/admin/model/add").post(isAuthenticated,addModels);
userRouter.route("/admin/project/add").post(isAuthenticated,addProjects);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated,deleteTimeline);
userRouter.route("/admin/model/:id").delete(isAuthenticated,deleteModels);
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteProjects);

userRouter.route("/contact").post(contact);