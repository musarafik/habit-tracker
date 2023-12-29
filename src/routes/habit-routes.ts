import { Router, Request, Response } from "express";

const habitRouter: Router = Router();

habitRouter.get("/", (req: Request, res: Response) => {
    res.send("get all");
});

habitRouter.get("/:id", (req: Request, res: Response) => {
    res.send("get specific with id");
});

habitRouter.post("/", (req: Request, res: Response) => {
    res.send("post");
});

export default habitRouter;