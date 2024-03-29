const express = require("express");
const path = require("path");
const rootdir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     `<form action="/admin/add-product" method="POST">
  //         <input type="text" name="title" placeholder="Enter text"/>
  //         <button type="submit">Submit</button>
  //     </form>`
  //   );
  res.sendFile(path.join(rootdir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
