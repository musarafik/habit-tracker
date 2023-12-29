import dotenv from "dotenv";
import App from "./app";

dotenv.config();

const port: number = Number(process.env.PORT || 3000);
const app: App = new App();
app.startServer(port);