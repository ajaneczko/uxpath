Chapters = new Meteor.Collection("chapters");
var myChapters = Chapters.find();

Chapters.allow({
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


Meteor.methods({
    createChapter:function(chapterTitle, chapterStatus) {
    return Chapters.insert({
        title: chapterTitle,
        status: chapterStatus,
        createdAt: new Date()},
        function(error, result) {
            console.log(error)
            toastr.success('Chapter deleted!');
        })

    },
    updateChapter: function(chapterId,lessonNumber) {
        console.log(chapterId)
        var lesson = 'lessons.'+lessonNumber+'.status'
        console.log(lesson)
        Chapters.update({_id: chapterId},{$set : {'chapters.$.status':true}});
    },

     deleteChapter: function(eventId) {
        Events.remove({ _id:eventId}, function(error,result) {
            if (error) {
                  toastr.error("Delete chapter... " + error);
            } else {
              toastr.success('Chapter deleted!');
            }
        })
     }

})
