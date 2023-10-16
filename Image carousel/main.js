const mainImg = document.querySelector(".main-img");
const img = document.getElementsByTagName("span");
function getImg(ele){
  mainImg.style.backgroundImage = "none";
  for(let i=0;i<img.length;i++){
    img[i].classList.add("effect");
    img[i].style.backgroundImage = `url(${ele.src})`;
    img[i].style.backgroundPosition = `${-60*i}px 0`;
  }
  setTimeout(()=>{
    for(let i=0;i<img.length;i++){
      img[i].classList.remove("effect");
    }
  },600);
}