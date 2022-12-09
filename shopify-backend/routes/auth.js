const express = require("express");
const router = express.Router();

/**
 * @author Rohan Teja
 */

const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../../../../react-node-ecommerce/final-code-with-improvments/ecommerce/controllers/auth");
const { userSignupValidator } = require("../../../../react-node-ecommerce/final-code-with-improvments/ecommerce/validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
