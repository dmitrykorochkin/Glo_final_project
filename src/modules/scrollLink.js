
const  scrollLink = () => {

	const anchors = document.querySelectorAll('a[href^="#"]');
	
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
};

export default scrollLink;

