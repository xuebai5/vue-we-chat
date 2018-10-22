'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('register', '/api/register', controller.user.create);
  router.post('login', '/api/login', controller.user.login);
};