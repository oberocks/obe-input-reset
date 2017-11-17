/*!
 * OBE Input Reset v1.1.1
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
			outsidePadding: "0.5rem",  // Expects: string of any valid CSS font-size unit values (Default = "0.5rem")
			clickWidth: "30px"  // Expects: string of any valid CSS width unit values (Default = "30px")
	
		}, options );


		// Construct and add Classes/Styles to Markup Elements in Vanilla JS
		var wrapper = document.createElement("div");
			wrapper.style.textAlign = settings.alignment;
			// add a class name to the wrapper for JS/CSS use
			wrapper.className = "obe-input-reset-wrapper";
		
		var span = document.createElement("span");
			span.style.fontSize = settings.fontSize;
			span.style.top = settings.positionTop;
			span.style.width = settings.clickWidth;
			span.style.textAlign = settings.alignment;
			// Conditionally set the outside padding to the correct side depending on alignment
			if (settings.alignment === "right") {
				span.style.right = settings.outsidePadding;
			} else if (settings.alignment === "left") {
				span.style.left = settings.outsidePadding;
			}
			// add a class name to the span for JS/CSS use
			span.className = "obe-input-reset";


		// If iconMode is off
		if (settings.iconMode === false) {

			// Generate text content
			var content = document.createTextNode(settings.text);
			
			// If colorClass is defined
			if (settings.colorClass.length > 0) {
				// Add the class
				$(span).addClass(settings.colorClass);
			} else {
				// Or set the color 
				$(span).css('color', settings.color);
			}
		
		}
		
		// If iconMode is on
		if (settings.iconMode === true)  {
			
			// And if iconClasses is defined
			if (settings.iconClasses.length > 0) {

				// Generate text content
				var content = document.createElement("i");
				content.className = settings.iconClasses;
				
				// If colorClass is defined
				if (settings.colorClass.length > 0) {
					// Add the class
					$(content).addClass(settings.colorClass);
				} else {
					// Or set the color
					$(content).css('color', settings.color);
				}
	
			} else {
				
				// Classes are missing, so fallback to (settings.iconMode === false) output 
				
				// Generate text content
				var content = document.createTextNode(settings.text);
			
				// If colorClass is defined
				if (settings.colorClass.length > 0) {
					// Add the class
					$(span).addClass(settings.colorClass);
				} else {
					// Or set the color 
					$(span).css('color', settings.color);
				}
			
			}
	
		}


		// Create click listener for elements created by this script
		$(span).on( "click", function() {
			$(this).parent().prev().val('').focus();
		});


		// Nest Elements and prepare for output
		span.appendChild(content);
		wrapper.appendChild(span);


		// Return output
		return $(wrapper).insertAfter(this);

	};

}( jQuery ));