Template.proposals.events({

	'click a.visit-forum' : function (e) {
		var link = e.currentTarget;
		//mixpanel.track_links('a.visit-forum', 'visit forum', { track: $(link).data('track') });
	}

});

Template.samples.events({

	'click a' : function (e) {
		var link = e.currentTarget;
		//mixpanel.track_links('a', $(link).data('action'), { track: $(link).data('track') });
	}

});