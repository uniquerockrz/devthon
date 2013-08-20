Meteor.Router.add({
	
	'/': {
		to: 'home',
		and: function() {
			Session.set("activeLink", Meteor.Router.page());
			$('html,body').scrollTop(0);
		}
	},

	'/proposals': {
		to: 'proposals',
		and: function() {
			Session.set("activeLink", Meteor.Router.page());
			$('html,body').scrollTop(0);
		}
	},

	'/editions': {
		to: 'editions',
		and: function() {
			Session.set("activeLink", Meteor.Router.page());
			$('html,body').scrollTop(0);
		}
	},

	'/friends': {
		to: 'friends',
		and: function() {
			Session.set("activeLink", Meteor.Router.page());
			$('html,body').scrollTop(0);
		}
	},

	'/login': {
		to: 'login',
		and: function () {
			Session.set("activeLink", Meteor.Router.page());
			$('html,body').scrollTop(0);
		}
	},
	
	'/*': {
	to: '404',
	and: function() {
		  $('html,body').scrollTop(0);
		}
	}

});

Meteor.Router.filters({

  // Logged in filter
  
  'currentUser': function(page) {
    
    if (Meteor.user()) {
      Meteor.Router.to("/");
      Session.set("activeLink", 'home');
      Deps.flush();
      return '';
    } else {
      return page;
    }
    
  }
  
});

Meteor.Router.filter('currentUser', {only: ['login']});
