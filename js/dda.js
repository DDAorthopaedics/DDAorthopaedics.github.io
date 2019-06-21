// Inspired from http://stackoverflow.com/questions/26700803/google-maps-iframe-not-displaying-correctly-with-bootstrap-collapse-panel-collap
$('[data-toggle="tab"]').click('shown', function(e) {
  var mapFrame = $('#map_iframe');
  mapFrame.attr('src', mapFrame.attr('src')+'');
});


$('.nav').stickyTabs();


// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-139436079-2');
