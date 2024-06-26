const router = require("express").Router();
const { Category, Role } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// /api/categories
router.get("/", async (req, res) => {
 
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Role }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// /api/categories/:id
router.get("/:id", async (req, res) => {

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Role }],
    });

    if (!categoryData) {
      res
        .status(404)
        .json({ message: "No category has been found with that id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
// /api/categories
router.post("/", async (req, res) => {

  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
// /api/categories/:id
router.put("/:id", async (req, res) => {

  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!categoryData) {
      res
        .status(200)
        .json(categoryData, {
          message: "No category has been found with that id!",
        });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
// /api/categories/:id
router.delete("/:id", async (req, res) => {
  
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res
        .status(404)
        .json({ message: "No category has been found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
