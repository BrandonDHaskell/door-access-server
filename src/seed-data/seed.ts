import { sequelize } from "../config/connections";
import { CardId } from "../models";
import seedCardIds from "./seedCardIds.json";

async function initializeDatabase() {
  await sequelize.sync({ force: true }); // This will drop and recreate tables
  await CardId.bulkCreate(seedCardIds);
}

initializeDatabase().then(() => console.log("Database initialized and seeded"));
