ApplicationController = RouteController.extend({
  layoutTemplate: 'ApplicationLayout',

});

Router.route('/', function() {
    this.render('main');
});

Router.route('/chapter-one', function() {
	this.render('sectionOne')
})


Router.route('/chapter-zero', function() {
	this.render('sectionZero')
})

Router.route('/admin', {
	name: 'admin',
	template: 'adminDashboard',
});

Router.route('/create-event', {
	name: 'createEventForm',
	template: 'createEventForm'
});


Router.route('/learning-materials', {
	name: 'learningMaterials',
	template: 'learningMaterials'
});

