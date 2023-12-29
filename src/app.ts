import express, { Application } from "express";
import habitRouter from "./routes/habit-routes";

class App { 
    private app: Application
    
    constructor() { 
        this.app = express();
        this.useRoutes();
    }

    useRoutes(): void { 
        this.app.use("/api/habit", habitRouter);
    }

    startServer(port: number): void { 
        this.app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
}

export default App;