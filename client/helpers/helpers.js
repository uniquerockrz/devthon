Handlebars.registerHelper("activeLink", function (nav) {
  return Session.equals("activeLink", nav.toLocaleLowerCase()) ? "active" : "";
});

Handlebars.registerHelper('CFA', function(type, buttonText, href, subText) {
  if (subText) {
	subText = '';
  }
  if (!type) {
  	type = 'secondary';
  }
  return new Handlebars.SafeString(
    '<div class="row">' +
		'<div class="large-5 small-5 large-centered small-centered columns alignMiddle">' +
			'<a class="button ' + type + ' radius" href="' + href + '" target="_blank">' +  
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