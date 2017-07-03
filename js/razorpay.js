var options = {
    "key": "rzp_test_U7uz5JUH7RdhYd",
    "amount": "2000", // 2000 paise = INR 20
    "name": "Baba da Dhaba",
    "description": "Payment for your food order",
    "image": "",
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Akshay Pant",
        "email": "akshay.pant@fidesgc.com"
    },
    "notes": {
        "address": "114, Cunningham Road"
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new Razorpay(options);

document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
