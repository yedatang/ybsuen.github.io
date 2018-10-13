function compute_x_plus_y(x,y) { 
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x + y;
  return z;
}

function ask_xy() { 
  var x = prompt("Enter x value");
  var y = prompt("Enter y value");
  var z = compute_x_plus_y(x,y);
  var x = document.getElementById("demo"); 
  x.style.fontSize = "25px"; 
  x.style.color = "red"; 
  document.getElementById("demo").innerHTML = "The answer is " + z; 
}

function show_topic() { 
  var x = document.getElementById("welcome"); 
  x.style.fontSize = "25px"; 
  x.style.color = "red"; 
} 
