const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
//   getDonarsController,
//   getHospitalController,
//   getOrgnaisationController,
//   getOrgnaisationForHospitalController,
//   getInventoryHospitalController,
//   getRecentInventoryController,
} = require("../controller/inventoryController");

const router = express.Router();


router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

// //GET HOSPITAL BLOOD RECORDS
// router.post(
//   "/get-inventory-hospital",
//   authMiddelware,
//   getInventoryHospitalController
// );

// //GET DONAR RECORDS
// router.get("/get-donars", authMiddelware, getDonarsController);

// //GET HOSPITAL RECORDS
// router.get("/get-hospitals", authMiddelware, getHospitalController);

// //GET orgnaisation RECORDS
// router.get("/get-orgnaisation", authMiddelware, getOrgnaisationController);

// //GET orgnaisation RECORDS
// router.get(
//   "/get-orgnaisation-for-hospital",
//   authMiddelware,
//   getOrgnaisationForHospitalController
// );

module.exports = router;