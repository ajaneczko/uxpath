Meteor.publish('allChapters', function() {
	return Chapters.find({});
});

Meteor.publish('allLessons', function() {
	return Lessons.find({});
});
