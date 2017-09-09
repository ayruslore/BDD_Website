function openCourse(event, courseName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    console.log();
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(courseName).style.display = "block";
    //event.currentTarget.className += " active";
}

var menuButton=0;
function menuToggle123(){
  var temp=document.getElementById("menuToggle");
  if(menuButton==0){
    openCourse(event, 'course1_tab');
    temp.innerHTML='';
    var cartButton=document.createElement("SPAN");
    var cartLogo=document.createElement("I");
    cartLogo.className="material-icons shopping_basket";
    cartLogo.onclick=function(){
      openCourse(event, 'cart');
    }
    var quant=document.createElement("SUP");
    var quant2=document.createElement("SPAN");
    quant2.id="item_qty";
    quant2.className="count";
    quant2.innerHTML=0;
    quant.appendChild(quant2);
    cartLogo.appendChild(quant);
    cartButton.appendChild(cartLogo);
    temp.appendChild(cartButton);
    menuButton=1;
  }else if(menuButton==1){
    openCourse(event, 'cart');
    temp.innerHTML='';
    var cartLogo=document.createElement("I");
    cartLogo.className="material-icons reorder";
    cartLogo.onclick=function(){
      openCourse(event, 'cart');
    }
    temp.appendChild(cartLogo);
    menuButton=0;
  }
}
