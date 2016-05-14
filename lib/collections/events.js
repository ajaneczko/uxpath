Events = new Meteor.Collection("events");
var events = Events.find();

Events.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
     },
     'update': function (userID, doc) { return userId === event.userId; },
     'remove': function (userId,doc) {
       /* user and doc checks ,
       return true to allow insert */
       return true;
     }
});

Meteor.methods({
    createEvent:function(eventTitle, eventDescription, creatorID, eventType, eventDistance, eventDate, eventHour, eventMembers, eventCity,eventStartPackage, eventOrganizor, eventSponsors, eventBot, heroImageId) {
    return Events.insert({
        title: eventTitle,
        description: eventDescription,
        creator: creatorID,
        type: eventType,
        distance: eventDistance,
        date: eventDate,
        houre: eventHour,
        members: eventMembers,
        city: eventCity,
        startPackage: eventStartPackage,
        sponsors: eventSponsors,
        bot: eventBot,
        heroImageId: heroImageId,
        createdAt: new Date()},
        function(error, result) {
        console.log(error)
        })

    },
     deleteEvent: function(eventId) {
        Events.remove({ _id:eventId}, function(error,result) {
            if (error) {
                  toastr.error("Delete event... " + error);
            } else {
              toastr.success('Event deleted!');
            }
        })
     }

})
