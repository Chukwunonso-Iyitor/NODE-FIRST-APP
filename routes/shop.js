const express = require("express");
const router = express.Router();
const path = require("path");
const rootdir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  //   res.send(
  //     "<h1>Welcome to Express!</h1><br/><a href='/admin/add-product'>Shop</a>"
  //   );
  console.log('shop.js', adminData.products);
  res.sendFile(path.join(rootdir, "views", "shop.html"));
});

module.exports = router;
