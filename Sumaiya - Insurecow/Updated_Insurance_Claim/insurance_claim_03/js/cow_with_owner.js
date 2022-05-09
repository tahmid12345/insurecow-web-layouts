function readURL2(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image2-upload-wrap').hide();
  
        $('.file2-upload-image').attr('src', e.target.result);
        $('.file2-upload-content').show();
  
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload2();
    }
  }
  
  function removeUpload2() {
    $('.file2-upload-input').replaceWith($('.file2-upload-input').clone());
    $('.file2-upload-content').hide();
    $('.image2-upload-wrap').show();
  }
  $('.image2-upload-wrap').bind('dragover', function () {
          $('.image2-upload-wrap').addClass('image-dropping');
      });
      $('.image2-upload-wrap').bind('dragleave', function () {
          $('.image2-upload-wrap').removeClass('image-dropping');
  });
  