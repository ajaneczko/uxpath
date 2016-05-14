Template.learningMaterials.onRendered(function(){
    console.log(this)

})

Template.learningMaterials.events({
  'click #backToMain': function() {
      Router.go('/');
  }
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