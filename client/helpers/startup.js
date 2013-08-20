Meteor.startup(function(){

});

Template.schedule.day1slots = function() {
	return [
		/*
		{ time: '9.00 am', activity: 'Check-in and networking', 
		  img: '/assets/schedule/saturday/sat_checkin.png'},
		*/
		
	]
}

Template.schedule.day2slots = function() {
	return [
		/*
		{ time: '8.00 am', activity: 'Breakfast and gathering', 
		  img: '/assets/schedule/sunday/sun_breakfast.png'},
		*/
	]
}

Template.schedule.day1 = function() {
	return '';
}

Template.schedule.day2 = function() {
	return '';
}

Template.tracks.session = function () {
	return [

		/*
		{ title: 'Data/Visualizations', image: 'visualizations.svg', 
		description: 'Build visualizations using d3js or your \
		favorite visualization library for existing data',
		link: 'https://groups.google.com/forum/#!tags/devthon/data-visualizations'},
		*/
	]
}

Template.samples.hacks = function () {
	return [

		/*
		{ title: 'Modelling traffic jams in major city junctions using Julia', 
		link: 'https://groups.google.com/forum/#!topic/devthon/cQGykaRZ5Ew', 
		description: 'Based on the Physics Behind Traffic Jams, draft a mathematical \
		model of the same and putting up the test data on Julia? This will assist in \
		determining traffic flow in important junctions during important days.',
		track: "data/visualizations"},\
		*/
	]
}

Template.facilitators.details = function () {
	
	return [
		/*
		{
			name: "Prashant",
			image: "/assets/facilitators/image.jpg",
			description: "Prashant is a tinkerer who loves to solve real life \
			problem statements to make lives better. He currently runs the \
			innovation space called Devthon where brilliant minds come \
			together to explore on what they love the most"
		},
		*/
	];
}

Template.header.address = function(){
  return "";
}

Template.header.date = function() {
  return "";
}

Template.register.open = function() {
  return false;
}