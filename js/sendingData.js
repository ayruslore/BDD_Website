var cartJSON;

function sender(dish, price, qty){
  cartJSON='{"cart:"[';
  for(var i=0; i<dish.length; i++){
    cartJSON+='{"dish":"'+dish[i]+'", "price":"'+price[i]+'", "quantity":"'+qty[i]+'"}';
    if(i!=dish.length-1) cartJSON+=',';
  }
  cartJSON+=']}';
  //var cart=JSON.parse(cartJSON);
  //var cart=cartJSON;
  console.log(cartJSON);
}

function finalSend(){
  location.href="https://9c635be9.ngrok.io/"+"?token=websitesubscriptions"+"&payload="+cartJSON;
  console.log("TMKC");
}
