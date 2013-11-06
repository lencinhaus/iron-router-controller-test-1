if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'layout'
  });

  BaseRouteController = RouteController.extend({
    before: function () {
      console.log('base.before');
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

  SubSubRouteController = SubRouteController.extend({});

  Router.map(function () {
    this.route('route', {
      path: '/',
      controller: SubSubRouteController
    });
  });
}