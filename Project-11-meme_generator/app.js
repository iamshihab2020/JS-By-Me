const memeTitle = document.querySelector('.title'),
memeImage = document.querySelector('.memeImage'),
memeAuthor = document.querySelector('.memeAuthor'),
generatorBtn = document.querySelector('.generatorBtn');


const updateDetails = (url,title,author) =>{
    memeImage.setAttribute('src', url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by : ${author}`
}

const generateMeme = () =>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then(response => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author)
    })
}

generatorBtn.addEventListener('click', generateMeme)



