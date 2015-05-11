$(document).ready(function(){

	$('.bokahlekkur').click(function(event){
		/*
		 * Þegar notandi smellir á bókunarhlekk hverfur hann og bókunarform birtist á góðum stað.
		 */

		// Komum í veg fyrir að hlekkurinn virki sem hlekkur:
		event.preventDefault();

		// Felum hlekkinn sem kallar upp bókunarformið
		$(this).parents('table').hide();
		// form_markup verður að vera þegar skilgreint einhverstaðar...
		//$(this).after(form_markup);
	//	$('#bokunarform').html(form_markup);
		$(this).parents('table').after(form_markup)
		// Setjum "primary key" fyrir tímann í #id_timi til að það fari rétt með forminu:
		console.log($(this))
		console.log($(this).data('timalykill'))
		$('#id_timi').val($(this).data('timalykill'));
	})

	function bokunarform_hreinsad(hnappur){
		/*
		 * Tekur hnapp í bókunarforminu sem "argument", sýnir öll systkini
		 * formsins (vegna þess að við felum dagatalið þegar við köllum fram
		 * formið) og tekur út formið.
		 */
		$(hnappur).parent().siblings().show();
		$(hnappur).parent().remove();
	}

	$(document).on('click', '#hreinsihnappur', function(event){
		/*
		 * Þegar notandi hreinsar bókunarformið á það að hverfa og bókunarhlekkurinn að birtast aftur.
		 */
		bokunarform_hreinsad($(this));
	})


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

	$(document).on('submit', 'form.bokun', function(event){
		/*
		 * Hér sendum við bókun.
		 */

		// Komum í veg fyrir að formið geri það sem það á sjálfgefið að gera:
		event.preventDefault();

		// Sendum núna bókunina:
		// Byggir á: https://realpython.com/blog/python/django-and-ajax-form-submissions/
		$.ajax({
			url : "boka_tima/", // the endpoint
			type : "POST", // http method

			// data sent with the post request
			data : { gestur:   $('#id_gestur').val(),
						bekkur:   $('#id_bekkur').val(),
						timi:     $('#id_timi').val(),
						seroskir: $('#id_seroskir').val()
			},
			dataType: "json",

			// handle a successful response
			success : function(json) {
					console.log("success"); // another sanity check
					console.log(json); // log the returned json to the console
					console.log('json.timi_pk: '+json.timi_pk)
					// Breytum forminu og hlekknum í texta sem sýnir að tíminn er bókaður.
					$('#'+json.timi_pk+' .stada').html('Bókun meðtekin').css('background', 'orange');
					// Tökum formið út.
					bokunarform_hreinsad('#hreinsihnappur')
					// Breytum deginum í frátekinn:
					console.log('json.timi string:'+'div[data-timalykill="'+json.timi_pk+'"]')
					console.log('json.timi obj:'+ $('div[data-timalykill="'+json.timi_pk+'"]'))
					//console.log('json.timi html:'+$('div[data-timalykill="'+json.timi_pk+'"]').html())
					//console.log('json.timi a html:'+$('div[data-timalykill="'+json.timi_pk+'"] a').html())
					//$('#'+json.timi_pk).toggleClass('bokahlekkur bokadurtimi');
					console.log('CLASSes')
					console.log($('[data-timalykill="'+json.timi_pk+'"]').attr('class'));
					$('[data-timalykill="'+json.timi_pk+'"]').toggleClass('bokahlekkur nybokun');
					console.log($('[data-timalykill="'+json.timi_pk+'"]').attr('class'));
					console.log('HTML')
					console.log('json.timi html:'+$('[data-timalykill="'+json.timi_pk+'"]').html())
																			console.log('json.timi a html:'+$('div[data-timalykill="'+json.timi_pk+'"] a').html())
															$('[data-timalykill="'+json.timi_pk+'"]').html($('[data-timalykill="'+json.timi_pk+'"] a').html())
					console.log('json.timi html:'+$('[data-timalykill="'+json.timi_pk+'"]').html())
			},

			// handle a non-successful response
			error : function(xhr,errmsg,err) {
					console.log('ERROR');
					//console.log(this);
					//console.log($(this).id());
					$('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
						" <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
					console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
			}
		});
	})

})
