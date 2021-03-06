const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

const listener = app.listen(process.env.PORT || 5080, () =>
    console.log(`Server started on port ${listener.address().port}`)
);
