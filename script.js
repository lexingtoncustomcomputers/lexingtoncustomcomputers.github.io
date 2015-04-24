function getHead () {
	var str =
	//jQuery
	'<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>' +
	//Bootstrap
	'<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">' +
	'<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>' +
	//Font from Google
	'<link href="http://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet" type="text/css">' +
	//Stylesheet
	'<link href="/style.css" rel="stylesheet">';
	document.write(str);
}

function getBody () {
	var str = '' +
	'<div class="navbar navbar-inverse navbar-static-top" style="font-size: 18px;">' +
		'<div class="container">' +
			'<a href="http://nostresswellcleanupthemess.weebly.com/" class="navbar-brand">' +
				'Lexington Custom Computers' +
			'</a>' +

			'<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
				'<span class="icon-bar"></span>' +
			'</button>' +

			'<div class="collapse navbar-collapse navHeaderCollapse">' +
				'<ul class="nav navbar-nav navbar-right">' +
					'<li>' +
						'<a href="/">Home</a>' +
					'</li>'+
					'<li>' +
						'<a href="/builds.html">View Our Builds</a>' +
					'</li>' +
					'<li>' +
						'<a href="javascript:void(0);" data-target="#contact-us-modal" data-toggle="modal">Contact Us</a>' +
					'</li>' +
					'<li>' +
						'<a href="javascript:void(0);" data-target="#about-modal" data-toggle="modal">About Us</a>' +
					'</li>' +
					'<li>' +
						'' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</div>' +
	'</div>' + 

	'<div class="modal fade" id="about-modal" role="dialog">' +
		'<div class="modal-dialog modal-lg">' +
			'<div class="modal-content">' +
				'<div class="modal-header">' +
					'<h2>' +
						'About Lexington Custom Computers' +
					'</h2>' +
				'</div>' +
				'<div class="modal-body" id="modal-body">' +
					'<h4>' +
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, leo ut venenatis laoreet, massa erat auctor augue, pharetra sagittis risus lectus sit amet nulla. Aliquam porttitor, dolor eu suscipit congue, lectus magna semper tortor, vel porttitor sem nisi eget sem. Fusce est erat, blandit id augue vel, molestie tristique quam. Proin nec auctor augue. Suspendisse vel felis molestie, laoreet ipsum quis, consequat odio. Quisque eu fringilla nulla. Praesent eu sagittis nunc. Vivamus risus purus, lacinia congue porttitor vel, vestibulum at lorem. Vivamus sodales bibendum nulla at posuere. In orci dui, fermentum eu felis vel, consequat pellentesque quam. Nulla eu nunc finibus, ultrices ipsum eget, pretium purus. Vivamus vel lectus placerat, vehicula orci vel, efficitur metus. Aliquam volutpat efficitur dolor sit amet euismod.' +
					'</h4>' +
				'</div>' +
				'<div class="modal-footer">' +
					'<button class="btn btn-default" data-dismiss="modal">Close</button>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>' +

	'<div class="modal fade" id="contact-us-modal" role="dialog">' +
		'<div class="modal-dialog modal-lg">' +
			'<div class="modal-content">' +
				'<div class="modal-header">' +
					'<h2>' +
						'Contact Lexington Custom Computers' +
					'</h2>' +
				'</div>' +
				'<div class="modal-body" id="modal-body">' +
					'<h4>' +
						'Duis sed iaculis metus, ut placerat diam. Nunc cursus augue augue, eu dapibus enim laoreet vitae. Phasellus sit amet velit suscipit, malesuada ipsum a, varius nisi. Nam rhoncus sit amet erat ac tincidunt. Phasellus augue neque, ullamcorper sed felis in, euismod elementum sapien. Sed ligula sapien, gravida id orci eu, semper scelerisque tellus. Fusce lacus dolor, tempor quis rhoncus sed, rhoncus non est. Maecenas condimentum interdum tellus in elementum. Morbi massa libero, sodales ut magna a, elementum vestibulum leo. Cras venenatis turpis mauris, in interdum odio pellentesque congue. Proin imperdiet elit id faucibus mollis. Sed nec massa non ipsum pellentesque varius sit amet sed ex. Aliquam sodales condimentum urna. Vestibulum eu nibh ullamcorper, tempus ante non, gravida lacus. Ut iaculis mi sed odio lacinia, at molestie nibh rutrum.' +
					'</h4>' +
				'</div>' +
				'<div class="modal-footer">' +
					'<button class="btn btn-default" data-dismiss="modal">Close</button>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';
	document.write(str);
}