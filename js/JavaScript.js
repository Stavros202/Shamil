/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
/*show ABOUT-US close content & show backbtn  */
function f1() {
    document.getElementById("about").style.display = "block";
    document.getElementById("con").style.display = "none";
    document.getElementById("backbtn").style.display = "block";
}
/*show language close content & show btn  */
function f2() {
    document.getElementById("langu").style.display = "block";
    document.getElementById("con").style.display = "none";
    document.getElementById("backbtn").style.display = "block";
}
/*back to content */
function back() {
    document.getElementById("about").style.display = "none";
    document.getElementById("con").style.display = "block";
    document.getElementById("backbtn").style.display = "none";
    document.getElementById("langu").style.display = "none";
}
function eng() {
    document.getElementById("text1").innerText = "07504542290";
    document.getElementById("text2").innerText = "shaml slewa";
    document.getElementById("text3").innerText = "erbil,ankawa";
    document.getElementById("text4").innerText = "SHAML CARPENTRY";
    document.getElementById("text5").innerText = "doors";
    document.getElementById("text6").innerText = "kitchen";
    document.getElementById("text7").innerText = "bedrooms";
    document.getElementById("text8").innerText = "stairs";
    document.getElementById("textt").innerHTML = "our services indclude:<br />BEDROOMS&#9679;KITCHEN&#9679;DOORS<br />STAIRS&#9679;DECORATIONS"
    document.getElementById("text8").style.left = "105px";
    document.getElementById("text7").style.left = "60px";
    document.getElementById("text6").style.left = "90px";
    document.getElementById("text5").style.left = "110px";
    document.getElementById("text7").style.top = "70%";
    closeNav();
}
function arab() {
    document.getElementById("text1").innerText = "07504542290";
    document.getElementById("text2").innerText = "شامل صليوة";
    document.getElementById("text3").innerText = "اربيل,عنكاوا";
    document.getElementById("text4").innerText = "نجارة شامل";
    document.getElementById("text5").innerText = "ابواب";
    document.getElementById("text6").innerText = "مطبخ";
    document.getElementById("text7").innerText = "غرف نوم";
    document.getElementById("text8").innerText = "سلالم";
    document.getElementById("textt").innerHTML = ":تشمل خدماتنا" + "<br />" + "غرف نوم" + "&#9679;" + "مطابخ" + "&#9679;" + "ابواب" + "<br />" + "سلالم" + "&#9679;" +"ديكورات";
    document.getElementById("text8").style.left = "115px";
    document.getElementById("text7").style.left = "75px";
    document.getElementById("text6").style.left = "115px";
    document.getElementById("text5").style.left = "110px";
    document.getElementById("text7").style.top = "70%";
    closeNav();
}
function kurd() {
    document.getElementById("text1").innerText = "07504542290";
    document.getElementById("text2").innerText = "شامل صليوة";
    document.getElementById("text3").innerText = "هەولیر،عنكاوە";
    document.getElementById("text4").innerText = "دارتاشی شامل";
    document.getElementById("text5").innerText = "دەرگا";
    document.getElementById("text6").innerText = "مەتبەخ";
    document.getElementById("text7").innerText = "ژووری نووستن";
    document.getElementById("text8").innerText = "پەیژە";
    document.getElementById("textt").innerHTML = "خزمەتگوزارییەکانمان بریتین لە:" + "<br />" + "ژووری نوستن" + "&#9679;" + "مەتبەخ" + "&#9679;" + "دەرگا" + "<br />" + "پەیژە" + "&#9679;" + "ديكوراتەکان";
    document.getElementById("text8").style.left = "120px";
    document.getElementById("text7").style.left = "90px";
    document.getElementById("text6").style.left = "105px";
    document.getElementById("text5").style.left = "120px";
    document.getElementById("text7").style.top = "55%";
    closeNav();
}