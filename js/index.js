
/* call the container that we will put in it the items and submit button */
const app = document.getElementById('anime-container');
const bt = document.getElementById('search-btn');
bt.addEventListener('click',subbtn);

/* when we click the button it will call the function */
/* this func fetch the api and check if it have correct connection */
function subbtn(){
    var val = document.getElementById('search');
    var y = val.value;
    console.log(y);
fetch(`https://api.jikan.moe/v3/search/anime?q=${y}`)
.then((response) => {
    if (response.status !== 200){
    console.log(`looks like there is a problem . status code : ${response.status}`)
} else {
    return response.json()
}})


/* if the api have correct conection this will bring the value in search input and look for it in api then it will create the elements down */
.then((data) => {
        const container = document.createElement('div');
        container.setAttribute('class','anime-container');
        app.appendChild(container);
/* here I show just 3 item from the search that the user write becaues the results it's too much to load on the page */

        container.innerHTML = `
        <div class="anime-items">
        <a href="${data.results[0].url}" target="_blank"><img src="${data.results[0].image_url}" alt="${data.results[0].title}" class="img-box"></a>
        <div class="anime-details">
        <p>Name : ${data.results[0].title} .</p>
        <p>Episodes : ${data.results[0].episodes} .</p>
        <p>Type : ${data.results[0].type}. </p>
        <p>Score : ${data.results[0].score}. </p>
        <p>Rated : ${data.results[0].rated}. </p>
        <p>Story: ${data.results[0].synopsis}. </p>
        </div>
        </div>

        <div class="anime-items">
        <a href="${data.results[1].url}" target="_blank"><img src="${data.results[1].image_url}" alt="${data.results[1].title}" class="img-box"></a>
        <div class="anime-details">
        <p>Name : ${data.results[1].title} .</p>
        <p>Episodes : ${data.results[1].episodes} .</p>
        <p>Type : ${data.results[1].type}. </p>
        <p>Score : ${data.results[1].score}. </p>
        <p>Rated : ${data.results[1].rated}. </p>
        <p>Story: ${data.results[1].synopsis}. </p>
        </div>
        </div>

        <div class="anime-items">
        <a href="${data.results[2].url}" target="_blank"><img src="${data.results[2].image_url}" alt="${data.results[2].title}" class="img-box"></a>
        <div class="anime-details">
        <p>Name : ${data.results[2].title} .</p>
        <p>Episodes : ${data.results[2].episodes} .</p>
        <p>Type : ${data.results[2].type}. </p>
        <p>Score : ${data.results[2].score}. </p>
        <p>Rated : ${data.results[2].rated}. </p>
        <p>Story: ${data.results[2].synopsis}. </p>
        </div>
        </div>
        
        `
        

})

}