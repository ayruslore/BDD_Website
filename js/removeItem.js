function resetValue(){

}
/*
$(document).on("click", "item-remove", function(e){
  var $button=$(this);
  $button.unwrap();//parents('div').remove();
});
*/
function removeItem(obj){
  obj.parentNode.parentNode.removeChild(obj.parentNode);
  v=(obj.parentNode.childNodes[1].childNodes[2].childNodes[1].name);//((' ' + obj.parentElement.className + ' ').indexOf("quantity") > -1);//(obj.parentElement);//find('.quantity')
  syncValues(v, 0);
}
