var cartJSON;
var uid;

function sender(dish, qty){
  cartJSON={};
  for(var i=0; i<dish.length; i++)
    cartJSON[dish[i].replace(/ /g, '_').toLowerCase()]=qty[i];
  cartJSON=JSON.stringify(cartJSON);
  console.log(cartJSON);
}

function getURL(){
  var str = window.location.href;
  uid="";
  for (var i = 0; i<=str.length; i++){
        //console.log(str.charAt(i));
        if (str.charAt(i) == "="){
          for ( var j=i+1; j<str.length; j++){
            if(str.charAt(j)=="#")
              break;
            uid = uid + str.charAt(j);
          }
          break;
        }
      }
  console.log(str);
  console.log(uid);
}

function finalSend(){
  var i=JSON.stringify(cartJSON);
  i=i.replace(/(())/g, "");
  i=i.replace(/Non Veg/g, "Nonveg");
  i=i.replace(/Veg/g, "Veg");
  $.ajax({
    type: "GET",
    url: redisDb+"/cart/"+uid+"/replace/"+i,
    data: "",
    success: function(data){
      console.log('Success!');
    },
    error: function(data){
      console.log('Nope!');
    }
  });
}

function populate(){
  $.ajax({
    type: "GET",
    url: redisDb+"/cart/"+uid+"/show",
    success: function(data){
      function toTitleCase(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
      data=JSON.stringify(data);
      data=data.replace(/_/g, ' ');
      data=toTitleCase(data);
      data=JSON.parse(data);
      console.log(data);
      data=JSON.parse(data);
      for(var i in data){
        var temp=i;
        if(i.endsWith("Nonveg"))
          temp=i.replace("Nonveg", "(Non Veg)");
        else if(i.endsWith("Veg"))
          temp=i.replace("Veg", "(Veg)");
        else if(i=="B And W Chocolate Cake Eggless")
          temp="B&W Chocolate Cake (Eggless)";
        console.log(i);
        for(var j=0; j<keys.length; j++){
          for(var key in DATA["Courses"][keys[j]]){
            if(temp==key){
              console.log(key);
              var x=document.getElementsByName(key);
              console.log(data[i][1]);
              x[0].value=data[i][1];
              getData2();
            }
          }
        }
      }

    },
    error: function(data){
      console.log(data);
    }
  });
}
