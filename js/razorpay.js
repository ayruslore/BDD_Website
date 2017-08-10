function done(){
  function getlength(number){
    return number.toString().length;
  }
  nameUser=document.getElementsByName('name')[0].value;
  phoneUser=Number(document.getElementsByName('phone')[0].value);
  addUser=document.getElementsByName('address')[0].value;
  //console.log("Latitude: "+lat+"\nLongitude: "+long);
  if(nameUser=="" | addUser=="" | phoneUser=="")
    alert("Fill in the details to proceed.");
  else if(getlength(phoneUser)!=10){
    alert("Invald phone number!");
  }
  else{
    if(nameUser!="" & addUser!=""){
      var userData={
        "name":nameUser,
        "number":phoneUser,
        "address":addUser
      };
      userData=JSON.stringify(userData);
      alert("Close the webview to proceed! You'll receive a confirmation message soon.");
      document.getElementsByTagName("BODY")[0].style.display="none";
      $.ajax({
        type: "GET",
        url: "https://babadadhaba1-a432393.apaas.us2.oraclecloud.com/confirm",
        data: {
          'Id': uid
        },
        success: function(data){
          console.log(data);
        },
        error: function(data){
          console.log('Nope!');
        }
      });
      $.ajax({
        type: "GET",
        url: "http://129.144.182.67:4000/set_confirmation/"+uid+"/"+userData,
        success: function(data){
          console.log('Success!');
        },
        error: function(data){
          console.log('Nope!');
        }
      });
    }
  }

}

var price, nameUser, phoneUser, addUser;

function amount(){
  var adrs;
  $.ajax({
    type: "GET",
    url: "http://129.144.182.67:4000/get_location_total/"+uid,
    success: function(data){
      data=JSON.stringify(data);
      data=JSON.parse(data);
      price=data["total"];
      adrs=data["address"];
      console.log(price+" "+adrs);
      document.getElementById('amt').innerHTML="&#8377;"+price;
      document.getElementsByName('address')[0].value=adrs;
    },
    error: function(data){
      console.log('Nope!');
    }
  });
}
/*
function razorpay(){
  var options = {
    "key": "rzp_test_HMAxicoOIZn8Xx",
    "amount": price*100, // 2000 paise = INR 20
    "name": "Baba da Dhaba",
    "description": "Payment for your food order",
    "image": "",
    "handler": function (response){
      //console.log(response);
      //save payment id
      $.ajax({
        type: "GET",
        url: "http://129.144.182.67:4000/"+uid+"/set_payment_key/"+response.razorpay_payment_id,
        success: function(data){
          //console.log('Success!');
        },
        error: function(data){
          //console.log('Nope!');
        }
      });
      //alert(response.razorpay_payment_id);
      //save address
      $.ajax({
        type: "GET",
        url: "http://129.144.182.67:4000/"+uid+"/set_address/payment/"+lat+","+long,
        success: function(data){
          //console.log('Success!');
        },
        error: function(data){
          //console.log('Nope!');
        }
      });
      //to NodeJS script
      $.ajax({
        type: "GET",
        url: "https://8dd5fd02.ngrok.io/payments",
        data: {
          'key': response.razorpay_payment_id,
          'Id': uid
        },
        success: function(data){
          //console.log(data);
        },
        error: function(data){
          //console.log('Nope!');
        }
      });
      alert("Close webview to proceed!");
    },
    "prefill": {
      "name": nameUser,
      "email": emailUser,
      "contact": phoneUser
    },
    "notes": {
      "address": document.getElementsByName('address')[0].value
    },
    "theme": {
      "color": "#77cde3"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}
*/
