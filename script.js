$(document).ready(function() {
    // Open Button
    $('#openButton').click(function() {
        $('#fileInput').click();
    });

    $('#fileInput').change(function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            $('#editor').val(event.target.result);
        };
        reader.readAsText(file);
    });

    // Save Button
    $('#saveButton').click(function() {
        var content = $('#editor').val();
        var blob = new Blob([content], { type: 'text/plain' });
        var anchor = document.createElement('a');
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = 'saved.txt';
        anchor.click();
    });
});

