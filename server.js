const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the API!" });
});

// Defining general routes;

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
