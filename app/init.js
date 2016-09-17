$(document).ready(function(){
	var message = ['Welcome to NA.', 'Hello,我是大家的好朋友小N.'];

	var msg_deliver = setInterval(function(){ 
		msg = message.pop();
		if(msg === undefined){
			clearInterval(msg_deliver);
		}
		Materialize.toast(msg, 5000); // 4000 is the duration of the toast
		console.log('ok')

	}, 2000);

});


$('.carousel.carousel-slider').carousel({full_width: true});

$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50, html: true});
});