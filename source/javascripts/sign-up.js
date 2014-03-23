jQuery(function($) {
    $('#signup').on('submit', function(event) {
        var $form = $(this);
        var $target = $('#modal-body');
 
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(data, status) {
                obj = jQuery.parseJSON(data);
                $target.html("<p>Your API key: "+ obj.publishable_key + "</p>");
                $('#signupModal').modal()
            }
        });
 
        event.preventDefault();
    });
});
