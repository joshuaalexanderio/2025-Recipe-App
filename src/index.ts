
import express from 'express'; 
import path from 'path';    

// import 
import { getGlobals } from 'common-es';
const { __dirname, __filename } = getGlobals(import.meta.url) ; 

const app = express();
const PORT = process.env.PORT || 8080;
// serve static files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
