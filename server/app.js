Meteor.publish("allUsers", function(){
	return Meteor.users.find();
	this.ready();
});
