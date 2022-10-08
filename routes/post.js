const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { user, post } = new PrismaClient();

router.post("/", async (req, res) => {
  const { title, content, user_id } = req.body;
  const userExist = await user.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!userExist) {
    return res.status(400).json({
      msg: "user not found",
    });
  }

  const newPost = await post.create({
    data: {
      title,
      post: content,
      user_id,
    },
  });
  res.json(newPost);
});

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const id = parseInt(user_id);
  // console.log("user_id", id);

  const posts = await post.findMany({
    where: {
      user_id: id,
    },
    select: {
      title: true,
      created_at: true,
      post: true,
      user: true,
    },
  });

  res.json(posts);
});
module.exports = router;
