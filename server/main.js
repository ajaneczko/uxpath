Meteor.publish('chapters', function() {
	return Events.find({});
});
