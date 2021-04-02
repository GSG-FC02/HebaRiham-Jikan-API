
/* call the submit button , container that we will put in it the items and create massage with style by js */
const mainContainer = document.getElementById('anime-container')
const container = document.querySelector('div');
const button = document.getElementById('search-btn');
const massage = document.createElement('h4');
mainContainer.appendChild(massage);
massage.innerHTML=' Empty';
massage.style.marginTop = '30px';
massage.style.marginLeft = '22.5%';
massage.style.fontSize = '25px';
massage.style.backgroundColor = 'rgb(184, 60, 60)';
massage.style.width = '55%'
massage.style.textAlign = 'center'
massage.style.color = 'rgb(206, 204, 204)'
container.style.display ='none';

button.addEventListener('click',subbtn);
/* when we click the button it will call the function */
/* this func fetch the api and check if it have correct connection */
function subbtn(){
    massage.style.display = 'none';
    container.style.display ='flex';
    var val = document.getElementById('search');
    var value = val.value;
    console.log(value);
fetch(`https://api.jikan.moe/v3/search/anime?q=${value}`)
.then((response) => {
    if (response.status !== 200){
    console.log(`looks like there is a problem . status code : ${response.status}`)
} else {
    return response.json()
}})


/* if the api have correct conection this will bring the value in search input and look for it in api then it will create the elements down */
.then((data) => {

/* call the non appeare items to change there values and display them on screen with every search and new information the user search for*/
const link = document.getElementById('link');
const animeImg=document.getElementById('img-box');
const name=document.getElementById('item1');
const episodes=document.getElementById('item2');
const type=document.getElementById('item3');
const score= document.getElementById('item4');
const rated= document.getElementById('item5');
const story=document.getElementById('item6');

    
    link.href = data.results[0].url;
    animeImg.src=data.results[0].image_url;
    name.textContent=` Name: ${data.results[0].title}`;
    episodes.textContent=` Episodes: ${data.results[0].episodes}`;
    type.textContent=` Type: ${data.results[0].type}`;
    score.textContent=` Score: ${data.results[1].score}`;
    rated.textContent=` Rated: ${data.results[0].rated}`;
    story.textContent=` Story: ${data.results[0].synopsis}`;

})
}