var cartJSON;

function sender(dish, qty){
  cartJSON={};
  for(var i=0; i<dish.length; i++)
    cartJSON[dish[i].replace(/ /g, '_').toLowerCase()]=qty[i];
  cartJSON=JSON.stringify(cartJSON);
  //console.log(cartJSON);
}

function finalSend(){
  //location.href="https://2ab7681f.ngrok.io/"+"cart/1234567/replace/"+cartJSON;
}
