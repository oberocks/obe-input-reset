/*!
 * OBE Input Reset v1.0.0
 * A lightweight and customizable jQuery plugin to add a clickable character to input elements
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
			iconClasses: "fa fa-remove",  // Expects: string of icon classes (Default = "fa fa-remove")
			text: "X"  // Expects: string (Default = "X")
			
        }, options );
        
        
        // Construct Markup Elements
        var wrapper = document.createElement("div");
        // add a class name to the wrapper for JS/CSS functionality
		wrapper.className = "obe-input-reset-wrapper";
        var span = document.createElement("span");
        // add a class name to the span for JS/CSS functionality
		span.className = "obe-input-reset";
        
        
        if (settings.iconMode === false) {
        	
        	var content = document.createTextNode(settings.text);
        	
        } else if (settings.iconMode === true)  {
        	
        	if (settings.iconClasses.length > 0) {
        		
        		var content = document.createElement("i");
        		content.className = settings.iconClasses;
        			
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