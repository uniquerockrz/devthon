Template.twitter.rendered = function() {
  return !function(d,s,id) {
           var js,fjs = d.getElementsByTagName(s)[0];
           if(!d.getElementById(id)){
             js=d.createElement(s);
             js.id=id;
             js.src="//platform.twitter.com/widgets.js";
             fjs.parentNode.insertBefore(js,fjs);
           }
   }(document,"script","twitter-wjs");
}

Template.specialtweet.rendered = function() {
  return !function(d,s,id) {
           var js,fjs = d.getElementsByTagName(s)[0];
           if(!d.getElementById(id)){
             js=d.createElement(s);
             js.id=id;
             js.src="//platform.twitter.com/widgets.js";
             fjs.parentNode.insertBefore(js,fjs);
           }
   }(document,"script","twitter-wjs");
}

Handlebars.registerHelper("getResource", function (hack) {
  return hack.resources[0].link;
});

Handlebars.registerHelper("isSpecial", function() {
  return Session.equals("activeLink", "special");
})

Handlebars.registerHelper("activeLink", function (nav) {
  return Session.equals("activeLink", nav.toLocaleLowerCase()) ? "active" : "";
});

Handlebars.registerHelper('CFA', function(type, buttonText, href, subText, classes) {
  if (!classes) {
  	classes = '';
  }
  if (subText) {
	subText = '';
  }
  if (!type) {
  	type = 'secondary';
  }
  return new Handlebars.SafeString(
    '<div class="row">' +
		'<div class="large-5 small-5 large-centered small-centered columns alignMiddle ' + classes + '">' +
			'<a class="button ' + type + ' radius noBottomMargin" href="' + href + '" target="_blank">' +  
				buttonText +
				'<p class="subtext">'+ 
				subText +
				'</p>' + 
			'</a>' + 
		'</div>' +
	'</div>'
  );
});

Handlebars.registerHelper("lowercase", function(string) {
	return string.toLocaleLowerCase();
});