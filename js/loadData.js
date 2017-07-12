var keys = [];
for (var key in DATA["Courses"])
  keys.push(key);

function courses(){
  for(var i=0; i<keys.length; i++)
      document.getElementById('courseDisplay').innerHTML+="<li><a href=\"#menu\" onclick=\"openCourse(event, course"+i+")\">"+keys[i]+"<sup>"+Object.keys(DATA["Courses"][keys[i]]).length+"</sup></a></li>";
}

function courses2(){
  for(var i=0; i<keys.length; i++){
    if(i==0)
      document.getElementById('courseDisplay2').innerHTML+="<a href=\"#\" id=\"default\" onclick=\"openCourse(event, course"+i+")\">"+keys[i]+"<sup>"+Object.keys(DATA["Courses"][keys[i]]).length+"</sup></a>";
    else
      document.getElementById('courseDisplay2').innerHTML+="<a href=\"#\" onclick=\"openCourse(event, course"+i+")\">"+keys[i]+"<sup>"+Object.keys(DATA["Courses"][keys[i]]).length+"</sup></a>";
  }
}

function viewMenu(){
  function imageName(nameD){
    return nameD.replace(/ /g, '-');
  }
  document.getElementById("dishDisplay").innerHTML="";
  for(var i=0; i<keys.length; i++){
    document.getElementById("dishDisplay").innerHTML+=keys[i]+"<br>";
    //document.getElementById("dishDisplay").innerHTML+="<div class=\"tabcontent\" id=\"course"+i+"\"><h3 class=\"toolbar-title\">"+keys[i]+"</h3>";
    //keys[i]=course
    for (var key in DATA["Courses"][keys[i]]){
      document.getElementById("dishDisplay").innerHTML+='<div class="col-lg-3 col-md-4 col-sm-6"><div class="shop-item">';
      document.getElementById("dishDisplay").innerHTML+='<div class="shop-thumbnail"><img src="img/menu/'+imageName(keys[i])+'/'+imageName(key)+'.jpg" alt="Shop item">';
      document.getElementById("dishDisplay").innerHTML+='<div class="shop-item-tools"><div class="count-input"><a class="incr-btn" data-action="decrease" href="#">–</a>';
      document.getElementById("dishDisplay").innerHTML+='<input class="quantity" name="'+key+'" type="text" value="0"><a class="incr-btn" data-action="increase" href="#">+</a>';
      document.getElementById("dishDisplay").innerHTML+='</div><div><div><div class="shop-item-details"><h3 class="shop-item-title">'+key+'</h3>';
      document.getElementById("dishDisplay").innerHTML+='<span class="shop-item-price">'+DATA["Courses"][keys[i]][key][0]+'</span></div></div></div>';
      //key=dish name
      //DATA["Courses"][keys[i]][key][0]=Veg/Non Veg
      //DATA["Courses"][keys[i]][key][0]=price
    }
    //document.getElementById("dishDisplay").innerHTML+="</div>";
  }
}
