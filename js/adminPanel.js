var keys = [];
for (var key in DATA["Courses"])
  keys.push(key);

function toTitleCase(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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

function removeD(){
  document.getElementById("remD").innerHTML="";
  for(var i=0; i<keys.length; i++)
    document.getElementById("remD").innerHTML+="<input type=\"radio\" id=\"c"+i+"\" value=\""+keys[i]+"\">"+ keys[i]+"<br>";
    document.getElementById("remD").innerHTML+='<button onclick="removeDi()">Select</button>';
    document.getElementById("remD").innerHTML+='<section id="courseDishes"></section>';
}

function removeDi(){
  document.getElementById("courseDishes").innerHTML="";
  var course, j;
  for(var i=0; i<keys.length; i++){
    if (document.getElementById('c'+i).checked){
      course=document.getElementById('c'+i).value;
      j=i
    }
  }
  //console.log(course);
  //document.getElementById('c'+j).checked = false;
  var keys2 = [];
  for (var key in DATA["Courses"][course]){
    keys2.push(key);
    //document.getElementById("courseDishes").innerHTML+=key+" - "+DATA["Courses"][course][key][0]+" - "+DATA["Courses"][course][key][1]+"<br>";
  }
  for(var i=0; i<keys2.length; i++)
    document.getElementById("courseDishes").innerHTML+="<input type=\"radio\" id=\"d"+i+"\" value=\""+keys2[i]+"\">"+ keys2[i]+" - "+DATA["Courses"][course][keys2[i]][0]+" - "+DATA["Courses"][course][keys2[i]][1]+"<br>";
    document.getElementById("courseDishes").innerHTML+='<button id="rmv">Remove</button>';
    document.getElementById("rmv").addEventListener("click", function(){
      remoD(keys2, course);
    });
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

function addD(){
  document.getElementById("adD").innerHTML='<strong>Dish Name </strong><input id="new_dish" type="text" value=""><br>';
  document.getElementById("adD").innerHTML+='<strong>Dish Price </strong><input id="dish_price" type="number" value=""><br>';
  document.getElementById("adD").innerHTML+="<input type=\"radio\" id=\"veg\" value=\"Veg\">Veg&ensp;";
  document.getElementById("adD").innerHTML+="<input type=\"radio\" id=\"non_veg\" value=\"Non Veg\">Non Veg<br><strong>Belongs to which course?</strong><br>";
  for(var i=0; i<keys.length; i++)
    document.getElementById("adD").innerHTML+="<input type=\"radio\" id=\"c"+i+"\" value=\""+keys[i]+"\">"+ keys[i]+"<br>";
    //add php script here
  document.getElementById("adD").innerHTML+='<form action="/action_page.php"><input type="file" name="pic" accept="image/*"><input type="submit"></form>';
  document.getElementById("adD").innerHTML+='<button onclick="addDi()">Add</button>';
}

function addDi(){
  var course, vg;
  for(var i=0; i<keys.length; i++)
    if (document.getElementById('c'+i).checked)
      course=document.getElementById('c'+i).value;
  if (document.getElementById('veg').checked)
    vg=document.getElementById('veg').value;
  else vg=document.getElementById('non_veg').value;
  DATA["Courses"][course][toTitleCase(document.getElementById('new_dish').value)]=["Rs. "+document.getElementById('dish_price').value, vg];
  alert("Dish added!");
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
