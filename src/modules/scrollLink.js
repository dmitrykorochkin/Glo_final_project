
const  scrollLink = () => {

	const anchors = document.querySelectorAll('a[href^="#"]');
	const upScroll = document.querySelector(".up");
	const logo = document.querySelector(".logo");
	
	for (const anchor of anchors) {
		
		anchor.addEventListener("click", e => {
			e.preventDefault(); 
			const id = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
		
			document.querySelector(id).scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}

	const showUp = function () {
		const block = document.getElementById("services");
		const contentHeight = document.documentElement.scrollTop;
		const pageBegin = block.getBoundingClientRect().top;
	
		if (Math.abs(pageBegin) <= contentHeight) {
			upScroll.style.display = "block";
		} else {
			upScroll.style.display = "none";
		}
	  };
	
	  upScroll.addEventListener("click", () => window.scroll(0, 0));
	  window.addEventListener("scroll", showUp);
	  logo.addEventListener("click", (e) => {
		e.preventDefault();
		window.scroll(0, 0);
	  });


};

export default scrollLink;



