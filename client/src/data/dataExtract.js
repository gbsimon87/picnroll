// **********************************************************************
// GET DATA FROM https://www.prodirectbasketball.com/ HOMEPAGE

var baseURL = window.location.href.slice(0, -1);
var figures = document.querySelectorAll(".feature-boxes > figure");
var footerLinksTop = document.querySelectorAll("#footertext .footerlinks a");
var footerLinksBottom = document.querySelectorAll("#footer a");
var navLinksMobile = document.querySelectorAll(".mobile-menu .mm-list li");
var dealItems = document.querySelectorAll(
  "#new-release-boot-slider .items .item"
);
var navLinksDesktop = document.querySelectorAll(".navigation #primary-nav > li");
var randomInteger = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
var data = {
  nav: {
    mobile: [],
    desktop: []
  },
  main: {
    categories: [],
    deals: [],
  },
  footer: {
    top: [],
    bottom: [],
  },
};

navLinksMobile.forEach((item, id) => {
  var currentLink = item.querySelector("a");
  var href = currentLink.getAttribute("href").replace(".aspx", "");
  var text = currentLink.textContent;

  var newListItem = {
    id,
    text,
    link: href,
    isFirstLevel: false,
  };

  if (item.classList.contains("first-level")) {
    newListItem.isFirstLevel = true;
  }

  data.nav.mobile.push(newListItem);
});

navLinksDesktop.forEach((item, index) => {
  var link = item.querySelector("a");
  var href = link.getAttribute("href");
  var text = link.innerText;
  var newListItem = {
    href,
    text,
  }
  data.nav.desktop.push(newListItem);
});

dealItems.forEach((item, index) => {
  var href = item.querySelector("a").getAttribute("href");
  var image = baseURL + item.querySelector("img").getAttribute("src");
  var title = item.querySelector(".title").textContent;
  var price = item.querySelector(".price").textContent;

  var splitPrice = price.split("£");
  var regularPrice = splitPrice[1];
  var discountedPrice = splitPrice[2];
  var newItem = {
    href,
    image,
    title,
    regularPrice,
    discountedPrice,
    id: index,
  };
  data.main.deals.push(newItem);
});

figures.forEach((figure, index) => {
  var currentImage = figure.querySelector("img");
  var imageSource = currentImage.getAttribute("src");
  var image = baseURL + imageSource;
  var titleElement = figure.querySelector("h2");
  var labelElement = figure.querySelector("h4");
  var price = parseInt(randomInteger(100));
  var discountedPrice = parseInt(Math.floor(price * 1.2).toFixed(2));
  var title;
  var label;

  if (!currentImage || !titleElement || !labelElement) return;

  title = titleElement.innerText;

  label = labelElement.innerText;

  var newItem = {
    id: index,
    image,
    title,
    label,
    price,
    discountedPrice,
  };

  data.main.categories.push(newItem);
});

footerLinksTop.forEach((link, index) => {
  var newItem = {
    id: index,
    text: link.textContent,
    link: link.getAttribute("href"),
  };
  data.footer.top.push(newItem);
});

footerLinksBottom.forEach((link, index) => {
  var newItem = {
    id: index,
    text: link.textContent,
    link: link.getAttribute("href"),
  };
  data.footer.bottom.push(newItem);
});

console.log(data);
// **********************************************************************
