import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";
import path from "path";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

// Define a sample model
const Sample = sequelize.define('Sample', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Middleware
app.use(express.json());
app.use(cors());

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express.js API!" });
});

// Sample API route
app.get("/api/data", async (req, res) => {
  const samples = await Sample.findAll();
  res.json({ data: samples });
});

// Sync database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
