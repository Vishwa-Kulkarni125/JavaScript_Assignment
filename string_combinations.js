function substringDemo(){
  var str = document.getElementById("strgen").value;
  //document.getElementById("demo").innerHTML = str;
  var n = str.length;
  for (var len = 1; len <= n; len++) { 
      // Pick ending point
      for (var i = 0; i <= n - len; i++) 
      {  
        // Print characters from current
        // starting point to current ending
        // point. 
        var j = i + len - 1;		 
        for (var k = i; k <= j; k++) 
                document.getElementById("demo").innerHTML += str[k];

        document.getElementById("demo").innerHTML += '<br>';
      }
    }
}
