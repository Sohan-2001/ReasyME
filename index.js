document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('previewImage').src = e.target.result;
      document.getElementById('previewImage').style.display = 'block';
      document.getElementById('imageLabel').style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
  
