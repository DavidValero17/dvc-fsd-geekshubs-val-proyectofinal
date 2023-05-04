const { User } = require("../models");

const isUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.user_id },
    });

    if (!user) {
      return res.status(500).json({
        success: true,
        message: "You don't have permissions.",
      });
    }

    req.user_id = user.id;

    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = isUser;
