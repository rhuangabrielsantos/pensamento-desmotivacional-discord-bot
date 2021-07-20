const express = require("express");

let app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
