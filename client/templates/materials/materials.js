Template.learningMaterials.onRendered(function(){
    console.log(this)

})


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