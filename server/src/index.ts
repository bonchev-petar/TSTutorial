import express from "express";
import { router } from "./routes/loginRoutes";
import { urlencoded } from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["sarars"] }));
app.use(router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
