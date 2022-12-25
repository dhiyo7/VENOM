import { Request, Response } from "express";

type Users = {
  name: string;
  email: string;
};

export const getUser = (req: Request, res: Response) => {
  const users: Array<Users> = [
    {
      name: "Dhiyo Reksa",
      email: "dhiyo@mail.com",
    },
    {
      name: "PLUGIN",
      email: "plugin@mail.com",
    },
  ];

  return res.json(users)
};
