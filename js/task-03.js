const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("ul.gallery");

const listImg = [];

images.map(({ url, alt }) => {
  const imagesItem = document.createElement("li");
  imagesItem.insertAdjacentHTML(
    "afterbegin",
    `<img src = ${url} alt ='${alt}' width = 390 height = 230>`
  );
  return listImg.push(imagesItem);
});

const listWithImg = galleryList.append(...listImg);
const galleryListEl = document.querySelector("ul.gallery");
galleryListEl.style.cssText =
  "display: flex; list-style: none; gap: 10px; padding-left: 0;";
