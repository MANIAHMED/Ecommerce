const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  productDetails,
  createProductReview,
  getProductReviews,
  deleteReview
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();

//Get Route for product which shows the products and integerating the logic from controller
router.route("/products").get(getAllProducts);

//Post Route for Product For creating a new Product and saving it on database
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRole("admin"),  createProducts);

//Put Route for updating of Product
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteProduct);

router.route("/product/:id").get(productDetails);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/review").get(isAuthenticatedUser, getProductReviews).delete(isAuthenticatedUser, deleteReview)

module.exports = router;
