const hexCode = document.querySelector('#hexCode');
const hexBtn = document.querySelector('#hexBtn');
const body = document.querySelector('body')
const color = ['A', 'B', 'C', 'D', 'E', "F", 1, 2, 4, 5, 6, 7, 8, 9, 0];

hexBtn.addEventListener('click', () => {
    let genCode = ''; 
    for (let i = 0; i < 6; i++) {
        let colorRange = Math.floor(Math.random() * color.length);
        genCode += color[colorRange];
    }
    hexCode.innerHTML = `#${genCode}`;
    body.style.background = `#${genCode}`;
});




