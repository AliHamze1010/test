"use strict";

var express = require("express");

var app = express(); //creating an Express app

var port = process.env.PORT || "1806";
app.get("/", function (request, response) {
  response.status(200).send("Test");
}); //set up server listening

app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});
//# sourceMappingURL=index.dev.js.map
