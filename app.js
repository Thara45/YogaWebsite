var header = document.getElementById('yogaheader');

//Refreshing the page will focus the user to Header part
window.onbeforeunload  = function() {
    header.scrollIntoView();
    header.classList.remove('hovered');
};

//Hovering the Asanas Icon and Riseup button add the "hovered" class 
function mouseOver () {
    header.classList.add('hovered');
}
//Removing the "hovered"class
function mouseOut () {
    header.classList.remove('hovered');
}
//Clicking on Riseup Button takes the user to courses part
function scrollToCourses () {
    document.getElementById('courses').scrollIntoView();
}


var popup = document.getElementById('popup');
var popupCloseBtn = document.querySelector('.popup__close');

//Clicking the Book Now button shows the Popup
function showPopup(){
    popup.style.display = "block";
}
//Clicking the Close button hides the Popup
function closePopup(popupToClose) {
    var popupToDstroy = popupToClose.offsetParent.classList.value;
    if(popupToDstroy == "offers"){
        offers.style.display = "none";
    }
    else{
        popup.style.display = "none";
    }
   
}
//clicking anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
    else if(event.target == offers) {
        offers.style.display = "none";
    }
}

//Clicking on Signup button
function submitPopup(){
   // alert("Please Check your mail. We send all details about the selecte course");
}

 //Clicking on the gift icon shows offers popup
 function showOffers(){
    offers.style.display = "block";
 }

  //Clicking on the gift icon shows offers popup
 function hideOffers(){
    offers.style.display = "none";
 }




