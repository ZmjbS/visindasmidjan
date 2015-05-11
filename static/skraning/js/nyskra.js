$(document).ready(function(){

	/*
	 * Hér er CSRF token-inn fenginn úr köku (jquery.cookie plugin-sins er
	 * krafist), og AJAX sending jQuery sett upp til að nota hana.
	 *  https://docs.djangoproject.com/en/1.8/ref/csrf/#how-to-use-it
	 */
	var csrftoken = $.cookie('csrftoken');
	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
					xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});

	$(document).on('click', 'table.month tbody tr td', function(event){
		/*
		 * Einfalt 'toggle' til að merkja hvaða dagsetningar eiga að fara í bulk-skráningu.
		 */
		$(this).toggleClass('valid')
	})

	$(document).on('submit', 'form.nyskra', function(event){
		/*
		 * Skráir nýja tíma
		 */

		// Komum í veg fyrir að formið geri það sem það á sjálfgefið að gera:
		event.preventDefault();

		dagsetningar = []
		$('.valid').each(function(index, element){
			//console.log(index)
			//console.log($(element).text() + ' ' + $(element).closest('tbody').find('.month').text())
			dagsetningar.push($(element).text() + ' ' + $(element).closest('tbody').find('.month').text())
		})
		console.log(dagsetningar)
		// Skráum dagsetningarnar í dagsetningar.
		// Byggir á: https://realpython.com/blog/python/django-and-ajax-form-submissions/
		$.ajax({
			url : "skra_tima/", // the endpoint
			type : "POST", // http method

			// data sent with the post request
			data : { dagsetningar: dagsetningar,
						hefst_timi:   $('#id_hefst').val(),
						lengd:        $('#id_lengd').val(),
						starfsmenn:   $('#id_starfsmenn').val(),
			},
			dataType: "json",

			// handle a successful response
			success : function(json) {
					console.log(json); // log the returned json to the console
					console.log(json.timi_pk)
					console.log("success"); // another sanity check
					// Breytum forminu og hlekknum í texta sem sýnir að tíminn er bókaður.
					$('#'+json.timi_pk+' .stada').html('Bókun meðtekin').css('background', 'orange');
			},

			// handle a non-successful response
			error : function(xhr,errmsg,err) {
					//console.log(this);
					//console.log($(this).id());
					console.log('ERROR');
					$('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
						" <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
					console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
			}
		});
	})

})
