function showContent(sectionId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName("content-section");
    console.log(contentSections,"contentSections")
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].classList.remove("active");
    }
    document.getElementById("left-panel").style.width = "12.5rem"; 
    // Show selected content section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add("active");
    
    var showopenNav =document.getElementsByClassName('openNav')
    for(let i=0;i<showopenNav.length;i++){
        showopenNav[i].style.display ="none"
    }
  
    var text = document.getElementsByClassName('menutext');
    for(let i =0;i<text.length;i++){
        text[i].style.display="inline-block"
    }
}

// openNav
function openNav() {
    var openNavElements = document.getElementsByClassName('openNav');
    openNavElements[0].style.display = "none";
    document.getElementById("left-panel").style.width = "13rem";

    var menulinks = document.querySelectorAll('.menutext');
    for (var i = 0; i < menulinks.length; i++) {
        menulinks[i].classList.remove('invisible')
      }
      
  }
  
//   closeNav 
  function closeNav() {
    document.getElementById("left-panel").style.width = "3rem"; 
    var openNavElements = document.getElementsByClassName('openNav');
    openNavElements[0].style.display = "block";
    
    document.getElementById('content').style.width ="5rem"
    var menulinks = document.querySelectorAll('.menutext');
    for (var i = 0; i < menulinks.length; i++) {
        menulinks[i].classList.add('invisible')
      }
  }

  
  
