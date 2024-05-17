const gridElement = document.getElementById('grid');

for ( i=0 ; i < 100; i++) {
    const articleElement = document.createElement('article');
    gridElement.appendChild(articleElement);
    const spanElement = document.createElement('span')
    articleElement.appendChild(spanElement);
    spanElement.append(i + 1)
}