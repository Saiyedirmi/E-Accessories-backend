const express = require("express");
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, addtoWishlist, rating } = require("../controller/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.put("/wishlist", addtoWishlist);
router.put("/rating", rating);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/", getAllProduct);

module.exports = router;