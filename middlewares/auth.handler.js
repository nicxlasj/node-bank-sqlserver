import { forbidden } from "@hapi/boom";

export function checkRole (...roles) {
  return (req, res, next) => {
    const role = req.user.role;
    if (roles.includes(role)) {
      next();
    } else {
      next(forbidden("No estás autorizado"));
    }
  };
};
