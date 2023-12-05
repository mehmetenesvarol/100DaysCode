
async function searchImage() {
  let inputValue = document.getElementById("hd-input").value.trim()
  let infoText = document.getElementById("info")
  if (inputValue === "" || inputValue === null) {
    sliderCleaner();
    infoText.innerHTML = `<h1>Input Cannot Be Left Blank</h1>`
  } else {
    sliderCleaner();
    await fetch(`https://api.unsplash.com/search/photos?query=${inputValue}`, {
      method: "GET",
      headers: {
        Authorization: `Client-ID NrmZXOrIbzqpUZrgN7d0Q_kp_mZobieDs0KPMzKGB1A`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        let i = 0;
        data.results.forEach(element => {
          if (i < 6) {
            if (document.getElementById("r1").checked === true) {
              getImages(i, element.urls.full);
              i++;
            } else {
              getImages(i, element.urls.small);
              i++;
            }
          }
        });
        showSlides(slideIndex);
      })
      .catch((err) => console.log(err))
    infoText.innerHTML = ``
  }

}

function getImages(i, imgUrl) {
  document.getElementsByClassName("mySlides")[i].innerHTML =
    `<div class="numbertext">1 / 6</div><img src="${imgUrl}" style="width:100%">`
  document.getElementsByClassName("column")[i].innerHTML = `               
  <img class="demo cursor" src="${imgUrl}" style="width:100%" 
  onclick="currentSlide(1)" alt="${document.getElementById("hd-input").value.trim()}">`
}

function sliderCleaner() {
  for (let i = 0; i < 6; i++) {
    document.getElementsByClassName("mySlides")[i].innerHTML = ""
    document.getElementsByClassName("column")[i].innerHTML = ""
  }
}

/*
document.getElementsByClassName("mySlides")[0].innerHTML=`
<div class="numbertext">1 / 6</div>
<img src="/porche/mansory_porche_p9lm_evo900-16.webp" style="width:100%">`

document.getElementsByClassName("column")[0].innerHTML = `               
<img class="demo cursor" src="/porche/mansory_porche_p9lm_evo900-16.webp" style="width:100%"
onclick="currentSlide(1)" alt="The Woods">`
*/


// image slider : 
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}