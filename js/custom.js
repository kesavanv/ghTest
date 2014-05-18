$(function() {
    $(".secondaryModalTrigger").click(function(e) {
    	var currentModal = $(e.target).data('self');
    	$(currentModal).modal('hide');
    });
});