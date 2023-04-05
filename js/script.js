function init(){
  function alertText(){
    alert(textbox.getElementById('textoutput').innerHTML);
    textoutput.innerHTML = textbox.getElementById('textoutput').innerHTML;
  }

  var textbox = document.getElementById('entryinput');
  var textoutput = document.getElementById('textoutput')
  var button = document.getElementById('entrybutton');

  button.addEventListener('click', alertText);

}


window.addEventListener('load', init);