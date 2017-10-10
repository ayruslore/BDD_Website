var keys = [];
for (var key in DATA["Courses"])
  keys.push(key);

function toTitleCase(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function openCourse2(event, courseName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    console.log();
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        console.log(tablinks[i]);
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(courseName).style.display = "block";
    //event.currentTarget.className += " active";
}

function viewMenu(){
  document.getElementById("display").innerHTML="";
  for(var i=0; i<keys.length; i++){
    document.getElementById("display").innerHTML+="<br><br><strong>"+keys[i]+"<strong><br>";
    var keys2 = [];
    for (var key in DATA["Courses"][keys[i]]){
      keys2.push(key);
      document.getElementById("display").innerHTML+=key+" - "+DATA["Courses"][keys[i]][key][0]+" - "+DATA["Courses"][keys[i]][key][1]+"<br>";
    }
  }
}

function removeC(){
  document.getElementById("rem").innerHTML="";
  for(var i=0; i<keys.length; i++)
    document.getElementById("rem").innerHTML+="<input type=\"radio\" id=\"c"+i+"\" value=\""+keys[i]+"\">"+ keys[i]+"<br>";
  document.getElementById("rem").innerHTML+='<button onclick="remo()">Remove</button>';
}

function remo(){
  var rate_value;
  for(var i=0; i<keys.length; i++)
    if (document.getElementById('c'+i).checked)
      rate_value = document.getElementById('c'+i).value;
  for(var i in DATA["Courses"][rate_value]){
    $.ajax({
      type: "GET",
      url: redisDb+"/remove_dish/"+i.replace(/ /g, '_'),
      success: function(data){
        console.log(data);
      },
      error: function(data){
        console.log('Nope!');
      }
    });
  }
  delete DATA["Courses"][rate_value];
  var index = keys.indexOf(rate_value);
  keys.splice(index, 1);
  console.log(DATA["Courses"]);
  removeC();
}

function addC(){
    document.getElementById("ad").innerHTML='<input id="new_course" type="text" value="">';
    document.getElementById("ad").innerHTML+='<button onclick="addCo()">Add</button>';
}
function addCo(){
  console.log(document.getElementById("new_course").value);
  DATA["Courses"][toTitleCase(document.getElementById("new_course").value)]={};
  keys.push(toTitleCase(document.getElementById("new_course").value));
  console.log(keys);
  alert("Course added!");
}

function removeDi(){
  document.getElementById('dishes').innerHTML="";
  var course;
  for(var i=0; i<keys.length; i++){
    if (document.getElementById(keys[i]+"_").checked){
      course=document.getElementById(keys[i]).value;
      break;
    }
  }
  var keys2=[];
  for (var key in DATA["Courses"][course])
    keys2.push(key);
  for(var i=0; i<keys2.length; i++){
    //<label class="checkbox">
    var la1=document.createElement("LABEL");
    la1.className="radio";
    //<div class="icheckbox">
    var di1=document.createElement("DIV");
    di1.className="iradio";
    //<input type="checkbox" style="position: absolute; opacity: 0;">
    var in1=document.createElement("INPUT");
    in1.setAttribute("type", "radio");
    in1.id=keys2[i];
    in1.class="chb";
    in1.value=keys2[i];
    in1.style="position: absolute; opacity: 0;";
    di1.appendChild(in1);
    //<ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;">
    var in2=document.createElement("INS");
    in2.className="iCheck-helper";
    in2.style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;";
    di1.appendChild(in2);
    la1.appendChild(di1);
    la1.innerHTML+=keys2[i];
    document.getElementById('dishes').appendChild(la1);
  }
  var ab=document.createElement("A");
  ab.className="btn btn-ghost btn-pill btn-danger waves-effect waves-light";
  ab.innerHTML="Remove Dish!";
  ab.onclick=function(){
    remoD(keys2, course);
  }
  document.getElementById('dishes').appendChild(ab);
}

function remoD(keys2, course){
  var rate_value;
  for(var i=0; i<keys2.length; i++)
    if (document.getElementById(keys2[i]).checked)
      //console.log(document.getElementById(keys2[i]).value);
      rate_value = document.getElementById(keys2[i]).value;
  delete DATA["Courses"][course][rate_value];
  console.log(DATA["Courses"][course]);
  //document.getElementById("courseDishes").innerHTML="";
  document.getElementById("removeDish123").click();
  //alert(rate_value+" Removed!\nUpdate Menu now!");
  var xyz=[rate_value];
  xyz=JSON.stringify(xyz);
  $.ajax({
    type: "GET",
    url: redisDb+"/remove_dish/"+xyz.replace(/ /g, '_'),
    success: function(data){
      console.log(data);
    },
    error: function(data){
      console.log('Nope!');
    }
  });
}

function addD(id_){
  for(var i=0; i<keys.length; i++){
    var l1=document.createElement("LABEL");
    l1.className="radio"
    var d1=document.createElement("DIV");
    d1.className="iradio";
    var i1=document.createElement("INPUT");
    i1.setAttribute("type", "radio");
    if(id_=="courses4"){
      i1.id=keys[i]+"_3";
      i1.name="rad5";
    }
    if(id_=="courses3"){
      i1.id=keys[i]+"_2";
      i1.name="rad4";
    }else if(id_=="courses2"){
      i1.id=keys[i]+"_";
      i1.name="rad3";
    }else{
      i1.id=keys[i];
      i1.name="rad2";
    }
    i1.value=keys[i];
    i1.style="position: absolute; opacity: 0;";
    var i2=document.createElement("INS");
    i2.className="iCheck-helper";
    i2.style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;";
    i1.appendChild(i2);
    d1.appendChild(i1);
    l1.innerHTML=keys[i];
    l1.appendChild(d1);
    document.getElementById(id_).appendChild(l1);
  }
}

function addDi(){
  function imageName(nameD){
    return nameD.replace(/ /g, '-');
  }
  var course, vg;
  for(var i=0; i<keys.length; i++){
    if(document.getElementById(keys[i]).checked){
      course=document.getElementById(keys[i]).value;
      break;
    }
  }
  name=name.replace("Non Veg", "NonVeg");
  if (document.getElementById('Veg').checked)
    vg=document.getElementById('Veg').value;
  else vg=document.getElementById('Non Veg').value;
  var dish_name=document.getElementById('dish_name').value;
  var dish_price=document.getElementById('dish_price').value;
  var dish_ing, dish_c;
  for(var i=1; i<=6; i++){
    if(document.getElementById("ing"+i).checked){
      dish_ing=document.getElementById("ing"+i).value;
      break
    }
  }
  for(var i=0; i<keys.length; i++){
    if(document.getElementById(keys[i]).checked){
      dish_c=document.getElementById(keys[i]).value;
      break
    }
  }
  var dishDet=[{"v_n": vg, "name":toTitleCase(dish_name), "price":dish_price, "link":"http:__ec2-13-58-254-247.us-east-2.compute.amazonaws.com_img_db_"+imageName(toTitleCase(dish_name))+".jpg", "category": dish_ing, "course":dish_c, "count":0}];
  dishDet=JSON.stringify(dishDet);
  console.log(dishDet);
  $.ajax({
    type: "GET",
    url: redisDb+"/add_dish/"+dishDet,
    success: function(data){
      console.log(data);
    },
    error: function(data){
      console.log('Nope!');
    }
  });

  if(dish_name.length!=0 & dish_price.length!=0 & course!=null & vg!=null){
    DATA["Courses"][course][toTitleCase(dish_name)]=[dish_price, vg];
    //console.log(document.getElementById("imageFile").files[0].name);
    alert("Dish added!");
    openCourse(event, 'menuView');
    viewMenu();
  }
  else
    alert("Please fill in all the fields!");
}


function addOrder(orderId, order, loc, status){
  //<div class="panel">
  var d1=document.createElement("DIV");
  d1.className="panel";
  d1.id="o"+orderId;
  //<div class="panel-heading">
  var d2=document.createElement("DIV");
  d2.className="panel-heading";
  //<a class="panel-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#orderId" aria-expanded="false">
  var a1=document.createElement("A");
  a1.className="panel-title collapsed";
  a1.setAttribute("data-toggle", "collapse");
  a1.setAttribute("data-parent", "#accordion"+loc);
  a1.href="#"+orderId;
  a1.setAttribute("aria-expanded", "false");
  d2.innerHTML+="Order Number #"+orderId;
  var w1=document.createElement("WQ");
  w1.href="#";
  w1.id=orderId+"status";
  w1.className="btn btn-pill btn-sm btn-primary waves-effect waves-light";
  if(status=="pending"){
    w1.innerHTML="Accept";
    w1.onclick=function(){
      changeStatus('Accepted', orderId);
    }
  }
  else if(status=="order_accepted"){
    w1.innerHTML="Accepted";
    w1.onclick=function(){
      changeStatus('In Kitchen', orderId);
    }
  }
  else if(status=="in_kitchen"){
    w1.innerHTML="In Kitchen";
    w1.onclick=function(){
      changeStatus('Out For Delivery', orderId);
    }
  }
  else if(status=="out_for_delivery"){
    w1.innerHTML="Out For Delivery";
    w1.onclick=function(){
      changeStatus('Delivered', orderId);
    }
  }
  a1.appendChild(w1);
  var w2=document.createElement("WQ");
  w2.href="#";
  w2.id=orderId+"statusReject";
  w2.className="btn btn-pill btn-sm btn-danger waves-effect waves-light";
  w2.innerHTML="Reject";
  w2.onclick=function(){
    changeStatus('Rejected', orderId);
  }
  if(status=="pending") a1.appendChild(w2);
  d2.appendChild(a1);
  d1.appendChild(d2);
  var d3=document.createElement("DIV");
  d3.id=orderId;
  d3.className="panel-collapse collapse";
  d3.setAttribute("role", "tabpanel");
  d3.setAttribute("aria-expanded", "false");
  d3.style="height: 0px;"
  var d4=document.createElement("DIV");
  d4.innerHTML=order+"<br>";
  d4.className="panel-body text-gray";
  /*
  var a2=document.createElement("A");
  a2.href="#";
  a2.id=orderId+"kitchen";
  a2.className="btn btn-ghost btn-pill btn-sm btn-danger waves-effect waves-light";
  a2.onclick=function(){
    changeStatus('In Kitchen', orderId);
  }
  a2.innerHTML="In Kitchen";
  var a3=document.createElement("A");
  a3.href="#";
  a3.id=orderId+"delivery";
  a3.className="btn btn-ghost btn-pill btn-sm btn-warning waves-effect waves-light";
  a3.onclick=function(){
    changeStatus('Out For Delivery', orderId);
  }
  a3.innerHTML="Out For Delivery";
  var a4=document.createElement("A");
  a4.href="#";
  a4.id=orderId+"success";
  a4.className="btn btn-ghost btn-pill btn-sm btn-success waves-effect waves-light";
  a4.onclick=function(){
    changeStatus('Delivered', orderId);
  }
  a4.innerHTML="Delivered";
  //if(status=="accepted" || status=="pending") d4.appendChild(a2);
  //if(status=="pending" || status=="in_kitchen" || status=="accepted") d4.appendChild(a3);
  //if(status=="pending" || status=="out_for_delivery" || status=="in_kitchen" || status=="accepted") d4.appendChild(a4);
  */
  d3.appendChild(d4);
  d1.appendChild(d3);
  document.getElementById("accordion"+loc).appendChild(d1);
}

function changeStatus(obj, orderId){
  if(obj=="Accepted"){
    $.ajax({
      type: "GET",
      url: redisDb+"/cart/"+orderId+"/accept",
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });
    $.ajax({
      type: "GET",
      url: nodejsScript+"/statusupdate",
      data:{
        'Id': orderId,
        'Status': "accepted"
      },
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });

  }
  else if(obj=="In Kitchen"){
    $.ajax({
      url: redisDb+"/cart/"+orderId+"/in_kitchen",
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });
    $.ajax({
      type: "GET",
      url: nodejsScript+"/statusupdate",
      data:{
        'Id': orderId,
        'Status': "in_kitchen"
      },
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });

  }
  else if(obj=="Out For Delivery"){
    var delGuy=prompt("Please enter delivery boy's phone number", "");
    if (delGuy!=null){
      console.log(delGuy);
      $.ajax({
        type: "GET",
        url: redisDb+"/cart/"+orderId+"/out_for_delivery/"+delGuy,
        success: function(data){
          console.log('Success!');
        },
        error: function(data){
          console.log('Nope!');
        }
      });
      $.ajax({
        type: "GET",
        url: nodejsScript+"/statusupdate",
        data:{
          'Id': orderId,
          'Status': "out_for_delivery",
          'Dboy': delGuy
        },
        success: function(data){
          console.log('Success!');
        },
        error: function(data){
          console.log('Nope!');
        }
      });

    }
  }
  else if(obj=="Delivered"){
    $.ajax({
      type: "GET",
      url: redisDb+"/cart/"+orderId+"/delivered",
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });
    $.ajax({
      type: "GET",
      url: nodejsScript+"/statusupdate",
      data:{
        'Id': orderId,
        'Status': "delivered"
      },
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });

  }
  document.getElementById(orderId+"status").innerHTML=obj;
  if(obj=="Rejected"){
    document.getElementById("o"+orderId).remove();
    $.ajax({
      type: "GET",
      url: redisDb+"/cart/"+orderId+"/reject",
      data: "",
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });
    $.ajax({
      type: "GET",
      url: nodejsScript+"/statusupdate",
      data:{
        'Id': orderId,
        'Status': "rejected"
      },
      success: function(data){
        console.log('Success!');
      },
      error: function(data){
        console.log('Nope!');
      }
    });

  }
}

/*
[
{
  "id": "1446107422137541",
  "cart": {"tawa_roti": "6"}
},
{
  "id": "1446107422137541",
  "cart": {}
},
{
  "id": "1601355239935835",
  "cart": {"chicken_makhanwala": "3", "wheat_tawa_roti": "2"}
},
{
  "id": "1601355239935835",
  "cart": {}
}
]
*/

function ordr(data, loc){
  for(var item in data){
    console.log(data[item]["id"], JSON.stringify(data[item]["cart"]));
    if(JSON.stringify(data[item]["cart"])!={}){
      addOrder(String(data[item]["id"]), "<li>"+JSON.stringify(data[item]["data"]["name"])+"</li><li>"+JSON.stringify(data[item]["data"]["number"])+"</li><li>"+JSON.stringify(data[item]["data"]["address"])+"</li><li>"+JSON.stringify(data[item]["cart"])+"</li>", loc, data[item]["status"]);
    }
  }
}

function yel(){
  document.getElementById("accordionyel").innerHTML="";
  $.ajax({
    url: redisDb+'/read_orders_Y',
    success: function(data) {
      data=JSON.parse(data);
      console.log(data);
      ordr(data, "yel");
    },
    error: function(data){
      console.log(data);
    }
  });
}

function oar(){
  document.getElementById("accordionoar").innerHTML="";
  $.ajax({
    url: redisDb+'/read_orders_O',
    success: function(data) {
      data=JSON.parse(data);
      console.log(data);
      ordr(data, "oar");
    },
    error: function(data){
      console.log(data);
    }
  });
}

function res(){
  document.getElementById("accordionres").innerHTML="";
  $.ajax({
    url: redisDb+'/read_orders_R',
    success: function(data) {
      data=JSON.parse(data);
      console.log(data);
      ordr(data, "res");
    },
    error: function(data){
      console.log(data);
    }
  });
}

/*
setInterval(function(){
    $.ajax({
    url: redisDb+'/read_orders',
    success: function(data) {
      //var data=[{"id": "1446107422137541", "cart": {"tawa_roti": "6"}},{"id": "1446107422137541", "cart": {}},{"id": "1601355239935835", "cart": {"chicken_makhanwala": "3", "wheat_tawa_roti": "2"}}];
      data=JSON.parse(data);
      console.log(data);
      for(var i=0; i<data.length; i++){
        item=(data[i]);
        console.log(data[item]["id"], JSON.stringify(data[item]["cart"]));
        if(JSON.stringify(data[item]["cart"])!={})
          addOrder(String(data[item]["id"]), JSON.stringify(data[item]["data"]["name"])+"<br>"+JSON.stringify(data[item]["data"]["number"])+"<br>"+JSON.stringify(data[item]["data"]["address"])+"<br>"+JSON.stringify(data[item]["cart"]));
      }
    },
    error: function(data){
      console.log(data);
    }
  });
}, 15000);
*/

function submitChanges(){
  DATA=JSON.stringify(DATA);
  console.log(DATA);
  /*
  $.ajax({
    type: "GET",
    url: redisDb+"/set_menu/"+DATA,
    data: "",
    success: function(data){
      console.log(data);
      location.reload();
    },
    error: function(data){
      console.log('Nope!');
    }
  });
  */
  $.ajax({
    type: "GET",
    url: pythonSript+"/write/"+JSON.stringify(DATA),
    success: function(data){
      console.log('Success!');
    },
    error: function(data){
      console.log('Nope!');
    }
  });

}
