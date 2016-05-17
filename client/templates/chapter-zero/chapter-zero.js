Template.chapterZeroLesson.onRendered(function () {
  Session.set('counter',0);
  $('#example2')
        .progress({
          total: 7
        })
      ;

  $('#example2')
            .progress({
              percent: 0
            })
          ;


});


Template.chapterZeroLesson.created = function () {
  Tracker.autorun(function() {
    Meteor.subscribe('allChapters');
  });
};

Template.chapterZeroLesson.events({
'click #nextMessage'(event, instance) {
  var counter = Session.get('counter');
  counter += 1
  // increment the counter when button is clicked
  $('#mess'+counter)
    .transition('fly down')
  ;
  Session.set('counter', counter)
  console.log('mess' + counter)
  $('#mess'+counter).removeClass('hidden')
  console.log(counter)
  var progres = (counter/7) * 100
  console.log(progres)
  if (counter == 7) {

      console.log(progres)
      $('#nextMessage').addClass('disabled')
      $('#finishChapter').addClass('disabled')
  }

  if (counter < 7) {
      $('#example2').progress({
       percent: progres
      });
  }

},
'click #finishChapter': function(){
     finishChapter('Chapter #0')
     },

'click #backToMain': function() {
        Router.go('/');
    }
});

Template.chapterZeroLesson.helpers({
'showMess': function() {
  var counter = Session.get('counter');
  return counter
},
'isFirst': function() {
  var counter = Session.get('counter');
  var isFirst = true
  if (counter > 0) {
      isFirst = false
  }
  console.log(isFirst)
  return isFirst
},
'isLast': function() {
    var counter = Session.get('counter');
    var isLast = false
    if (counter == 7) {
        isLast = true
    }
    return isLast
}
});

