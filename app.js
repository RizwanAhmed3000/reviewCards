const viewBox = document.querySelector('.viewBox');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const surpriseBtn = document.querySelector('.surpriseBtn');

let x = 0;



function nextSlide(){
    if(x > '-300'){
        x = x - 100;
        viewBox.style.top = x + '%'
        console.log(x)
    }
}
function previousSlide(){
    if(x < '0'){
        x = x + 100;
        viewBox.style.top = x + '%'
        console.log(x)
    }
}
function randomSlide(){
    var randomNumber = Math.floor(Math.random()*4)
    if(randomNumber == 0){
        viewBox.style.top = `${randomNumber}%`
    }else if(randomNumber == 1){
        viewBox.style.top = `-${randomNumber}00%`
    }else if(randomNumber == 2){
        viewBox.style.top = `-${randomNumber}00%`
    }else{
        viewBox.style.top = `-${randomNumber}00%`
    }
}


nextBtn.addEventListener('click', nextSlide);
previousBtn.addEventListener('click', previousSlide);
surpriseBtn.addEventListener('click', randomSlide);