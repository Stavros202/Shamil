//image slidesshow js "doors"
let slideIndex = [];
for (var i = 0; i < 30; i++){
    slideIndex.push(1);
}
let slideId=[]
for (var i = 1; i <= 30; i++) {
    slideId.push("mySlides" + i);
}
//let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1];
//let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6",
  //  "mySlides7", "mySlides8", "mySlides9"]

for (var i = 0; i < 30; i++) {
    showSlides(1, i);
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

// Get the modal
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

// Get the image and insert it inside the modal - use its "alt" text as a caption

function vv(n) {
    var modal = document.getElementById("myModal" + n);
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function f(n) {
    var modal = document.getElementById("myModal" + n);
    modal.style.display = "none";
}