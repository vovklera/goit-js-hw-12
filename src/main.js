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

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const query = formInput.value.trim();

    if (!query) {
        iziToast.warning({
            message: "Input cannot be empty!",
            position: "topRight"
        });
        return;
    }

    formInput.value = "";
    
    clearGallery();
    showLoader();
    
    getImagesByQuery(query)
        .then(res => {
            if (res.hits.length === 0) {
                iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
                });
                return;
            }
            createGallery(res.hits)
        })
        .catch(error => {
            console.log("Error", error);
            iziToast.error({
            message: "Something went wrong. Please try again later.",
            position: "topRight",
        });
        })
        .finally(() => {
            hideLoader();
        })
}