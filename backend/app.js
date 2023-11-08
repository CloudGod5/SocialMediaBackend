import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use("/", (req, res, next) => {
    res.send("CloudGod is at work");
});

mongoose.connect(
    "mongodb+srv://admin:Tingley1234...@blogappcluster.vq6ohp7.mongodb.net/Blog?retryWrites=true&w=majority"
    ).then(() => {
        app.listen(port, () => {
            console.log(`Connected to DB and Server running on port: ${port}`);
        });
    })
    .catch((err) => console.log(err));