var slides1 = document.querySelectorAll(".slide");
var counter = 0;
console.log(slides1);
// slides1.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${indx * 100}%)`;
//   });
setInterval(goNext, 4000);
var goNext = () => {
    counter++;
    if(counter>=slides1.length)
    {
        counter=0;
    }
    slideImage();
    console.log(counter);
}
var goPrev = () => {
    counter--;
    if(counter<0)
    {
        counter=slides1.length-1;
    }
    slideImage();
    console.log(counter);
}
var slideImage=()=>{
    slides1.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}
