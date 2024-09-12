
function handleFileUpload() {
  const fileInput = document.getElementById('audio-upload');
  const file = fileInput.files[0];
  const audioPreview = document.getElementById('audio-preview');

  if (file) {
    const audioURL = URL.createObjectURL(file);
    audioPreview.innerHTML = `
              <p>Selected file: ${file.name}</p>
              <audio controls>
                  <source src="${audioURL}" type="${file.type}">
                  Your browser does not support the audio element.
              </audio>
          `;
  } else {
    audioPreview.innerHTML = '';
  }
}

document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const fileInput = document.getElementById('audio-upload');
  const file = fileInput.files[0];

  if (file) {
    alert(`File "${file.name}" ready to be uploaded.`);
    // You can handle the actual upload here with an API call if needed
  } else {
    alert('Please choose an audio file.');
  }
});
