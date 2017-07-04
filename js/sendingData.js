var cartJSON;
var uid;

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
        if (str.charAt(i) == "=")
        {
          for ( var j=i+1; j<str.length; j++){
            //console.log(str.charAt(j));
            uid = uid + str.charAt(j);
          }
          break;
        }
      }
  //console.log(str);
  //console.log(uid);
}

function finalSend(){
  //location.href="https://2ab7681f.ngrok.io/cart/1234567/replace/"+cartJSON;

  $.ajax({
    type: "GET",
    url: "https://50117a46.ngrok.io/cart/"+uid+"/replace/"+cartJSON,
    data: "",//cartJSON,
    success: function(data){
      //console.log('Success!');
    },
    error: function(data){
      alert('Nope!');
    }
  });
}

function populate(){
  $.ajax({
    type: "GET",
    url: "https://50117a46.ngrok.io/cart/"+uid+"/show",
    /*//
    headers: {'Access-Control-Allow-Origin': '*'},
    crossDomain: true,
    dataType: "jsonp",
    //*/
    success: function(data){
      function toTitleCase(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
      data=toTitleCase(data.replace(/_/g, ' '));
      data=JSON.parse(data);
      //console.log(data);
      for(var key in data){
        //console.log(key);//toTitleCase(key.replace(/_/g, ' ')));
        var dishes=["Pindi Chole", "Murg Kali Mirch", "Paneer Makhanwala", "Paneer Lababdar", "Saagwala Paneer", "Subzi Meloni", "Dal Makhani", "Dal Sath Salam", "Chicken Lababdar", "Chicken Makhanwala", "Mutton Rogan Josh", "Steamed Rice", "Jeera Rice", "Chicken Biryani", "Mutton Biryani",
          "Onion Kulcha", "Wheat Tawa Roti", "Phirni", "Kheer", "B&W Chocolate Cake (Eggless)", "Lassi", "Water", "Dilli Combo (Veg)", "Amritsari Combo (Veg)", "Lucknowi Combo (Veg)", "Dilli Combo (Non Veg)", "Amritsari Combo (Non Veg)", "Kashmiri Combo (Non Veg)", "Dilli Mini Combo (Veg)",
          "Lucknowi Mini Combo (Veg)", "Amritsari Mini Combo (Veg)", "Dal Makhani Mini Combo (Veg)", "Dilli Mini Combo (Non Veg)", "Amritsari Mini Combo (Non Veg)", "Kashmiri Mini Combo (Non Veg)", "Pindi Chole Combo", "Assorted Veg Tikkis", "Paneer Tikka", "Hariyali Chicken Kebab",
          "Malai Chicken Kebab", "Mutton Seekh Kebab", "Paneer Tikka Roll", "Chicken Tikka Roll", "Mutton Seekh Roll"];
        var field=[document.getElementsByName('c1_1')[0], document.getElementsByName('c1_2')[0], document.getElementsByName('c1_3')[0], document.getElementsByName('c1_4')[0], document.getElementsByName('c1_5')[0],
          document.getElementsByName('c1_6')[0], document.getElementsByName('c1_7')[0], document.getElementsByName('c1_8')[0], document.getElementsByName('c1_9')[0], document.getElementsByName('c1_10')[0],
          document.getElementsByName('c1_11')[0], document.getElementsByName('c2_1')[0], document.getElementsByName('c2_2')[0], document.getElementsByName('c2_3')[0], document.getElementsByName('c2_4')[0],
          document.getElementsByName('c3_1')[0], document.getElementsByName('c3_2')[0], document.getElementsByName('c4_1')[0], document.getElementsByName('c4_2')[0], document.getElementsByName('c4_3')[0],
          document.getElementsByName('c5_1')[0], document.getElementsByName('c5_2')[0], document.getElementsByName('c6_1')[0], document.getElementsByName('c6_2')[0], document.getElementsByName('c6_3')[0],
          document.getElementsByName('c6_4')[0], document.getElementsByName('c6_5')[0], document.getElementsByName('c6_6')[0], document.getElementsByName('c7_1')[0], document.getElementsByName('c7_2')[0],
          document.getElementsByName('c7_3')[0], document.getElementsByName('c7_4')[0], document.getElementsByName('c7_5')[0], document.getElementsByName('c7_6')[0], document.getElementsByName('c7_7')[0],
          document.getElementsByName('c7_8')[0], document.getElementsByName('c8_1')[0], document.getElementsByName('c8_2')[0], document.getElementsByName('c8_3')[0], document.getElementsByName('c8_4')[0],
          document.getElementsByName('c8_5')[0], document.getElementsByName('c9_1')[0], document.getElementsByName('c9_2')[0], document.getElementsByName('c9_3')[0]];
        for(var i=0; i<dishes.length; i++){
          if(toTitleCase(key.replace(/_/g, ' '))==(dishes[i])){
            field[i].value=Number(data[key]);
            getData2();
          }
        }
      }
    },
    error: function(data){
      alert("Error!");
    }
  });
}
