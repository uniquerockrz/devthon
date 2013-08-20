Template.about.events({

	'click .editable': function (e) {
		var text = e.srcElement.innerText;
		var height = $(e.srcElement).height();
		$(e.srcElement).parent().removeClass('editable').addClass('editor')
						.append('<textarea autofocus placeholder="large-12 columns" style="min-height: ' 
							+ height + 'px; line-height: 1.4em;">' + text + '</textarea>');
		$(e.srcElement).remove();
	},

	'focusout .editor': function (e) {
		var text = e.srcElement.value;
		$(e.srcElement).parent().removeClass('editor').addClass('editable')
						.append('<p>' + text + '</p>');
		$(e.srcElement).remove();
	}

});