/*!
 * OBE Input Reset v1.1.0
 * A lightweight and easy to customize jQuery plugin to add a clickable character to input elements
 * with click functionality to clear the input value, and focus the input.
 *
 * Licensed GPLv3 for open source use
 * Copyright (C) Matt McT Designs 2017
 * 
*/

(function ( $ ) {

	$.fn.obeInputReset = function( options ) {

		// Set Default Options
		// (and override with user options)
		var settings = $.extend({

			// Default options
			iconMode: false,  // Expects: true | false (Default = "false")
			iconClasses: "",  // Expects: string of icon classes (Default = "")
			text: "X",  // Expects: string (Default = "X")
			color: "red",  // Expects: string of any valid CSS color declaration (Default = "red")
			colorClass: "",  // Expects: string of any valid CSS class you have on the page (Default = "")
			alignment: "right",  // Expects: left | right (Default = "right")
			fontSize: "1.5rem",  // Expects: string of any valid CSS size values (Default = "1.5rem")
			positionTop: "-2.3rem",  // Expects: string of any valid CSS font-size unit values (Default = "-2.3rem")
			outsidePadding: "0.5rem"  // Expects: string of any valid CSS font-size unit values (Default = "0.5rem")
	
		}, options );


		// Construct and add Classes/Styles to Markup Elements in Vanilla JS
		var wrapper = document.createElement("div");
			wrapper.style.textAlign = settings.alignment;
			// add a class name to the wrapper for JS/CSS functionality
			wrapper.className = "obe-input-reset-wrapper";
		
		var span = document.createElement("span");
			span.style.fontSize = settings.fontSize;
			span.style.top = settings.positionTop;
			if (settings.alignment === "right") {
				span.style.right = settings.outsidePadding;
			} else if (settings.alignment === "left") {
				span.style.left = settings.outsidePadding;
			}
			// add a class name to the span for JS/CSS functionality
			span.className = "obe-input-reset";


		if (settings.iconMode === false) {

			var content = document.createTextNode(settings.text);
			
			if (settings.colorClass.length > 0) {
				$(span).addClass(settings.colorClass);
			} else {
				$(span).css('color', settings.color);
			}

		} else if (settings.iconMode === true)  {

			if (settings.iconClasses.length > 0) {

				var content = document.createElement("i");
				content.className = settings.iconClasses;
				
				if (settings.colorClass.length > 0) {
					$(content).addClass(settings.colorClass);
				} else {
					$(content).css('color', settings.color);
				}
	
			}
	
		}



		// Create click listener for elements created by this script
		$("body").on( "click", ".obe-input-reset", function() {

			$(this).parent().prev().val('').focus();

		});


		// Nest Elements and prepare for output
		span.appendChild(content);
		wrapper.appendChild(span);


		// Return output
		return $(wrapper).insertAfter(this);

	};

}( jQuery ));
