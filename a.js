const img = document.querySelector('img');
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
let i = 0;
document.querySelector('.left').addEventListener('click', function (){
    if(i==0) 
    {
        img.src = images[images.length - 1];
        i = images.length - 1;
    }
    i--;
    img.src = images[i]
})

document.querySelector('.right').addEventListener('click', function (){
    if(i==images.length - 1) 
    {
        img.src = images[0];
        i = 0;
    }
    i++;
    img.src = images[i]
})