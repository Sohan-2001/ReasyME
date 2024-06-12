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
  
  function printSpecificElement() {
    document.getElementById('middle').style.position = 'fixed';
    var printContent = document.getElementById('PrintId').innerHTML;
    var originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    document.getElementById('middle').style.position = 'relative';
}
