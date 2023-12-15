import express from "express";
import userRouter from "./routes/userRoute.js";
import databaseService from "./service/database.service.js";
const app = express();
const port = 3004;

databaseService.run()

app.use(express.json());

app.use("/user",userRouter);

app.use((err, req, res, next) => {
  return res.json({err})
})


app.listen(port, () => {
  console.log(`Your app is starting at ${port}`);
});
