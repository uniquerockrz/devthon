Template.editions.events({

	'click a.register-hyd': function(e) {
		//mixpanel.track_links('a.register-hyd', 'visit registration page', {city: "Hyderabad", target: "editions" });
	},

	'click .ch-info a': function(e) {
		var action = $(e.currentTarget).data('action');
		var city = $(e.currentTarget).data('city');
		if (action) {
			//mixpanel.track_links('a.register-hyd', action, {city: city, target: "editions" });
		}
	}
});
