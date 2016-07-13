Template.chapterTwoLessons.onRendered(function () {
  $(window).on('keydown', function(e){
    if (e.which === 39) {
      var counter = Session.get('counter');
      counter += 1

      Session.set('counter', counter)
      updateProgress(counter);
    }
        console.log(e.which);
    });

 $('#example2')
       .progress({
         total: 50
       })
     ;

     $('#example2')
       .progress({
         percent: 0
       })
     ;

     $('.ui.checkbox').checkbox();
     var counter = Session.get('counter')

     if (counter === undefined) {
           Session.set('counter',0);

         } else {

              var progres = (counter/50) * 100
             console.log(progres)
             $('#example2').progress({
              percent: progres
             });
             for (i = 0; i < counter; i++) {
                 $('#mess'+i).removeClass('hidden')

             }

         }
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
     $('#mess'+counter).removeClass('hidden')
     var progres = (counter/50) * 100
     if (counter == 50) {
         $('#nextMessage').addClass('disabled')
     }

     if (counter == 10) {
         $('#step1').removeClass('active')
         $('#step1').addClass('completed')
         $('#step2').addClass('active')
     }

     if (counter == 14) {
         $('#step3').addClass('active')
         $('#step2').removeClass('active')
         $('#step2').addClass('completed')
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

updateProgress = function (counter) {

  // increment the counter when button is clicked


  $('#mess'+counter).removeClass('hidden')
  var progres = (counter/50) * 100
  if (counter == 50) {
      $('#nextMessage').addClass('disabled')
  }

  if (counter == 10) {
      $('#step1').removeClass('active')
      $('#step1').addClass('completed')
      $('#step2').addClass('active')
  }

  if (counter == 25) {
      $('#step3').addClass('active')
      $('#step2').removeClass('active')
      $('#step2').addClass('completed')
  }

  if (counter == 33) {
      $('#step4').addClass('active')
      $('#step3').removeClass('active')
      $('#step3').addClass('completed')
  }

  if (counter < 50) {
      $('#example2').progress({
       percent: progres
      });
  }


  document.getElementById('mess'+counter).scrollIntoView(false, {behavior: "smooth"});

}
