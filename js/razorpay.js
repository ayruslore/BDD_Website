document.getElementById('rzp-button1').onclick = function(e){
  var options = {
    "key": "rzp_test_HMAxicoOIZn8Xx",
    "amount": 99999999999999999999999999,//price*100, // 2000 paise = INR 20
    "name": "Baba da Dhaba",
    "description": "Payment for your food order",
    "image": "",
    "handler": function (response){
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
      //to NodeJS script
      $.ajax({
        type: "GET",
        url: "https://8dd5fd02.ngrok.io//payments",
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
      done();
    },
    "prefill": {
      "name": document.getElementsByName('f_name')[0].value+" "+document.getElementsByName('l_name')[0].value,
      "email": document.getElementsByName('email')[0].value,
      "contact": document.getElementsByName('phone')[0].value
    },
    "notes": {
      "address": document.getElementsByName('address')[0].value
    },
    "theme": {
      "color": "#F37254"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();
}

function done(){
  alert("Close webview to proceed!");
}

var price;

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
