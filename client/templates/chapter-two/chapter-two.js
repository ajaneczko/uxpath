Template.chapterTwoLessons.onRendered(function () {
  Session.set('counter',0);
  $('#example2')
        .progress({
          total: 15
        })
      ;

  $('#example2')
            .progress({
              percent: 0
            })
          ;
});



Template.chapterTwoLessons.events({
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
  var progres = (counter/15) * 100
  console.log(progres)
  if (counter == 15) {

      console.log(progres)
      $('#nextMessage').addClass('disabled')
  }

  if (counter < 16) {
      $('#example2').progress({
       percent: progres
      });
  }

},
'click #backToMain': function() {
    Router.go('/');
}
});

Template.chapterTwoLessons.helpers({
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
}
});
