function init(){
  
  var button = document.getElementById('entrybutton');
  
  function alertText(){
    alert("TEST");
    textbox.getElementById('textoutput').innerHTML = textbox.value;
  }

  var textbox = document.getElementById('entryinput');
  var textoutput = document.getElementById('textoutput')
  

  button.addEventListener('click', alertText);

}


window.addEventListener('load', init);