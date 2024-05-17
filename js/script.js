const gridElement = document.getElementById('grid');
const buttonElement = document.querySelector('button');

for ( i=0 ; i < 100; i++) {
    const articleElement = document.createElement('article');
    gridElement.appendChild(articleElement);
    articleElement.classList.add('big')
    const spanElement = document.createElement('span')
    articleElement.appendChild(spanElement);
    spanElement.append(i + 1)

    articleElement.addEventListener('click', function() {
        articleElement.classList.add('active')
        console.log(spanElement.innerText)
    })

    buttonElement.addEventListener('click', function() {
        articleElement.classList.remove('active')
        console.log(spanElement.innerText)
    })
};
