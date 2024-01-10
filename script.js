const url = "https://api.pexels.com/v1/search?query=people"

fetch(url, {
    method: 'GET',
    headers: {
    Authorization: "Jy72lkMtDk6GnaubOUfxWaVtetYltmPzQaPX1tawOOfXRtkiIeRl7Jsj"
}
})
.then((res) => res.json())
.then((data) => {
    console.log (data);
})
.catch((error) => {
    console.error('Error:', error);
});