const http = require("http");
const path = require("path");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const server = http.createServer(app);

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "pug");
app.set("view", "view");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

server.listen(3000);
