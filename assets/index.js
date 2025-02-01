var menuButton = document.querySelector(".hamb");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
});

var bodySetURLClasses = () => {
  const body = document.querySelector("body");
  const bodyClasses = body.classList;
  const url = window.location.href;
  const urlParts = url.split("/");
  const currentUrlPath = urlParts.slice(3, -1).join("/");

  // trim out the https://domain/[...].html parts of the url
  const htmlTrimmedURLParts = urlParts
    .slice(3, urlParts.length)
    .filter((part) => Boolean(part))
    .map((part) => part.replace(".html", ""));

  if (
    htmlTrimmedURLParts[0] === "tags" ||
    htmlTrimmedURLParts[0] === "categories"
  ) {
    htmlTrimmedURLParts.push("dispatch");
  }

  body.classList.remove(...bodyClasses);
  body.classList.add(...htmlTrimmedURLParts);

  if (htmlTrimmedURLParts.length === 0) {
    body.classList.add("dispatch");
  }

  if (htmlTrimmedURLParts[0] === "about") {
    body.classList.add("page");
  }

  primaryNavSetActive(currentUrlPath);
  cvExpNavSetActive(currentUrlPath);
};

var primaryNavSetActive = (current) => {
  const currentPrimaryPathSegment = current.split("/")[0];
  const navItems = document.querySelectorAll(".site-header nav a");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
    const primaryNavItem = navItem.href.split("/").slice(3)[0];
    if (primaryNavItem === currentPrimaryPathSegment) {
      navItem.classList.add("active");
    }
  });
};

var cvExpNavSetActive = (current) => {
  const navItems = document.querySelectorAll(".cv-section nav a");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
    const cvNavItem = navItem.href.split("/").slice(3, -1).join("/");
    console.log(current);
    if (cvNavItem === current) {
      navItem.classList.add("active");
    }
  });
};

htmx.config.scrollBehavior = false;
htmx.onLoad(() => {
  bodySetURLClasses();
});
