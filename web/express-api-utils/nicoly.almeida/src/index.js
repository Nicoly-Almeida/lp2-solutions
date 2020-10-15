const express = require("express");
const Routes = require("./routes");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(Routes);


app.listen(3000, () => console.log("Server Rodando na porta 3000"));