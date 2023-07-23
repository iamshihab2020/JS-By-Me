let mainQuote = document.querySelector('.quote'),
mainAuthor = document.querySelector('.author'),
button =  document.querySelector('.btn-grad');

button.addEventListener('click', ()=>{
    let index = Math.floor(Math.random()*allQuotes.length);
    mainQuote.innerHTML = `<p class="quote"><span>"</span>${allQuotes[index].quotes}<span>"</span></p>`;
    mainAuthor.innerHTML =`<p class="author"> - ${allQuotes[index].author}</p>`;
})

