function getURL(){
  var str = window.location.href;
  var uid = "";
  for (var i = 0; i<=str.length; i++){
        //console.log(str.charAt(i));
        if (str.charAt(i) == "?")
        {
          for ( var j = i + 5; j<=(i+19); j++){
            //console.log(str.charAt(j));
            uid = uid + str.charAt(j);
          }
          break;
        }
      }
  console.log(str);
  console.log(uid);
}
