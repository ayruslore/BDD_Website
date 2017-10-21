$('#clear').click(function() {
  $('#search_bar').val('');
  searchDish();
});

function searchDish(){
  function imageName(nameD){
    return nameD.replace(/ /g, '-');
  }
  document.getElementById("search").innerHTML="";
  var srch=[];
  var srchCourse=[];
  function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  var searchField=document.getElementById('search_bar').value;
  console.log(searchField);
  for(var i=0; i<keys.length; i++){
    console.log(DATA["Courses"][keys[i]]);
    for(var key in DATA["Courses"][keys[i]]){
      if((key.toUpperCase()).indexOf(searchField.toUpperCase())!=-1){
        if(veg==1 & DATA["Courses"][keys[i]][key][1]=="Veg"){
          srch.push(key);
          srchCourse.push(keys[i]);
        }
        else if(veg==0){
          srch.push(key);
          srchCourse.push(keys[i]);
        }
      }
    }
  }
  console.log(srch);
  console.log(srchCourse);
  //search bar heading
  var tabCourse=document.getElementById("search");
  tabCourse.className="shopping-cart tabcontent"
  var hed=document.createElement("H3");
  hed.className="toolbar-title";
  hed.innerHTML="Search Results";
  tabCourse.appendChild(hed);
  //<div class="row">
  var d7=document.createElement("DIV");
  d7.className="row"
  for(var i=0; i<srch.length; i++){
    //<div class="item">
    var d1=document.createElement("DIV");
    d1.className="item";
    //<a href="shop-single.html" class="item-thumb">
    var a1=document.createElement("A");
    a1.className="item-thumb";
    /*
    <img src="img/cart/item02.jpg" alt="Item">
    var im1=document.createElement("IMG");
    im1.src="img/db/"+imageName(srch[i])+".jpg";
    a1.appendChild(im1);
    d1.appendChild(a1);
    */
    //<div class="item-details">
    var d2=document.createElement("DIV");
    d2.className="item-details filters-bar";
    //<h3 class="item-title">
    var hd1=document.createElement("H3");
    hd1.className="item-title column";
    hd1.innerHTML=srch[i]+" (&#8377;"+DATA["Courses"][srchCourse[i]][srch[i]][0]+")";
    if(DATA["Courses"][srchCourse[i]][srch[i]][1]=="Veg")
      hd1.style.color="green";
    else
      hd1.style.color="red";
    d2.appendChild(hd1);
    /*
    //<h4 class="item-price">
    var hd2=document.createElement("H4");
    hd2.className="item-price column";
    hd2.innerHTML="&#8377;"+DATA["Courses"][srchCourse[i]][srch[i]][0];
    d2.appendChild(hd2);
    */
    //<div class="count-input">
    var d3=document.createElement("DIV");
    d3.className="count-input column";
    //<a class="incr-btn" data-action="decrease" href="#">–</a>
    var a2=document.createElement("A");
    a2.className="incr-btn";
    a2.setAttribute("data-action", "decrease");
    a2.href='#';
    a2.innerHTML='-';
    d3.appendChild(a2);
    //<input class="quantity" name="c1_10" type="text" value="0">
    var i1=document.createElement("INPUT");
    i1.setAttribute("type", "text");
    i1.className="quantity";
    i1.value=Number(document.getElementsByName(srch[i])[0].value);
    i1.name=srch[i];
    d3.appendChild(i1);
    //<a class="incr-btn" data-action="increase" href="#">+</a>
    var a3=document.createElement("A");
    a3.className="incr-btn";
    a3.setAttribute("data-action", "increase");
    a3.href='#';
    a3.innerHTML='+';
    d3.appendChild(a3);
    d2.appendChild(d3);
    d1.appendChild(d2);
    tabCourse.appendChild(d1);
    /*
    //<div class="count-input">
    var d1=document.createElement("DIV");
    d1.className="count-input";
    //<a class="incr-btn" data-action="decrease" href="#">–</a>
    var a1=document.createElement("A");
    a1.className="incr-btn";
    a1.setAttribute("data-action", "decrease");
    a1.href='#';
    a1.innerHTML='-';
    d1.appendChild(a1);
    //<input class="quantity" name="c1_10" type="text" value="0">
    var i1=document.createElement("INPUT");
    i1.setAttribute("type", "text");
    i1.className="quantity";
    i1.value="0";
    i1.name=srch[i];
    d1.appendChild(i1);
    //<a class="incr-btn" data-action="increase" href="#">+</a>
    var a2=document.createElement("A");
    a2.className="incr-btn";
    a2.setAttribute("data-action", "increase");
    a2.href='#';
    a2.innerHTML='+';
    d1.appendChild(a2);
    //<div class="shop-item-tools">
    var d2=document.createElement("DIV");
    d2.className="shop-item-tools"
    d2.appendChild(d1);
    //<div class="shop-item-details">
    var d3=document.createElement("DIV");
    d3.className="shop-item-details";
    //<h3 class="shop-item-title">Chicken Makhanwala</h3>
    var hd1=document.createElement("H3");
    hd1.className="shop-item-title";
    hd1.innerHTML=srch[i];
    d3.appendChild(hd1);
    //<span class="shop-item-price">&#8377;250</span>
    var s1=document.createElement("SPAN");
    s1.className="shop-item-price";
    s1.innerHTML="&#8377;"+DATA["Courses"][srchCourse[i]][srch[i]][0];
    d3.appendChild(s1);
    //<div class="shop-thumbnail">
    var d4=document.createElement("DIV");
    d4.className="shop-thumbnail";
    if(DATA["Courses"][srchCourse[i]][srch[i]][1]=="Non Veg"){
      var s2=document.createElement("SPAN");
      s2.className="shop-label text-danger"
      s2.innerHTML="Non Veg"
      d4.appendChild(s2);
    }
    //<img src="img/menu/Riveting-Desserts/Chocolate-Cake.jpg" alt="Shop item">
    var im1=document.createElement("IMG");
    im1.src="img/db/"+imageName(srch[i])+".jpg";
    im1.alt="Image Not Available - Scroll over the image to add to your basket.";
    d4.appendChild(im1);
    d4.appendChild(d2);
    //<div class="shop-item">
    var d5=document.createElement("DIV");
    d5.className="shop-item";
    d5.appendChild(d4);
    d5.appendChild(d3);
    //<div class="col-lg-3 col-md-4 col-sm-6">
    var d6=document.createElement("DIV");
    d6.className="col-lg-3 col-md-4 col-sm-6";
    if((j%4)!=0){
      d6.appendChild(d5);
      d7.appendChild(d6);
      console.log("IF "+j);
    }
    else{
      d7=document.createElement("DIV");
      d7.className="row"
      d6.appendChild(d5);
      d7.appendChild(d6);
      console.log("ELSE "+j);
    }
    tabCourse.appendChild(d7);
    j+=1;
    //key=dish name
    //DATA["Courses"][keys[i]][key][0]=Veg/Non Veg
    //DATA["Courses"][keys[i]][key][1]=price
    */
  }
  if(srch.length==0){
    var hd1=document.createElement("H3");
    hd1.className="shop-item-title";
    hd1.innerHTML="NOTHING MATCHES YOUR SEARCH!";
    tabCourse.appendChild(hd1);
  }
  openCourse(event, "search");
}

var x=[], y=[];
function getData2(){
  document.getElementById("display").innerHTML="";
  function imageName(nameD){
    return nameD.replace(/ /g, '-');
  }
  var course=[];
  var dish=[];
  var qty=[]

  var total=0, items=0;
  for(var i=0; i<keys.length; i++){
    for (var key in DATA["Courses"][keys[i]]){
      var vl=Number(document.getElementsByName(key)[0].value);
      if(vl!=0){
        course.push(keys[i]);
        dish.push(key);
        qty.push(vl);
      }
    }
  }
  for(var i=0; i<dish.length; i++){
    //<div class="item">
    var d1=document.createElement("DIV");
    d1.className="item";
    //<a href="shop-single.html" class="item-thumb">
    var a1=document.createElement("A");
    a1.className="item-thumb";
    /*
    <img src="img/cart/item02.jpg" alt="Item">
    var im1=document.createElement("IMG");
    im1.src="img/db/"+imageName(dish[i])+".jpg";
    a1.appendChild(im1);
    d1.appendChild(a1);
    */
    //<div class="item-details">
    var d2=document.createElement("DIV");
    d2.className="item-details filters-bar";
    //<h3 class="item-title">
    var hd1=document.createElement("H3");
    hd1.className="item-title column";
    hd1.innerHTML=dish[i]+" (&#8377;"+DATA["Courses"][course[i]][dish[i]][0]*qty[i]+")";
    if(DATA["Courses"][course[i]][dish[i]][1]=="Veg")
      hd1.style.color="green";
    else
      hd1.style.color="red";
    d2.appendChild(hd1);
    /*
    //<h4 class="item-price">
    var hd2=document.createElement("H4");
    hd2.className="item-price column";
    hd2.innerHTML="&#8377;"+DATA["Courses"][course[i]][dish[i]][0]*qty[i];
    d2.appendChild(hd2);
    */
    total+=Number(DATA["Courses"][course[i]][dish[i]][0]*qty[i]);
    //<div class="count-input">
    var d3=document.createElement("DIV");
    d3.className="count-input column";
    //<a class="incr-btn" data-action="decrease" href="#">–</a>
    var a2=document.createElement("A");
    a2.className="incr-btn";
    a2.setAttribute("data-action", "decrease");
    a2.href='#';
    a2.innerHTML='-';
    d3.appendChild(a2);
    //<input class="quantity" name="c1_10" type="text" value="0">
    var i1=document.createElement("INPUT");
    i1.setAttribute("type", "text");
    i1.className="quantity";
    i1.value=Number(document.getElementsByName(dish[i])[0].value);
    items+=Number(document.getElementsByName(dish[i])[0].value);
    i1.name=dish[i];
    d3.appendChild(i1);
    //<a class="incr-btn" data-action="increase" href="#">+</a>
    var a3=document.createElement("A");
    a3.className="incr-btn";
    a3.setAttribute("data-action", "increase");
    a3.href='#';
    a3.innerHTML='+';
    d3.appendChild(a3);
    d2.appendChild(d3);
    d1.appendChild(d2);
    //<a href="#" class="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
    var a4=document.createElement("A");
    a4.className="item-remove";
    a4.setAttribute("data-toggle", "tooltip");
    a4.setAttribute("data-placement", "top");
    a4.setAttribute("title", "Remove");
    a4.onclick=function(){
      removeItem(this);
    }
    //<i class="material-icons remove_shopping_cart"></i>
    var i2=document.createElement("I");
    i2.className="material-icons remove_shopping_cart";
    a4.appendChild(i2);
    //d1.appendChild(a4);
    document.getElementById("display").appendChild(d1);
  }
  document.getElementById("amt").innerHTML="&#8377;"+total;
  document.getElementById("item_qty").innerHTML=items;
  document.getElementById("item_qty2").innerHTML="Currently "+items+" items are in your basket.";
  x=dish, y=qty;
}

function checkout(){
  document.getElementsByTagName("BODY")[0].style.display="none";
  window.alert("Close this webview/tab to proceed.");
  $.ajax({
    type: "GET",
    url: nodejsScript+"/showcart",
    data: {
      'Id': uid
    },
    success: function(data){
      console.log('Success!');
    },
    error: function(data){
      console.log('Nope!');
    }
  });

  //location.href="payment.html?userId="+uid;
  //sessionStorage.setItem('total', document.getElementById("amt").innerHTML);
}

function removeItem(obj){
  console.log(obj.parentNode.childNodes[1].childNodes[2].childNodes[1]);
  var v=(obj.parentNode.childNodes[1].childNodes[2].childNodes[1].name);
  syncValues(v, 0);
  getData2();
}

function syncValues(v1, val){
  /*
  var temp=document.getElementsByName(v1);
  for(var i=0; i<temp.length; i++)
    temp[i].setAttribute("value", v1);
  */
  document.getElementsByName(v1)[0].value=val;
  document.getElementsByName(v1)[1].value=val;
  if(document.getElementsByName(v1)[2]!=null)
    document.getElementsByName(v1)[2].value=val;
  getData2();
  sender(x, y);
  finalSend();
}
