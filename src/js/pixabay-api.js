import axios from "axios";

const API_KEY = "54644986-605fde0d6b0637c4334fe436a";

export async function getImagesByQuery(query, page) {
    return axios("https://pixabay.com/api/", {
        params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 15,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
        }
    })
    .then(res => res.data)
    .catch(error => {
        console.log("Error", error);        
    })
}