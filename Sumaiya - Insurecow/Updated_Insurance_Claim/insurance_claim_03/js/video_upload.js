function readVideoURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.video-upload-wrap').hide();
            $('.videofile-upload-image').attr('src', e.target.result);
            $('.videofile-upload-content').show();
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload3();
    }
}

function removeVideoUpload() {
    $('.videofile-upload-input').replaceWith($('.videofile-upload-input').clone());
    $('.videofile-upload-content').hide();
    $('.video-upload-wrap').show();
}
$('.video-upload-wrap').bind('dragover', function () {
    $('.video-upload-wrap').addClass('image-dropping');
});
$('.video-upload-wrap').bind('dragleave', function () {
    $('.video-upload-wrap').removeClass('image-dropping');
});


const input = document.getElementById('file-input');
const video = document.getElementById('video');
const videoSource = document.createElement('source');

input.addEventListener('change', function () {
    const files = this.files || [];

    if (!files.length) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        videoSource.setAttribute('src', e.target.result);
        video.appendChild(videoSource);
        video.load();
        video.play();
    };

    reader.onprogress = function (e) {
        console.log('progress: ', Math.round((e.loaded * 100) / e.total));
    };

    reader.readAsDataURL(files[0]);
});