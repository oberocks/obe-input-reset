# OBE Input Reset v1.1.0
A lightweight and easy to customize jQuery plugin to add a clickable character to input elements, with click functionality to clear the input value, and then focus the input.
 
 
# Dependencies
This plugin relies on jQuery. Here's a jQuery CDN link (to include before the obe-input-reset.jQuery.js file) for good measure:
```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
```
 
 
# Installation
**STEP 1:** Include the obe-input-reset.jQuery.js file (generally done just before the closing ```</body>``` tag of your page):
```html
<script src="js/obe-input-reset.jQuery.js"></script>
```
**STEP 2:** Include the obe-input-reset.css file in the ```<head>``` tag of your page:
```html
<link href="css/obe-input-reset.css" rel="stylesheet">
```
**STEP 3:** Include an HTML input element on your page.
```html
<input type="text" name="example" />
```
 
 
# Initialize Plugin
Now it's time to initialize the plugin!
```javascript
$('input[name="example"]').obeInputReset();
```
 
 
# Plugin Options
This plugin was designed to be bare-bones, so you can throw a variety of content at it. There are a handful of options currently baked-in. Here's an example of initializing the plugin with all of the default options for your reference:
```javascript
$('input[name="example"]').obeInputReset({
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
});
```

You may also use HTML entity characters (depending on your server setup being able to handle UTF-8 characters):
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "×",  // Expects: string (Default = "X")
	color: "red"  // Expects: string of any valid CSS color declaration (Default = "red")
});
```

As an alternative to using an color code, you may use the optional ```colorClass``` option to add color to your character:
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "×",  // Expects: string (Default = "X")
	colorClass: "text-danger"  // Expects: string of any valid CSS class you have on the page (Default = "")
});
```

If you have icon fonts available on your site, you can leverage your available font classes (and color classes) to use icons as your OBE Input Reset character. This is done by setting the option ```iconMode``` to ```true```, and including the necessary icon classes to specify the icon with the ```iconClasses``` option. This example uses the [FontAwesome Library](http://fontawesome.io/) and [Bootstrap](https://getbootstrap.com/) classes:
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: true,  // Expects: true | false (Default = "false")
	iconClasses: "fa fa-remove text-danger"  // Expects: string of icon classes (Default = "")
});
```

And finally, here's another icon font example (using [Themify.me](http://themify.me/themify-icons) icons) that needed some small sizing and positioning tweaks:
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: true,  // Expects: true | false (Default = "false")
	iconClasses: "ti-close",  // Expects: string of icon classes (Default = "")
	colorClass: "text-danger",  // Expects: string of any valid CSS class you have on the page (Default = "")
	alignment: "right",  // Expects: left | right (Default = "right")
	fontSize: "1.25rem",  // Expects: string of any valid CSS size values (Default = "1.5rem")
	positionTop: "-2rem",  // Expects: string of any valid CSS font-size unit values (Default = "-2.3rem")
	outsidePadding: "0.5rem"  // Expects: string of any valid CSS font-size unit values (Default = "0.5rem")
});
```
