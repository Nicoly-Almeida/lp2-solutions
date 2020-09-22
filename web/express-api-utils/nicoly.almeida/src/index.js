const express = require("express");
const app = express();
const Routes = require("./routes");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(Routes);



app.listen(3333, () => console.log("Server Rodando na porta 3000"));