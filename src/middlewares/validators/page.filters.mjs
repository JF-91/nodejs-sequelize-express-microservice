import { body } from "express-validator";

export const validatePageCreation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("slug").isSlug().withMessage("Slug must be a valid URL-friendly string"),
];
