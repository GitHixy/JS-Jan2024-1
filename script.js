import * as component from "./component.js"

const url = "https://api.pexels.com/v1/search?query=people"


fetch(url, {
    method: 'GET',
    headers: {
    Authorization: "Jy72lkMtDk6GnaubOUfxWaVtetYltmPzQaPX1tawOOfXRtkiIeRl7Jsj"
}
})
.then((res) => res.json())
.then((data) => {
    const results = data.photos;
    results.map((result) =>{
        component.createCard(result.src.medium, result.photographer, result.alt, result.photographer_url, 30);
    });
})
.catch((error) => {
    console.error('Error:', error);
});

