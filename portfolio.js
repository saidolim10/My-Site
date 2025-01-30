let body = document.querySelector('body');
body.style.backgroundColor = '#1F242D';
body.style.fontFamily = 'cursive';
body.style.width = '90%';
body.style.margin = '0 auto';

let h1 = document.createElement('h1');
h1.textContent = 'My';
h1.style.color = 'white';
h1.style.textAlign = 'center';
h1.style.marginTop = '70px';

let span = document.createElement('span');
span.textContent = ' Portfolio';
span.style.color = 'cyan';

let a = document.createElement('a');
a.textContent = '  [Home]';
a.style.color = 'white';
a.style.fontSize = '16px';
a.setAttribute('href', '');
a.style.textDecoration = 'none';

let box = document.createElement('div');
box.style.display = 'flex';
box.style.flexWrap = 'wrap';
box.style.alignItems = 'center';
box.style.justifyContent = 'space-between';
box.style.marginTop = '50px';

let img1 = document.createElement('img');
img1.setAttribute('src', './Rectangle 15.svg');
img1.style.maxWidth = '100%';  
img1.style.height = 'auto';    
let img2 = document.createElement('img');
img2.setAttribute('src', './Rectangle 16.svg');
img2.style.maxWidth = '100%';
img2.style.height = 'auto';

let img3 = document.createElement('img');
img3.setAttribute('src', './Rectangle 17.svg');
img3.style.maxWidth = '100%';
img3.style.height = 'auto';

let img4 = document.createElement('img');
img4.setAttribute('src', './Rectangle 18.svg');
img4.style.marginTop = '30px';
img4.style.maxWidth = '100%';
img4.style.height = 'auto';

let img5 = document.createElement('img');
img5.setAttribute('src', './Rectangle 19.svg');
img5.style.marginTop = '30px';
img5.style.maxWidth = '100%';
img5.style.height = 'auto';

let img6 = document.createElement('img');
img6.setAttribute('src', './Rectangle 20.svg');
img6.style.marginTop = '30px';
img6.style.maxWidth = '100%';
img6.style.height = 'auto';


let a1 = document.createElement('a');
a1.setAttribute('href', 'https://saidolim10.github.io/ExAM2oy/');
let a2 = document.createElement('a');
a2.setAttribute('href', 'https://saidolim10.github.io/ssssssssss/?');
let a3 = document.createElement('a');
a3.setAttribute('href', 'https://saidolim10.github.io/setdate/');
let a4 = document.createElement('a');
a4.setAttribute('href', 'https://saidolim10.github.io/function/');
let a5 = document.createElement('a');
a5.setAttribute('href', '');
let a6 = document.createElement('a');
a6.setAttribute('href', '');


[img1, img2, img3, img4, img5, img6].forEach(img => {
    img.style.transition = "transform 0.3s ease";
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});


a1.appendChild(img1);
a2.appendChild(img2);
a3.appendChild(img3);
a4.appendChild(img4);
a5.appendChild(img5);
a6.appendChild(img6);

body.append(h1, box);
h1.append(span, a);
box.append(a1, a2, a3, a4, a5, a6);
