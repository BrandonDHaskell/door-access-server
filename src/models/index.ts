import { sequelize } from "../config/connections";
import CardId from "./CardId";

CardId.initialize(sequelize);

export { CardId };
