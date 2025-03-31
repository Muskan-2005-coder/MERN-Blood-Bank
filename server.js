
const express= require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/api/vi/test", require("./routes/testRoutes"));
app.use("/api/vi/auth", require("./routes/authRoutes"));
app.use("/api/vi/inventory", require("./routes/inventoryRoutes"));
// app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
// app.use("/api/v1/admin", require("./routes/adminRoutes"));


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});