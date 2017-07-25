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
  delete DATA["Courses"][rate_value];
  var index = keys.indexOf(rate_value);
  keys.splice(index, 1);
  //console.log(DATA["Courses"]);
  removeC();
}

function addC(){
    document.getElementById("ad").innerHTML='<input id="new_course" type="text" value="">';
    document.getElementById("ad").innerHTML+='<button onclick="addCo()">Add</button>';
}
function addCo(){
  //console.log(document.getElementById("new_course").value);
  DATA["Courses"][toTitleCase(document.getElementById("new_course").value)]={};
  keys.push(toTitleCase(document.getElementById("new_course").value));
  //console.log(keys);
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
    /*
    <label class="checkbox">
      <div class="icheckbox">
        <input type="checkbox" style="position: absolute; opacity: 0;">
        <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;">
        </ins>
      </div>
    Checkbox
    </label>
    */
    var la1=document.createElement("LABEL");
    la1.className="checkbox checked";
    var di1=document.createElement("DIV");
    di1.className="icheckbox";
    var in1=document.createElement("INPUT");
    in1.setAttribute("type", "checkbox");
    in1.id=keys2[i];
    in1.class="chb";
    in1.value=keys2[i];
    in1.style="position: absolute; opacity: 0;";
    di1.appendChild(in1);
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
  document.getElementById('dishes').appendChild(ab);
}

function remoD(keys2, course){
  var rate_value;
  for(var i=0; i<keys2.length; i++)
    if (document.getElementById('d'+i).checked)
      rate_value = document.getElementById('d'+i).value;
  delete DATA["Courses"][course][rate_value];
  //console.log(DATA["Courses"][course]);
  document.getElementById("courseDishes").innerHTML="";
  alert("Dish Removed!");
}

function addD(id_){
  for(var i=0; i<keys.length; i++){
    var l1=document.createElement("LABEL");
    l1.className="radio"
    var d1=document.createElement("DIV");
    d1.className="iradio";
    var i1=document.createElement("INPUT");
    i1.setAttribute("type", "radio");
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
  var course, vg;
  for(var i=0; i<keys.length; i++){
    if (document.getElementById(keys[i]).checked){
      course=document.getElementById(keys[i]).value;
      break;
    }
  }
  if (document.getElementById('Veg').checked)
    vg=document.getElementById('Veg').value;
  else vg=document.getElementById('Non Veg').value;
  var dish_name=document.getElementById('dish_name').value;
  var dish_price=document.getElementById('dish_price').value;
  if(dish_name.length!=0 & dish_price.length!=0 & course!=null & vg!=null){
    DATA["Courses"][course][toTitleCase(dish_name)]=[dish_price, vg];
    console.log(document.getElementById("imageFile").files[0].name);
    alert("Dish added!");
    openCourse(event, 'menuView');
    viewMenu();
  }
  else
    alert("Please fill in all the fields!");
}


function addOrder(orderId){
  //<div class="panel">
  var d1=document.createElement("DIV");
  d1.className="panel";
  //<div class="panel-heading">
  var d2=document.createElement("DIV");
  d2.className="panel-heading";
  d2.id="o"+orderId;
  //<a class="panel-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#orderId" aria-expanded="false">
  var a1=document.createElement("A");
  a1.className="panel-title collapsed";
  a1.setAttribute("data-toggle", "collapse");
  a1.setAttribute("data-parent", "#accordion");
  a1.href="#"+orderId;
  a1.setAttribute("aria-expanded", "false");
  d2.innerHTML+="Order Number #"+orderId;
  var w1=document.createElement("WQ");
  w1.href="#";
  w1.id=orderId+"status";
  w1.className="btn btn-pill btn-sm btn-primary waves-effect waves-light";
  w1.innerHTML="Accept";
  w1.onclick=function(){
    changeStatus('Accepted', orderId);
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
  a1.appendChild(w2);
  d2.appendChild(a1);
  d1.appendChild(d2);
  var d3=document.createElement("DIV");
  d3.id=orderId;
  d3.className="panel-collapse collapse";
  d3.setAttribute("role", "tabpanel");
  d3.setAttribute("aria-expanded", "false");
  d3.style="height: 0px;"
  var d4=document.createElement("DIV");
  d4.innerHTML="* ORDER DETAILS HERE *<br>";
  d4.className="panel-body text-gray";
  d4.innerHTML+="Update Status! ";
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
  a3.id=orderId+"kitchen";
  a3.className="btn btn-ghost btn-pill btn-sm btn-warning waves-effect waves-light";
  a3.onclick=function(){
    changeStatus('Out For Delivery', orderId);
  }
  a3.innerHTML="Out For Delivery";
  var a4=document.createElement("A");
  a4.href="#";
  a4.id=orderId+"kitchen";
  a4.className="btn btn-ghost btn-pill btn-sm btn-success waves-effect waves-light";
  a4.onclick=function(){
    changeStatus('Delivered', orderId);
  }
  a4.innerHTML="Delivered";
  d4.appendChild(a2);
  d4.appendChild(a3);
  d4.appendChild(a4);
  d3.appendChild(d4);
  d1.appendChild(d3);
  document.getElementById("accordion").appendChild(d1);
}

function changeStatus(obj, orderId){
  if(obj=="Accepted"){
    document.getElementById(orderId+"statusReject").remove();
  }
  else if(obj=="In Kitchen"){
    document.getElementById(orderId+"status").classList.add('btn-danger');
    document.getElementById(orderId+"kitchen").remove();
  }
  else if(obj=="Out For Delivery"){
    document.getElementById(orderId+"status").classList.remove('btn-danger');
    document.getElementById(orderId+"status").classList.add('btn-warning');
    document.getElementById(orderId+"delivery").remove();
  }
  else if(obj=="Delivered"){
    document.getElementById(orderId+"status").classList.remove('btn-warning');
    document.getElementById(orderId+"status").classList.add('btn-success');
    document.getElementById(orderId+"success").remove();
  }
  document.getElementById(orderId+"status").innerHTML=obj;
  if(obj=="Rejected")
    document.getElementById("o"+orderId).remove();
}

function submitChanges(){
  DATA=JSON.stringify(DATA);
  //console.log(DATA);
  $.ajax({
    type: "GET",
    url: "http://localhost:4040/write/"+DATA,
    data: "",
    success: function(data){
      console.log(data);
      location.reload();
    },
    error: function(data){
      console.log('Nope!');
    }
  });
}
