import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from "./js/render-functions";

const form = document.querySelector(".form");
const formInput = document.querySelector(".formInput");
const showMoreBtn = document.querySelector(".showMoreBtn");

form.addEventListener("submit", handleSubmit);

let page = 1;
let per_page = 15;
let query = "";

async function handleSubmit(event){
    event.preventDefault();

    query = formInput.value.trim();

    if (!query) {
        iziToast.warning({
            message: "Input cannot be empty!",
            position: "topRight"
        });
        return;
    }

    page = 1;
    formInput.value = "";
    
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
        const res = await getImagesByQuery(query, page)  
        
        if (res.hits.length === 0) {
            iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
            });
            return;
        }

        createGallery(res.hits);
        
        if (res.totalHits > per_page) {
            showLoadMoreButton();
        } else {
            iziToast.error({
            message: "Something went wrong. Please try again later.",
            position: "topRight",
            });
        }
    }
        catch(error) {
            console.log("Error", error);
            iziToast.error({
            message: "Something went wrong. Please try again later.",
            position: "topRight",
        });
        } finally {
            hideLoader();
        }
}

showMoreBtn.addEventListener("click", async () => {
    try {
        hideLoadMoreButton();
        showLoader();
        page += 1;
        const data = await getImagesByQuery(query, page);
        
        createGallery(data.hits);

        const card = document.querySelector(".gallery-item");

        if (card) {
        const { height } = card.getBoundingClientRect();

        window.scrollBy({
            top: height * 2,
            behavior: "smooth"
        });
        }

        const totalPages = Math.ceil(data.totalHits / per_page);

        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            });
        } else {
            showLoadMoreButton();
        }
    }
    catch (error) {
        iziToast.error({
            message: "Something went wrong. Please try again.",
            position: "topRight"
        });
    } finally {
        hideLoader();
    }
});