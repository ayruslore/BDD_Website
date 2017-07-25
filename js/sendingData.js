var cartJSON;
var uid;
var redisDb="http://129.144.182.67:4000/cart/";

function sender(dish, qty){
  cartJSON={};
  for(var i=0; i<dish.length; i++)
    cartJSON[dish[i].replace(/ /g, '_').toLowerCase()]=qty[i];
  cartJSON=JSON.stringify(cartJSON);
  //console.log(cartJSON);
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
  //console.log(str);
  //console.log(uid);
}

function finalSend(){
  $.ajax({
    type: "GET",
    url: redisDb+uid+"/replace/"+cartJSON,
    data: "",
    success: function(data){
      //console.log('Success!');
    },
    error: function(data){
      //console.log('Nope!');
    }
  });
}

function populate(){
  $.ajax({
    type: "GET",
    url: redisDb+uid+"/show",
    success: function(data){
      function toTitleCase(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
      data=JSON.stringify(data);
      data=data.replace('_', ' ');
      data=toTitleCase(data);
      data=JSON.parse(data);
      //console.log(data);
      for(var i in data){
        //console.log(i);
        for(var j=0; j<keys.length; j++){
          for(var key in DATA["Courses"][keys[j]]){
            if(i==key){
              //console.log(key);
              var x=document.getElementsByName(key);
              x[0].value=data[i];
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
