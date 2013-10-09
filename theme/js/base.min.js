$(function () {
	$("#expander").click(function () {
		var opened = false;
		return function () {
			if (!opened) {
				$("#secretnav").show();
				$("#expander").text("⇇");
				opened = true;
			} else {
				$("#secretnav").hide();
				$("#expander").text("⇉");
				opened = false;
			}
			return false;
		};
	}());
});