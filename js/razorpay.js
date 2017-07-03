document.getElementById('rzp-button1').onclick = function(e){
  var options = {
    "key": "rzp_test_U7uz5JUH7RdhYd",
    "amount": Number(sessionStorage.getItem('total').slice(1))*100, // 2000 paise = INR 20
    "name": "Baba da Dhaba",
    "description": "Payment for your food order",
    "image": "",
    "handler": function (response){
      alert(response.razorpay_payment_id);
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
