const accessKey = "PqPAw2XDV46WkTUdiuImHWll7Qqx6uDiPiZQHAUjHiA";
const allFormElement = document.querySelector('form'),
searchInput = document.querySelector('#search-input'),
searchResults = document.querySelector('.search-results'),
showMoreButton = document.querySelector('.showMoreButton');


let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInput.value

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const jsonData = await response.json();
    const afterSearchResult = jsonData.results;

    if(page===1){
        searchResults.innerHTML = '';
    }


    afterSearchResult.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
    
        const imageLink = document.createElement('a');
        imageLink.href = result.urls.full; // Use the full-size image URL
        imageLink.target = '_blank'; // Open in a new tab
    
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
    
        const captionLink = document.createElement('a');
        captionLink.href = result.links.html;
        captionLink.target = '_blank';
        captionLink.textContent = result.alt_description;
    
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.addEventListener('click', () => {
            // Create a hidden anchor for download
            const downloadAnchor = document.createElement('a');
            downloadAnchor.href = result.links.download;
            downloadAnchor.target = '_blank';
            downloadAnchor.download = result.alt_description;
            downloadAnchor.style.display = 'none'; // Hide the anchor
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click(); // Simulate click
            document.body.removeChild(downloadAnchor); // Clean up
        });
    
        imageLink.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(captionLink);
        imageWrapper.appendChild(downloadButton);
        searchResults.appendChild(imageWrapper);
    });
    
    page++;
    if(page > 1){
        showMoreButton.style.display = 'block';
    }
}

allFormElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreButton.addEventListener('click',()=>{
    searchImages();
});







// const accessKey = "PqPAw2XDV46WkTUdiuImHWll7Qqx6uDiPiZQHAUjHiA";
// const allFormElement = document.querySelector('form'),
// searchInput = document.querySelector('#search-input'),
// searchResults = document.querySelector('.search-results'),
// showMoreButton = document.querySelector('.showMoreButton');


// let inputData = "";
// let page = 1;

// async function searchImages(){
//     inputData = searchInput.value

//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

//     const response = await fetch(url);
//     const jsonData = await response.json();
//     const afterSearchResult = jsonData.results;

//     if(page===1){
//         searchResults.innerHTML = '';
//     }


//     afterSearchResult.map((result) =>{
//         const imageWrapper = document.createElement('div');
//         imageWrapper.classList.add('search-result');
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         image.alt = result.alt_description;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = '_blank';
//         imageLink.textContent = result.alt_description;

//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(imageLink);
//         searchResults.appendChild(imageWrapper);
//     });
//     page++;
//     if(page > 1){
//         showMoreButton.style.display = 'block';
//     }
// }

// allFormElement.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     page = 1;
//     searchImages();
// });

// showMoreButton.addEventListener('click',()=>{
//     searchImages();
// });





