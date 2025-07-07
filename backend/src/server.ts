import dotenv from "dotenv";
import app from "./app"; // 👈 Import the configured app

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
