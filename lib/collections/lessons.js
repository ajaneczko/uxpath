Lessons = new Meteor.Collection("lessons");
var lessons = Lessons.find();

Lessons.allow({
    'insert': function (doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
     },
     'update': function (doc) { return true },
     'remove': function (doc) {
       /* user and doc checks ,
       return true to allow insert */
       return true;
     }
});
