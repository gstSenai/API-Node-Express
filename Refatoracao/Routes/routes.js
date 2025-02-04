const express = require("express");

const router = express.Router();
const userController = require("../Controller/userController");
const imageController = require("../Controller/imageController");

router.post("/add_user",userController.addUser);
router.get("/get_user/:nome", userController.getUser);
router.get("/get_all_users", userController.getAllUsers);
router.delete("/delete_user/:nome", userController.deleteUser);
router.put("/put_user/:Id", userController.putUser);

router.post("/add_image",imageController.addImage);
router.get("/get_image/:titulo", imageController.getImage);
router.get("/get_all_images", imageController.getAllImage);
router.delete("/delete_image/:titulo", imageController.deleteImage);
router.put("/put_image/:Id", imageController.putImage);

module.exports = router;