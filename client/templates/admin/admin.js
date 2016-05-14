Template.adminDashboard.created = function () {
  Tracker.autorun(function() {
    Meteor.subscribe('allChapters');
    Meteor.subscribe('allLessons');
  });
};

Template.adminDashboard.onRendered(function(){

})
Template.adminChapter.events({
    'submit .new-lesson': function(event){

            event.preventDefault();

            // Get value from form element
            const target = event.target;
            const text = target.text.value;
            console.log(target)
            newLesson(this._id,text)

        },
})

Template.adminLesson.events({
     'click #delete-lesson'(event, instance) {

         let chapterId = Template.parentData(1)._id
         var lesson = Chapters.find({_id:chapterId},{lessons:this.title}).fetch();
         Chapters.update({_id: chapterId}, {$pull : {lessons: {title:this.title}}});
         console.log(lesson)

     },
     'click #finished-lesson'(event, instance) {
          let chapterId = Template.parentData(1)._id
          var newLesson = Lessons.find({_id:this._id}).fetch();

          console.log(newLesson)
          console.log(this)


           Chapters.update(
               {_id:chapterId, 'lessons._id':this.id},
               { $set: {status:true}}
           );
          $(event.target).addClass('green')
      }
})

Template.adminDashboard.events({
    'click #new-chapter'(event, instance) {
        newChapter()
      },
    'click #add-new-lesson'(event, instance) {
        let lessonTitle = Session.get('lessonTitle')
        newLesson(this._id,lessonTitle)

    },

})

Template.adminDashboard.helpers({
    chapters: function() {
        return Chapters.find().map(function(chapter, index) {
          if (index === 0)
            chapter.isFirst = true;
          return chapter;
        });
    },
    lessons: function() {
        console.log(this._id)
        var chapter = Chapters.find({_id:this._id}).fetch();
        var lessons = chapter[0].lessons
        return lessons
    },
})



newChapter = function () {

    var chapters = Chapters.find({}).fetch();
    var newChapter = 'Chapter #' + chapters.length
    console.log(newChapter)
    Chapters.insert({
        title: newChapter,
        dueDate: '20160615',
        createdAt: new Date(),
        status: false
    },
     function(error, result) {
     console.log(error)
     })
}

newLesson = function (id,lessonTitle) {

    var lessons = Lessons.find({}).fetch();
    var newLesson = {
        title: lessonTitle,
        dueDate: '20160615',
        createdAt: new Date(),
        status: false
    }


    Chapters.update(
        {_id:id},
        { $addToSet: {lessons:newLesson}}
    );


}

