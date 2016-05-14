Template.sectionOne.onRendered(function () {
    Session.set('counter',0);
    $('#example2')
          .progress({
            total: 20
          })
        ;

    $('#example2')
              .progress({
                percent: 0
              })
            ;
});



Template.sectionOne.events({
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
    var progres = (counter/20) * 100
    console.log(progres)
    $('#example2').progress({
     percent: progres
    });

  },
  'click #backToMain': function() {
          Router.go('/');
      }
});

Template.sectionOne.helpers({
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
