const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const videoRoute = require('./video.route');
const planvideoRoute = require('./planvideo.route');
const boardRoute = require('./board.route');
const classesRoute = require('./classes.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const mediumRoute = require('./medium.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/videos',
    route: videoRoute,
  },
  {
    path: '/planvideos',
    route: planvideoRoute,
  },
  {
    path: '/board',
    route: boardRoute,
  },
  {
    path: '/classes',
    route: classesRoute,
  },
  {
    path: '/medium',
    route: mediumRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
