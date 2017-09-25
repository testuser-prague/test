behaviors.hash = function() {
	var hash = unescape(window.location.hash);
	if (hash) {
		// First see if there's a class member to open
		var target = $(hash);
		if (target.length) {
			if (target.hasClass('member'))
				toggleMember(target);
			setTimeout(function() {
				smoothScrollTo(target);
			}, 0);
		}
	}
};