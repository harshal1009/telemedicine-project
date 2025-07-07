import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 QuickHelp Backend is running!");
});

// ✅ Export app for use in server.ts
export default app;
