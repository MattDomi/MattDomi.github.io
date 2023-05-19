  function alertFunction() {

    var textArea = document.getElementById('myTextArea');
    alert("Hello World!");

  }
  
  function makeTextBigger() {

    var textArea = document.getElementById('myTextArea');
    textArea.style.fontSize = "24px";

  }

  function changeStyle() {

    var textArea = document.getElementById('myTextArea');
    var fancyRadio = document.getElementById('fancyRadio');
    
    if (fancyRadio.checked) {
      textArea.style.fontWeight = 'bold';
      textArea.style.color = 'blue';
      textArea.style.textDecoration = 'underline';
    } else {
      textArea.style.fontWeight = 'normal';
      textArea.style.color = '';
      textArea.style.textDecoration = '';
    }
  }

  document.getElementById("mooButton").onclick = function() {
    var textArea = document.getElementById('myTextArea');
    var text = textArea.value;
    var sentences = text.split('. ');
    var result = '';
  
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(' ');
  
      for (var j = 0; j < words.length; j++) {
        if (j === words.length - 1) {
          words[j] = words[j].toUpperCase() + '-Moo';
        } else {
          words[j] = words[j].toUpperCase();
        }
      }
  
      result += words.join(' ') + '. ';
    }
  
    textArea.value = result.trim();
  };