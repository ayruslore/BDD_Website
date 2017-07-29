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
    },/*
    "notes": {
      "address": document.getElementsByName('address')[0].value
    },*/
    "theme": {
      "color": "#77cde3"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}

function done(){
  nameUser=document.getElementsByName('name')[0].value;
  phoneUser=document.getElementsByName('phone')[0].value;
  emailUser=document.getElementsByName('email')[0].value;
  console.log("Latitude: "+lat+"\nLongitude: "+long);
  if(nameUser!="" & phoneUser!="" & emailUser!="")
    razorpay();
  else
    alert("Fill in the details to proceed.");
}

var price, nameUser, phoneUser, emailUser;

function amount(){
  $.ajax({
    type: "GET",
    url: "http://129.144.182.67:4000/get_cart_price/"+uid,
    success: function(data){
      data=JSON.stringify(data);
      data=JSON.parse(data);
      price=data["total"];
      //console.log(price);
      document.getElementById('amt').innerHTML="&#8377;"+price;
    },
    error: function(data){
      //console.log('Nope!');
    }
  });
}
