import express from "express";
import bodyParser from 'body-parser';
import { filebaseFiles } from "./filebaseFiles";

const app = express();
const port = 9000;

app.use(bodyParser.json());

// filebaseFiles
app.get("/filebaseFiles", (_req, res) => {
    return res.send(filebaseFiles);
});


app.post("/delete-filebaseFile", (req, res) => {
    const id: string = req.body.id;

    for (let i = 0; i < filebaseFiles.length; i++) {
        if (filebaseFiles[i].id === id) {
            return res.send(filebaseFiles.splice(i, 1));
        }
    }

    return res.send('failed to delete file')

});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);