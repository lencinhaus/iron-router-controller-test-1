if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'layout'
  });

  BaseRouteController = RouteController.extend({
    before: function () {
      console.log('base.before');
    },

    data: function () {
      console.log('base.data');
      return {};
    },

    after: function () {
      console.log('base.after');
    }
  });

  SubRouteController = BaseRouteController.extend({
    template: 'route',
    before: function () {
      console.log('sub.before');
    }
  });

  Router.map(function () {
    this.route('route', {
      path: '/',
      controller: SubRouteController
    });
  });
}