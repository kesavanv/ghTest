$(function() {
    $(".secondaryModalTrigger").click(function(e) {
		var currentModal = $(e.target).data('self');
		$(currentModal).modal('hide');
    });

    $('.modal').on('show.bs.modal', function (e) {
	  	$('.carousel').carousel({
			interval: 2000
		});
	});

    function initMap() {
      var singapore = new google.maps.LatLng(1.336445,103.700715);
      var mapOptions = {
        zoom: 17,
        center: singapore
      };

      var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

      var marker = new google.maps.Marker({
          position: singapore,
          map: map,
          title: 'GTEC - Singapore'
      });
    }


  	google.maps.event.addDomListener(window, 'load', initMap);
});