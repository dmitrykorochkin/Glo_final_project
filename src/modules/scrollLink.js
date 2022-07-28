
const  scrollLink = () => {

	const menuBtnAll = document.querySelectorAll(".top-menu a");
	const btnScrollTop = document.querySelector(".up");
  
	btnScrollTop.style.display = "none";
  
	menuBtnAll.forEach((elem) => {
	  elem.addEventListener("click", (event) => {
		event.preventDefault();
  
		const section = document.querySelector(elem.getAttribute("href"));
  
		if (section) {
		  section.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		  });
		}
	  });
	});
  
	window.addEventListener("scroll", () => {
	  let scrennHeight = document.documentElement.clientHeight;
	  let coords = window.pageYOffset;
  
	  if (scrennHeight > coords) {
		btnScrollTop.style.display = "none";
	  } else if (scrennHeight < coords) {
		btnScrollTop.style.display = "block";
	  }
	});
  
	btnScrollTop.addEventListener("click", () => {
	  const html = document.querySelector("html");
	  html.style.scrollBehavior = "smooth";
	  document.documentElement.scrollTop = 0;
	});

};

export default scrollLink;



