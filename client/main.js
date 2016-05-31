
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  // fix main menu to page on passing

});

Template.header.helpers({
    chapters: function() {
      return Chapters.find({status:false}).map(function(chapter, index) {
        if (index === 0)
          chapter.isFirst = true;
        return chapter;
      });
    },
    chaptersFinished: function() {
      return Chapters.find({status:true}).fetch()
    }
});

Template.hello.onRendered(function () {
    Tracker.autorun(function() {

           Meteor.subscribe('assets');
          Meteor.subscribe('entries');
          Meteor.subscribe('contentTypes');
           console.log()


        Meteor.subscribe('myChapters');
      });
 $('.masthead')
            .visibility({
              once: false,
              onBottomPassed: function() {
                $('.fixed.menu').transition('fade in');
              },
              onBottomPassedReverse: function() {
                $('.fixed.menu').transition('fade out');
              }
            })
          ;

          // create sidebar and attach to menu open
          $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
          ;
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.chapterOne.created = function () {
  Tracker.autorun(function() {
    Meteor.subscribe('allChapters');
    Meteor.subscribe('assets');
    Meteor.subscribe('entries');
    Meteor.subscribe('contentTypes');
    console.log()
  });
};

Template.chapterZero.events({
  'click #go-to-chapter-zero'(event, instance) {
    Router.go('/chapter-zero');
  },

})


Template.chapterOne.events({
  'click #finish-chapter'(event, instance) {
    finishChapter('Chapter #1')
  },
  'click #go-to-chapter-one'(event,instance) {
     Router.go('/chapter-one');
  }
})

Template.chapterZero.helpers({
  'chapterFinished':function() {
    var chapter = Chapters.findOne({title: 'Chapter #0'});
    var status = chapter.status
    return status
  },
  'lessons':function() {
      var chapter = Chapters.findOne({title: 'Chapter #0'});
         console.log(chapter)
      var lessons = chapter.lessons
      console.log(lessons)
      return lessons
    },
  'dueTime': function () {
    var dueTime = moment("20160615", "YYYYMMDD").fromNow()
    return dueTime
  }
})

Template.chapterOne.helpers({
  'chapterFinished':function() {
    var chapter = Chapters.findOne({title: 'Chapter #1'});
    var status = chapter.status
    return status
  },
  'lessons':function() {
      var chapter = Chapters.findOne({title: 'Chapter #1'});
      console.log(chapter)
      var lessons = chapter.lessons
      console.log(lessons)
      return lessons
      },
  'dueTime': function () {
    var dueTime = moment("20160430", "YYYYMMDD").fromNow()
    return dueTime
  }
})

Template.chapterTwo.events({
  'click #finish-chapter'(event, instance) {
    finishChapter('Chapter #2')
  },
})



Template.chapterTwo.helpers({
  'chapterFinished':function() {
    var chapter = Chapters.findOne({title: 'Chapter #2'});
    var status = chapter.status
    return status
  },
  'lessons':function() {
        var chapter = Chapters.findOne({title: 'Chapter #2'});
        var lessons = chapter.lessons
        return lessons
      },
  'dueTime': function () {
   var dueTime = moment("20160513", "YYYYMMDD").fromNow()
    return dueTime
   }
})

Template.chapterThree.events({
    'click #go-to-chapter-three'(event,instance) {
       Router.go('/chapter-two');
    }
})

Template.chapterThree.helpers({
  'chapterFinished':function() {
    var chapter = Chapters.findOne({title: 'Chapter #2'});
    var status = chapter.status
    return status
  },
    'lessons':function() {
          var chapter = Chapters.findOne({title: 'Chapter #2'});
          var lessons = chapter.lessons
          return lessons
        },
    'dueTime': function () {
    var dueTime = moment("20160713", "YYYYMMDD").fromNow()
    return dueTime
    }
})



Template.chapterFour.helpers({
  'chapterFinished':function() {
    var chapter = Chapters.findOne({title: 'Chapter #4'});
    var status = chapter.status
    return status
  },
    'lessons':function() {
          var chapter = Chapters.findOne({title: 'Chapter #4'});
          var lessons = chapter.lessons
          return lessons
        },
    'dueTime': function () {
    var dueTime = moment("20160813", "YYYYMMDD").fromNow()
    return dueTime
    }
})


Template.chapterFive.helpers({
  'chapterFinished':function() {
    var chapter = Chapters.findOne({title: 'Chapter #5'});
    var status = chapter.status
    return status
  },
    'lessons':function() {
          var chapter = Chapters.findOne({title: 'Chapter #5'});
          var lessons = chapter.lessons
          return lessons
        },
    'dueTime': function () {
    var dueTime = moment("20160913", "YYYYMMDD").fromNow()
    return dueTime
    }
})


finishChapter = function (chapterTitle) {
    var exists = Chapters.findOne({title: chapterTitle});
    if(exists)
    {
        console.log("it exists");
        var newStatus = !exists.status
        console.log(newStatus)
        Chapters.update(
            {_id:exists._id},
            { $set: {status:newStatus}}
        );
    }else{
        console.log('doesnt exist');
        Chapters.insert({
            title: chapterTitle,
            dueDate: '20160615',
            createdAt: new Date(),
            status: true
        },
         function(error, result) {
         console.log(error)
         })
    }
}
