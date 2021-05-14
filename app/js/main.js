$(function () {
    $('.gallery__popup').magnificPopup({
		delegate: '.popup__link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		// mainClass: 'mfp-img-mobile',
		gallery: {
            enabled: true,
            tCounter: '%curr% из %total%',
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
    });
    
    $('.more-goods__popup').magnificPopup({
		delegate: '.popup__link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		// mainClass: 'mfp-img-mobile',
		gallery: {
            enabled: true,
            tCounter: '%curr% из %total%',
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});



	$('.btn__order-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		closeBtnInside:true,
		
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

