// const routes = [
//     { href: "/travelhub/new", title: "New Post" },
//     { href: "/comment", title: "Comments" },
//     { href: "/logout", title: "Logout" },
//   ];
  
//   const authRoutes = [
//     { href: "/login", title: "Login" },
//     { href: "/register", title: "Register" },
//   ];
  
//   module.exports = function navLinks(req, res, next) {
//     if (req.session.currentUser) {
//       res.locals.routes = routes;
//     } else {
//       res.locals.routes = authRoutes;
//     }
//     // locals
//     next();
//   };