const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const dummyData = {
  name: "V. Radhika",
  referralCode: "radhika2025",
  totalDonations: 12450,
};

app.get("/api/user", (req, res) => {
  res.json(dummyData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Anjali", donations: 15000 },
    { name: "Radhika", donations: 12450 },
    { name: "Kiran", donations: 9800 }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
