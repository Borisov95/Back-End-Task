const Academy = require("../../../../pkg/models/academySchema");

exports.create = async (req, res) => {
  try {
    const createData = Academy.create(req.body);

    res.status(201).json({
      data: {
        posts: createData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const posts = await Academy.find();

    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error",
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const post = await Academy.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updateData = await Academy.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        updateData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Academy.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });

    res.status(200).json({});
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "error",
    });
  }
};
