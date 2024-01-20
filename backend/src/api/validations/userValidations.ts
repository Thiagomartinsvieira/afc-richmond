import { Request, Response } from "express";

export const validateRequiredFields = (
  req: Request,
  res: Response,
  requiredFields: string[],
) => {
  const missingFields: string[] = [];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    return res.status(422).json({
      error: `The following fields are required: ${missingFields.join(", ")}`,
    });
  }
};

export const passwordsMatch = (
  _req: Request,
  res: Response,
  password: String,
  confirmpassword: String,
) => {
  if (password !== confirmpassword) {
    res
      .status(422)
      .json({ error: "The password and the confirmation must be the same" });
    return;
  }
};
