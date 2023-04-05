function init(){
  
  var button = document.getElementById('entrybutton');
  
  function alertText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Daniel Krieglstein: " + textbox.value);
  }
 
  button.addEventListener('click', alertText);

}

window.addEventListener('load', init);