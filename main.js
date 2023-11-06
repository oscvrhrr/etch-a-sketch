const container = document.createElement('div');
container.style.width = '30rem';
container.style.height = '30rem';
container.style.border = '2px solid black';
container.style.margin = 'auto';
container.style.marginTop = '10rem';
container.style.boxShadow = '2.5px 5px 6px gray'
container.style.display = 'flex'
container.style.flexWrap = 'wrap'


document.body.appendChild(container);


for (let i = 0; i < 256; i++) {
    const squares = document.createElement('div');
    squares.classList.add('hover')
    container.appendChild(squares);
};

const coloredSquares = document.querySelectorAll('.hover');

coloredSquares.forEach((square) => {

    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'black';
    });
});









