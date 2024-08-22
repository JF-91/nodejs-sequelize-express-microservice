import { body } from "express-validator";

export const validatePostCreation = [
    body("title").notEmpty().withMessage("Title is required"),
    body("content").notEmpty().withMessage("Content is required"),
    body("pageId").notEmpty().withMessage("PageId is required"),
];