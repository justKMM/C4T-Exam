function CopyFunction() 
{
  var copyText = document.getElementById("input");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  document.execCommand("copy");

  alert("Copied the text");
  }
  function ClearFunction() 
  {
    document.getElementById('input').value = '';
  }

function count_word( val ){
    var wom = val.match(/\S+/g);
    return {
        words : wom ? wom.length : 0
    };
}

var textcontent = document.getElementById("input");
var showWordCount   = document.getElementById("count");
textcontent.addEventListener("input", function(){
var v = count_word( this.value );
showWordCount.innerHTML = (
      "<br> "+ v.words + " Words"
  );
}, false);

function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("count").innerHTML = lng + " Characters";
}