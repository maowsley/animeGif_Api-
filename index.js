let baseURL = 'https://nekos.best/api/v1';
let dropdownValue;


// Drop down menu functions 
let dropdownItems = document.querySelectorAll('#gifLabel');
console.log(dropdownItems);

dropdownItems.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdownValue = dropdown.attributes[2].value
        fetchGif();
    })
})

function fetchGif() {
    console.log(dropdownValue);
    fetch(`${baseURL}/${dropdownValue}?amount=20`)
        .then(res => res.json())
        .then(json => displayInfo(json))
}


// code to get gifs to display along with title
function displayInfo(json) {
    let container = document.querySelector('.gifs')
    console.log(json)
    console.log(json.url[0].url);
  
    json.url.forEach(item => {
        let gif = document.createElement('img');
        let title = document.createElement('h2')

        gif.textContent = item.anime_name;
        gif.src=item.url
        title.innerHTML = item.anime_name;

        gif.style.height = '50vh'
        title.style.color = '#000000'
        gif.id='image'

        container.appendChild(gif)
        container.appendChild(title)
         });
        }
//light box code
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});