Template.tweeter.rendered = function() {
	return !function(d,s,id) {
		var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js,fjs);
		}
	}(document, 'script', 'twitter-wjs');
}

Template.navigation.events({

	'click a.nav-blog': function(e) {
		//mixpanel.track_links('a.nav-blog', 'visit blog', {});
	},

	'click a.nav-proposals': function(e) {
		//mixpanel.track('nav click', { page: "proposals" });
	},

	'click a.nav-editions': function(e) {
		//mixpanel.track('nav click', { page: "editions" });
	},

	'click a.nav-friends': function(e) {
		//mixpanel.track('nav click', { page: "friends" });
	},
})