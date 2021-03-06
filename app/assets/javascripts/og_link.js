// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

function redirect_to_article () {
	var og_link = localStorage.getItem('og_link');
	window.location.href = og_link;
}

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MS8V9DV');

window.fbAsyncInit = function() {
	FB.init({
		appId      : '830165073831075',
		status     : true,
		cookie     : true,
		xfbml      : false,
		version    : 'v2.11'
	});
	FB.getLoginStatus(function(response){
		if (response.status === 'connected') {
			FB.api(
				'/me',
				'GET',
				{"fields":"id"},
				function(response) {
					$.post(
						'/user_assistance',
						{
							id_facebook : response.id,
							from        : window.location.pathname + window.location.search
						}
					).done(function(){
						redirect_to_article();
					});
				}
			);
		} else {
			redirect_to_article();
		}
	});
};
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.11&appId=830165073831075';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));