import newUserService from "../service/user.service.js"

export const registerController = async (req, res, next) => {
  const access_token = await newUserService.register(req.body)
  return res.json({
    message: "Registration successfully registered",
    result: (access_token)
  });
}

export const loginController = async (req, res, next) => {
  const user_id = req.new_database._id
  const access_token = await newUserService.login(req.body)
  return res.json({
    message: "Login successfully",
    result: (access_token)
  });
}

export const getMeControler = async (req, res, next) => {
  return res.json({})
}