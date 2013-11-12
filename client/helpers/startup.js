Meteor.startup(function(){
  
});

Template.testimonials.tweets = function() {
	return [
		{ tweet: 'Update from <a href="https://twitter.com/devthon">@devthon</a>: <a href="http://t.co/LUrt4H6HjP">http://t.co/LUrt4H6HjP</a>. <a href="https://twitter.com/search?q=%23Hyderabad&amp;src=hash">#Hyderabad</a> <a href="https://twitter.com/search?q=%23hackers&amp;src=hash">#hackers</a> - a few reasons you should attend the next one :)', name: 'Tulsi Dharmarajan', handle: 'tulsid', link: 'https://twitter.com/tulsid/statuses/367645657701441538', date: 'August 14, 2013' },
		{ tweet: '“Why you will love Devthon?” and why you&#39;ll be there the next time <a href="https://t.co/c3XwpEsrCB">https://t.co/c3XwpEsrCB</a>', name: 'Chilli', handle: 'imran_parvez', link: 'https://twitter.com/imran_parvez/statuses/387149496003485696">October 7, 2013' },
		{ tweet: 'A <a href="https://twitter.com/search?q=%23devthon&amp;src=hash">#devthon</a> for an hour should keep on nerves alone than anything you do it yourselves or within your group. It&#39;s just awesome. Try that!', name: 'Mohammad Abdurraafay', handle: 'mohdabdurraafay', link: 'https://twitter.com/mohdabdurraafay/statuses/386411183311310848', date: 'October 5, 2013' },
		{ tweet: 'At Devthon Bangalore AMAZING ideas, like <a href="http://t.co/LDjQN9aoF8">http://t.co/LDjQN9aoF8</a>. Getting the best to <a href="http://t.co/DSQCItqgFV">http://t.co/DSQCItqgFV</a> on Weds <a href="https://twitter.com/search?q=%23jaagarnaut&amp;src=hash">#jaagarnaut</a>', name: 'amissingham', handle: 'amissingham', link: 'https://twitter.com/amissingham/statuses/343684123845599232', date: 'June 9, 2013' },
		{ tweet: 'Want to experience the beauty of collaborative development? Come to <a href="https://twitter.com/search?q=%23devthon&amp;src=hash">#devthon</a>. Chaakri development on Fastrack&#10;(p. s. Yii frameworks rocks)', name: 'Bipin Upadhyay', handle: 'BipinU', link: 'https://twitter.com/BipinU/statuses/366458117082464257', date: 'August 11, 2013' },
		{ tweet: 'Great food at <a href="https://twitter.com/devthon">@devthon</a> with fresh fruits and beverages ideal for the hot day. Am still feeling fresh to code. <a href="https://twitter.com/search?q=%23devthon&amp;src=hash">#devthon</a>', name: 'Sathish', handle: 't_sathish_kumar', link: 'https://twitter.com/t_sathish_kumar/statuses/318028498696552449', date: 'March 30, 2013' },
		{ tweet: 'Had a great time at <a href="https://twitter.com/search?q=%23Devthon&amp;src=hash">#Devthon</a>. Its good to be surrounded by great ideas and awesome nerds. <a href="https://twitter.com/search?q=%23bangalore&amp;src=hash">#bangalore</a>', name: 'Amarnath (അമര്‍നാഥ്)', handle: 'vaamarnath', link: 'https://twitter.com/vaamarnath/statuses/343412027676581888', date: 'June 8, 2013' },
		{ tweet: 'Getting some cool insights on design and ux from <a href="https://twitter.com/MACRODON">@macrodon</a> at <a href="https://twitter.com/devthon">@devthon</a> <a href="https://twitter.com/search?q=%23mobile&amp;src=hash">#mobile</a> <a href="https://twitter.com/search?q=%23apps&amp;src=hash">#apps</a> <a href="https://twitter.com/search?q=%23design&amp;src=hash">#design</a> <a href="https://twitter.com/search?q=%23ux&amp;src=hash">#ux</a> <a href="https://twitter.com/prashantkv">@prashantkv</a> <a href="http://t.co/oVgKGlBeIy">pic.twitter.com/oVgKGlBeIy</a>', name: 'Aditya Kolli', handle: 'arthas191', link: 'https://twitter.com/arthas191/statuses/386832930099568640', date: 'October 6, 2013' },
		{ tweet: 'Devthon is a &#39;maker&#39; event with a confluence of art and technology. A weekend gathering to explore, tinker with... <a href="http://t.co/k8dSpuSGaC">http://t.co/k8dSpuSGaC</a>', name: 'Pecha Kucha Nights H', handle: 'pknhyd', link: 'https://twitter.com/pknhyd/statuses/362118991432531969', date: 'July 30, 2013' },
	]
}

Template.schedule.day1slots = function() {
	return [
		{ time: '9.00 am', activity: 'Check-in and networking', img: '/assets/schedule/saturday/sat_checkin.png'},
		{ time: '9.30 am', activity: 'Introductions and Idea pitches', img: '/assets/schedule/saturday/sat_pitching_ideas.png'},
		{ time: '10.00 am', activity: 'Team, formation and brainstorming', img: '/assets/schedule/saturday/sat_brainstorming.png'},
		{ time: '1.00 pm', activity: 'Lunch', img: '/assets/schedule/saturday/sat_lunch.png'},
		{ time: '4.00 pm', activity: 'Showcase for feedback', img: '/assets/schedule/sunday/sun_checkpoint.png'},
		{ time: '6.00 pm', activity: 'Interaction with other teams', img: '/assets/schedule/saturday/sat_interact.png'},
		{ time: '8.00 pm', activity: 'Dinner', img: '/assets/schedule/saturday/sat_dinner.png'}
	]
}

Template.schedule.day2slots = function() {
	return [
		{ time: '8.00 am', activity: 'Back to venue & gathering', img: '/assets/schedule/sunday/sun_breakfast.png'},
		{ time: '10.00 am', activity: 'Facilitator interaction', img: '/assets/schedule/sunday/sun_interaction.png'},
		{ time: '11.00 am', activity: 'Guest lightning talks', img: '/assets/schedule/sunday/sun_talks.png'},
		{ time: '1.00 pm', activity: 'Lunch', img: '/assets/schedule/sunday/sun_lunch.png'},
		{ time: '3.00 pm', activity: 'Checkpoint: Revisit challenges', img: '/assets/schedule/sunday/sun_checkpoint.png'},
		{ time: '6.00 pm', activity: 'Hack showcase/presentations', img: '/assets/schedule/sunday/sun_presentations.png'},
		{ time: '7.00 pm', activity: 'Networking', img: '/assets/schedule/sunday/sun_networking.svg'},
	]
}

Template.schedule.day1 = function() {
	return 'Saturday';
}

Template.schedule.day2 = function() {
	return 'Sunday';
}

Template.tracks.session = function () {
	return [
		{ title: 'Data/Visualizations', image: 'visualizations.svg', 
		description: 'Build visualizations using d3js or your \
		favorite visualization library for existing data',
		link: 'https://groups.google.com/forum/#!tags/devthon/data-visualizations'},

		{ title: 'Photography', image: 'photography.svg', 
		description: 'Hack around photography - explore diorama \
		effect or play around a little with bokehs',
		link: 'https://groups.google.com/forum/#!tags/devthon/photography'},

		{ title: 'Education', image: 'education.svg', 
		description: 'Propose and hack on ideas that assist \
		in improving the way students learn',
		link: 'https://groups.google.com/forum/#!tags/devthon/education'},

		{ title: 'City', image: 'government.svg', 
		description: 'Engage in ideas related to transport, traffic - \
		improve life in cities through technology',
		link: 'https://groups.google.com/forum/#!tags/devthon/city'},

		{ title: 'Defence', image: 'education.svg', 
		description: 'Explore hacks that assist defence personnel, \
		with proposals from veterans',
		link: 'https://groups.google.com/forum/#!tags/devthon/defence'},

		{ title: 'Outdoor', image: 'outdoor.svg', 
		description: 'Tinker around ideas that help adventurers or \
		hikers plan their treks or trips better',
		link: 'https://groups.google.com/forum/#!tags/devthon/outdoor'},
	]
}

Template.samples.hacks = function () {
	return [
		{ title: 'Point to point bus transportation maps', 
		link: 'http://www.youtube.com/watch?v=o1O4zQCen98', 
		description: 'Build a platform to enable \
		urban mobility map data generation for public transport',
		track: "city",
		edition: "0.4"},

		{ title: 'Redesigning the bus route board sign', 
		link: 'https://groups.google.com/forum/#!msg/devthon/JM0hExK_b98/JeVX6cw3NLwJ', 
		description: 'Paint new versions of route board \
		and conduct a usability study',
		track: "design",
		edition: "0.4"},

		{ title: 'Tinker around Raspberry Pi projects', 
		link: 'http://www.element14.com/community/community/raspberrypi_projects?CMP=KNC-FACEBOOK-RaspPiProj', 
		description: 'Choose and work on any Rasp Pi projects \
		or get started with your own idea',
		track: "data/visualizations"},
	]
}

Template.hackers.hackerlist = function() {
	return [
		{ image: "/assets/hackers/Tulsi Dharmarajan.jpg", name: "Tulsi Dharmarajan", projects: ["Chaakri: An open source job web application"] },
		{ image: "/assets/hackers/Prajwala.jpg", name: "Prajwala Manchikatla", projects: ["getRTI: A portal repository for RTI information"
		, "Background JS in Hybrid apps"] },		
        { image: "/assets/hackers/hackmaster.jpg", name: "Prashant K V", projects: ["Devthon home website", "Devthon proposals portal"] },
        { image: "/assets/hackers/Imran.jpg", name: "Imran Parvez", projects: ["SVG indoor maps for large shopping malls"] },
        { image: "/assets/hackers/Harsha Devulapalli.jpg", name: "Harsha Devulapalli", projects: ["Point to point bus transportation maps"] },
		{ image: "/assets/hackers/Sujeath.jpg", name: "Sujeath Pareddy", projects: ["Traffic simulation to analyze flow in major junctions", 
		"Point to point bus transportation maps"] },
		{ image: "/assets/hackers/Danish.jpg", name: "Danish Amber", projects: ["Streaming server using Raspberry Pi"] },
        { image: "/assets/hackers/Aditya Kolli.jpg", name: "Aditya Kolli", projects: ["Algorithm to eliminate motion from photographs"] },
		{ image: "/assets/hackers/Gokul N K.jpg", name: "Gokul N K", projects: ["Spatial gesture sign language recognition", "Karnataka Election Results Visualization and Analysis"] },
		{ image: "/assets/hackers/Paresh Masade.jpg", name: "Paresh Masade", projects: ["Complete Store Module extension for vaave.com"] },
		{ image: "/assets/hackers/Aravind Baskaran.jpg", name: "Aravind Baskaran", projects: ["Background JS in Hybrid apps"] },
		{ image: "/assets/hackers/Nisar.jpg", name: "Nisar Ul Haq", projects: ["Chaakri: An open source job web application"] },
		{ image: "/assets/hackers/Bipin.jpg", name: "Bipin Upadhyay", projects: ["Chaakri: An open source job web application"] },
		{ image: "/assets/hackers/Chakrapani Reddivari.jpg", name: "Chakrapani Reddivari", projects: ["Spatial gesture sign language recognition"] },
		{ image: "/assets/hackers/Ravi Balgi.jpg", name: "Ravi Madhukar Balgi", projects: ["Complete Store Module extension for vaave.com"] },
		{ image: "/assets/hackers/Sathish Kumar.jpg", name: "Sathish Kumar", projects: ["Background JS in Hybrid apps"] },
		{ image: "/assets/hackers/Kevin Jasti.jpg", name: "Kevin Jasti", projects: ["getRTI: A portal repository for RTI information"] },
		{ image: "/assets/hackers/Irfan.jpg", name: "Irfan", projects: ["Traffic simulation to analyze flow in major junctions"] },
		{ image: "/assets/hackers/Rohit Sharma.jpg", name: "Rohit Sharma", projects: ["Traffic simulation to analyze flow in major junctions"] },
		{ image: "/assets/hackers/Sumanta.jpg", name: "Sumanta Roy", projects: ["Explero: Learning Management System"] },
		{ image: "/assets/hackers/Febin John James.jpg", name: "Febin John James", projects: ["Jane: Interactive smart search interface"] },
		{ image: "/assets/hackers/Harish Krishnan.jpg", name: "Harish Krishnan", projects: ["getRTI: A portal repository for RTI information"] },
		{ image: "/assets/hackers/Kaushik Sripada.jpg", name: "Kaushik Sripada", projects: ["Chaakri: An open source job web application"] },
		{ image: "/assets/hackers/Nikhil Hollehonnur.jpg", name: "Nikhil Hollehonnur", projects: ["Gyrobike: A self-balance transport system"] },
	];
}

Template.header.address = function(){
  return "Hackspace, Azri Solutions, 3rd floor, Near YSR statue, 100 Feet Road, Ayyappa Society Layout, Madhapur";
}

Template.header.map = function() {
	return "https://www.google.com/maps/preview#!data=!1m4!1m3!1d805!2d78.3927645!3d17.4510409";
}

Template.header.date = function() {
  return "November 16-17, 2013";
}

Template.register.open = function() {
  return true;
}
