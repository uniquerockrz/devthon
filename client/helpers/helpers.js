Handlebars.registerHelper("activeLink", function (nav) {
  return Session.equals("activeLink", nav.toLocaleLowerCase()) ? "active" : "";
});

Handlebars.registerHelper('CFA', function(buttonText) {
  return new Handlebars.SafeString(
    '<div class="row">' +
		'<div class="large-5 small-6 large-centered small-centered columns alignMiddle">' +
			'<a class="button success radius" href="http://devthonhyd.explara.com" target="_blank">' +  buttonText + '</a>' + 
		'</div>' +
	'</div>'
  );
});

Handlebars.registerHelper("lowercase", function(string) {
	return string.toLocaleLowerCase();
});