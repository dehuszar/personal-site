const button = document.querySelector('.hamb')
button.addEventListener('click',()=>{button.classList.toggle('active')})

const bodySetURLClasses = () => {
	const body = document.querySelector('body');
	const bodyClasses = body.classList;
	const url = window.location.href;
	const urlParts = url.split('/');
	const navItems = document.querySelectorAll('.site-header nav a');
	
	// trim out the https://domain/[...].html parts of the url
	const htmlTrimmedURLParts = urlParts
		.slice(3,urlParts.length)
		.map(part => part.replace('.html',''));

	body.classList.remove(...bodyClasses);
	body.classList.add(...htmlTrimmedURLParts);

	navItems.forEach(navItem => {
		navItem.classList.remove('active')
		if (navItem.href === url) {
			navItem.classList.add("active")
		}
	});
}

const primaryNavSetActive = current => {
	const navItems = document.querySelectorAll('.site-header nav a');
	navItems.forEach(navItem => {
		navItem.classList.remove('active')
		if (navItem.href === current) navItem.classList.add("active")
	});
}

const cvExpNavSetActive = current => {
	const navItems = document.querySelectorAll('.cv-section nav a');
	navItems.forEach(navItem => {
		navItem.classList.remove('active')
	});

	current.classList.add('active');
}

htmx.config.scrollBehavior = false;
htmx.onLoad(() => {
	bodySetURLClasses();
});
