/*const router = require("express").Router();
const { Role, Category, Tag, RoleTag } = require("../../models");

// The `/api/roles` endpoint

// find all roles
// /api/roles
router.get("/", async (req, res) => {
  
  try {
    const roleData = await Role.findAll({
      include: [
        { model: Category },
        { model: Tag, attributes: ["id", "tag_name"] },
      ],
    });
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single role by its `id`
// /api/roles/:id
router.get("/:id", async (req, res) => {
  
  try {
    const roleData = await Role.findByPk(req.params.id, {
      include: [{ model: Category, model: Tag }],
    });

    if (!roleData) {
      res
        .status(404)
        .json({ message: "No role has been found with that id!" });
      return;
    }

    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new role
// /api/roles
router.post("/", async (req, res) => {

  try {
    const roleData = await role.create(
      {
        role_name: req.body.role_name,
        salary: req.body.salary,
        company: req.body.company,
        description: req.body.description, // confirm this 
        job_type: req.body.job_type,
        location_id: req.body.location_id,
        category_id: req.body.category_id,
      }
    );
    res.status(200).json(roleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update role data
// /api/roles/:id
router.put("/:id", (req, res) => {
  
  Role.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((role) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        RoleTag.findAll({
          where: { role_id: req.params.id },
        }).then((roleTags) => {
          // create filtered list of new tag_ids
          const roleTagIds = roleTags.map(({ tag_id }) => tag_id);
          const newRoleTags = req.body.tagIds
            .filter((tag_id) => !roleTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                role_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const roleTagsToRemove = roleTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            RoleTag.destroy({ where: { id: roleTagsToRemove } }),
            RoleTag.bulkCreate(newRoleTags),
          ]);
        });
      }

      return res.json(role);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// delete one role by its `id` value
// /api/roles/:id
router.delete("/:id", async (req, res) => {
 
  try {
    const roleData = await Role.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!roleData) {
      res
        .status(404)
        .json({ message: "No role has been found with that id!" });
      return;
    }
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
*/