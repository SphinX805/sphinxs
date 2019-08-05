window.onload = function() {
	var logo = document.querySelector(".logo"),
	info = document.querySelector(".info");
	if (document.body.clientWidth < 768) {
		logo.style.top = "20px";
		let lis = document.body.querySelector(".worksDiv").getElementsByTagName("li");
			for (i=0; i < lis.length; i++) {
			lis[i].style.left = "calc(50% - 90px)";
		}
	}
	else logo.style.top = "300px";
	info.style.opacity = "1";
}