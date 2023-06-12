const express = require("express");

const app = express(); //creating an Express app
const port = process.env.PORT || "1806";

app.get("/", (request, response) => {
    response.status(200).send("Test");
});

//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
