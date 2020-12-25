// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener('load', function(){
			document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
			document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
        });

		function format(command, value) {
			document.execCommand(command, false, value);
		}

		function setUrl() {
			var url = document.getElementById('txtFormatUrl').value;
			var sText = document.getSelection();
			document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
			document.getElementById('txtFormatUrl').value = '';
		}