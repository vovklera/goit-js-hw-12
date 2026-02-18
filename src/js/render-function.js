import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery");
const loader = document.querySelector("#loader");

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
})

export function createGallery(images) {
    const markup = images.map(({ webformatURL, tags, largeImageURL, likes, views, comments, downloads}) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
            </a>
            <ul class="image-details">
                <li class="image-item">
                    <p class="imageText">Likes</p>
                    <p class="imageText-item">${likes}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Views</p>
                    <p class="imageText-item">${views}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Comments</p>
                    <p class="imageText-item">${comments}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Downloads</p>
                    <p class="imageText-item">${downloads}</p>
                </li>
            </ul>
        </li>
    `).join("");

    container.insertAdjacentHTML("beforeend", markup);

    lightBox.refresh();
};

export function clearGallery() { 
    container.innerHTML = '';
};

export function showLoader() {
    loader.hidden = false;
};

export function hideLoader() { 
    loader.hidden = true;
};

export function showLoadMoreButton() { }

export function hideLoadMoreButton(){}