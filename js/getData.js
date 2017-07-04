function getData2(){
  var dish=[];
  var price=[];
  var qty=[]
  var img=[];
  var field=[]

  //course 1
  var c1_names=["Pindi Chole", "Murg Kali Mirch", "Paneer Makhanwala", "Paneer Lababdar", "Saagwala Paneer", "Subzi Meloni", "Dal Makhani", "Dal Sath Salam", "Chicken Lababdar", "Chicken Makhanwala", "Mutton Rogan Josh"];
  var c1_price=[120, 250, 250, 250, 250, 180, 160, 120, 250, 250, 300];
  var c1_image=["img/menu/Power-Up-Main-Course/Pindi-Chole.jpg", "img/menu/Power-Up-Main-Course/Murg-Kali-Mirch.jpg", "img/menu/Power-Up-Main-Course/Paneer-Makhanwala.jpg", "img/menu/Power-Up-Main-Course/Paneer-Lababdar.jpg", "img/menu/Power-Up-Main-Course/Saagwala-Paneer.jpg", "img/menu/Power-Up-Main-Course/Subzi-Meloni.jpg", "img/menu/Power-Up-Main-Course/Dal-Makhani.jpg", "img/menu/Power-Up-Main-Course/Dal-Sath-Salam.jpg", "img/menu/Power-Up-Main-Course/Chicken-Lababdar.jpg", "img/menu/Power-Up-Main-Course/Chicken-Makhanwala.jpg", "img/menu/Power-Up-Main-Course/Mutton-Rogan-Josh.jpg"];
  var c1_list=[Number(document.getElementsByName('c1_1')[0].value), Number(document.getElementsByName('c1_2')[0].value), Number(document.getElementsByName('c1_3')[0].value), Number(document.getElementsByName('c1_4')[0].value), Number(document.getElementsByName('c1_5')[0].value),
    Number(document.getElementsByName('c1_6')[0].value), Number(document.getElementsByName('c1_7')[0].value), Number(document.getElementsByName('c1_8')[0].value), Number(document.getElementsByName('c1_9')[0].value), Number(document.getElementsByName('c1_10')[0].value),
    Number(document.getElementsByName('c1_11')[0].value)];
  for(var i=0; i<c1_list.length; i++){
    if(c1_list[i]!=0){
      field.push("c1_"+(i+1));
      dish.push(c1_names[i]);
      price.push(c1_price[i]);
      qty.push(c1_list[i]);
      img.push(c1_image[i]);
    }
  }
  //course 2
  var c2_names=["Steamed Rice", "Jeera Rice", "Chicken Biryani", "Mutton Biryani"];
  var c2_price=[90, 120, 220, 290];
  var c2_image=["img/menu/Tank-Up-On-Rice/Steamed-Rice.jpg", "img/menu/Tank-Up-On-Rice/Jeera-Rice.jpg", "img/menu/Tank-Up-On-Rice/Chicken-Biryani.jpg", "img/menu/Tank-Up-On-Rice/Mutton-Biryani.jpg"];
  var c2_list=[Number(document.getElementsByName('c2_1')[0].value), Number(document.getElementsByName('c2_2')[0].value), Number(document.getElementsByName('c2_3')[0].value), Number(document.getElementsByName('c2_4')[0].value)];
  for(var i=0; i<c2_list.length; i++){
    if(c2_list[i]!=0){
      field.push("c2_"+(i+1));
      dish.push(c2_names[i]);
      price.push(c2_price[i]);
      qty.push(c2_list[i]);
      img.push(c2_image[i]);
    }
  }
  //course 3
  var c3_names=["Onion Kulcha", "Wheat Tawa Roti"];
  var c3_price=[35, 15];
  var c3_image=["img/menu/Piping-Breads/Onion-Kulcha.jpg", "img/menu/Piping-Breads/Wheat-Tawa-Roti.jpg"];
  var c3_list=[Number(document.getElementsByName('c3_1')[0].value), Number(document.getElementsByName('c3_2')[0].value)];
  for(var i=0; i<c3_list.length; i++){
    if(c3_list[i]!=0){
      field.push("c3_"+(i+1));
      dish.push(c3_names[i]);
      price.push(c3_price[i]);
      qty.push(c3_list[i]);
      img.push(c3_image[i]);
    }
  }
  //course 4
  var c4_names=["Phirni", "Kheer", "B&W Chocolate Cake (Eggless)"];
  var c4_price=[90, 90, 150];
  var c4_image=["img/menu/Riveting-Desserts/Phirni.jpg", "img/menu/Riveting-Desserts/Kheer.jpg", "img/menu/Riveting-Desserts/Chocolate-Cake.jpg"];
  var c4_list=[Number(document.getElementsByName('c4_1')[0].value), Number(document.getElementsByName('c4_2')[0].value), Number(document.getElementsByName('c4_3')[0].value)];
  for(var i=0; i<c4_list.length; i++){
    if(c4_list[i]!=0){
      field.push("c4_"+(i+1));
      dish.push(c4_names[i]);
      price.push(c4_price[i]);
      qty.push(c4_list[i]);
      img.push(c4_image[i]);
    }
  }
  //course 5
  var c5_names=["Lassi", "Water"];
  var c5_price=[80, 20];
  var c5_image=["img/menu/Super-Coolants/Lassi.jpg", "img/menu/Super-Coolants/Water.jpg"];
  var c5_list=[Number(document.getElementsByName('c5_1')[0].value), Number(document.getElementsByName('c5_2')[0].value)];
  for(var i=0; i<c5_list.length; i++){
    if(c5_list[i]!=0){
      dish.push(c5_names[i]);
      price.push(c5_price[i]);
      qty.push(c5_list[i]);
      img.push(c5_image[i]);
    }
  }
  //course 6
  var c6_names=["Dilli Combo (Veg)", "Amritsari Combo (Veg)", "Lucknowi Combo (Veg)", "Dilli Combo (Non Veg)", "Amritsari Combo (Non Veg)", "Kashmiri Combo (Non Veg)"];
  var c6_price=[280, 280, 280, 280, 280, 280]
  var c6_image=["img/menu/Top-Gear-Combos/Dilli-Combo-Veg.jpg", "img/menu/Top-Gear-Combos/Amritsari-Combo-Veg.jpg", "img/menu/Top-Gear-Combos/Lucknowi-Combo-Veg.jpg", "img/menu/Top-Gear-Combos/Dilli-Combo-Non-Veg.jpg", "img/menu/Top-Gear-Combos/Amritsari-Combo-Non-Veg.jpg", "img/menu/Top-Gear-Combos/Kashmiri-Combo-Non-Veg.jpg"];
  var c6_list=[Number(document.getElementsByName('c6_1')[0].value), Number(document.getElementsByName('c6_2')[0].value), Number(document.getElementsByName('c6_3')[0].value), Number(document.getElementsByName('c6_4')[0].value), Number(document.getElementsByName('c6_5')[0].value), Number(document.getElementsByName('c6_6')[0].value)];
  for(var i=0; i<c6_list.length; i++){
    if(c6_list[i]!=0){
      field.push("c6_"+(i+1));
      dish.push(c6_names[i]);
      price.push(c6_price[i]);
      qty.push(c6_list[i]);
      img.push(c6_image[i]);
    }
  }
  //course 7
  var c7_names=["Dilli Mini Combo (Veg)", "Lucknowi Mini Combo (Veg)", "Amritsari Mini Combo (Veg)", "Dal Makhani Mini Combo (Veg)", "Dilli Mini Combo (Non Veg)", "Amritsari Mini Combo (Non Veg)", "Kashmiri Mini Combo (Non Veg)", "Pindi Chole Combo"];
  var c7_price=[160, 160, 160, 99, 160, 160, 220, 120];
  var c7_image=["img/menu/Speedy-Combos/Dilli-Mini-Combo-Veg.jpg", "img/menu/Speedy-Combos/Lucknowi-Mini-Combo-Veg.jpg", "img/menu/Speedy-Combos/Amritsari-Mini-Combo-Veg.jpg", "img/menu/Speedy-Combos/Dal-Makhani-Mini-Combo-Veg.jpg", "img/menu/Speedy-Combos/Dilli-Mini-Combo-Non-Veg.jpg", "img/menu/Speedy-Combos/Amritsari-Mini-Combo-Non-Veg.jpg", "img/menu/Speedy-Combos/Kashmiri-Mini-Combo-Non-Veg.jpg", "img/menu/Speedy-Combos/Pindi-Chole-Combo.jpg"];
  var c7_list=[Number(document.getElementsByName('c7_1')[0].value), Number(document.getElementsByName('c7_2')[0].value), Number(document.getElementsByName('c7_3')[0].value), Number(document.getElementsByName('c7_4')[0].value), Number(document.getElementsByName('c7_5')[0].value), Number(document.getElementsByName('c7_6')[0].value),
      Number(document.getElementsByName('c7_7')[0].value), Number(document.getElementsByName('c7_8')[0].value)];
  for(var i=0; i<c7_list.length; i++){
    if(c7_list[i]!=0){
      field.push("c7_"+(i+1));
      dish.push(c7_names[i]);
      price.push(c7_price[i]);
      qty.push(c7_list[i]);
      img.push(c7_image[i]);
    }
  }
  //course 8
  var c8_names=["Assorted Veg Tikkis", "Paneer Tikka", "Hariyali Chicken Kebab", "Malai Chicken Kebab", "Mutton Seekh Kebab"];
  var c8_price=[200, 220, 220, 220, 260];
  var c8_image=["img/menu/Full-Throttle-Starters/Assorted-Veg-Tikkis.jpg", "img/menu/Full-Throttle-Starters/Paneer-Tikka.jpg", "img/menu/Full-Throttle-Starters/Hariyali-Chicken-Kebab.jpg", "img/menu/Full-Throttle-Starters/Malai-Chicken-Kebab.jpg", "Mutton-Seekh-Kebab.jpg"];
  var c8_list=[Number(document.getElementsByName('c8_1')[0].value), Number(document.getElementsByName('c8_2')[0].value), Number(document.getElementsByName('c8_3')[0].value), Number(document.getElementsByName('c8_4')[0].value), Number(document.getElementsByName('c8_5')[0].value)];
  for(var i=0; i<c8_list.length; i++){
    if(c8_list[i]!=0){
      field.push("c8_"+(i+1));
      dish.push(c8_names[i]);
      price.push(c8_price[i]);
      qty.push(c8_list[i]);
      img.push(c8_image[i]);
    }
  }
  //course 9
  var c9_names=["Paneer Tikka Roll", "Chicken Tikka Roll", "Mutton Seekh Roll"];
  var c9_price=[140, 160, 200];
  var c9_image=["img/menu/Blazing-Rolls/Paneer-Tikka-Roll.jpg", "img/menu/Blazing-Rolls/Chicken-Tikka-Roll.jpg", "img/menu/Blazing-Rolls/Mutton-Seekh-Roll.jpg"];
  var c9_list=[Number(document.getElementsByName('c9_1')[0].value), Number(document.getElementsByName('c9_2')[0].value), Number(document.getElementsByName('c9_3')[0].value)];
  for(var i=0; i<c9_list.length; i++){
    if(c9_list[i]!=0){
      field.push("c9_"+(i+1));
      dish.push(c9_names[i]);
      price.push(c9_price[i]);
      qty.push(c9_list[i]);
      img.push(c9_image[i]);
    }
  }
  //la la la
  var xyx="";
  var total=0;
  var items=0;//Number(document.getElementById("item_qty").innerHTML);
  for(var i=0; i<dish.length; i++){
    var amount=price[i]*qty[i];
    //xyx+=dish[i]+"&emsp; "+price[i]+"&emsp; QUANTITY: "+qty[i]+"&emsp; TOTAl: "+amount+"</br>";
    items+=qty[i];
    total+=amount;
    //exp
    //document.getElementsByName(field[i])[0].value
    xyx+="<div class=\"item\">";
    xyx+="<img src=\""+img[i]+"\" alt=\"Item\">";
    xyx+="<div class=\"item-details\">";
    xyx+="<h3 class=\"item-title\">"+dish[i]+"</h3>";
    xyx+="<h4 class=\"item-price\">&#8377;"+price[i]+"</h4>";
    xyx+="<div class=\"count-input\">";
    xyx+="<a class=\"incr-btn\" data-action=\"decrease\" href=\"#\">–</a>";
    xyx+="<input class=\"quantity\" name=\""+field[i]+"\" type=\"text\" value=\""+qty[i]+"\">";
    xyx+="<a class=\"incr-btn\" data-action=\"increase\" href=\"#\">+</a>";
    xyx+="</div>";
    xyx+="</div>";
    //xyx+="<a href=\"#\" class=\"item-remove\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remove\">";
    xyx+="<i href=\"#\" onclick=\"removeItem(this)\" class=\"material-icons remove_shopping_cart removeButton\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remove\"></i>";
    //xyx+="</a>";
    xyx+="</div>";
  }
  document.getElementById("amt").innerHTML="&#8377;"+total;
  document.getElementById("item_qty").innerHTML=items;
  document.getElementById("item_qty2").innerHTML="Currently "+items+" items are in the cart.";
  //console.log("data retrieved");
  document.getElementById("display").innerHTML=xyx;
  sender(dish, qty);
}

function checkout(){
  //window.alert("Close this webview/tab to proceed.");
  sessionStorage.setItem('total', document.getElementById("amt").innerHTML);
}

function removeItem(obj){
  v=(obj.parentNode.childNodes[1].childNodes[2].childNodes[1].name);//((' ' + obj.parentElement.className + ' ').indexOf("quantity") > -1);//(obj.parentElement);//find('.quantity')
  syncValues(v, 0);
  finalSend();
  //obj.parentNode.parentNode.removeChild(obj.parentNode);
  //getData2();
}

function syncValues(v1, val){
  document.getElementsByName(v1)[0].value=val;
  document.getElementsByName(v1)[1].value=val;
  getData2();
}
