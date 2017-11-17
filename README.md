# OBE Input Reset v1.1.1
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
	outsidePadding: "0.5rem",  // Expects: string of any valid CSS font-size unit values (Default = "0.5rem")
	clickWidth: "30px"  // Expects: string of any valid CSS width unit values (Default = "30px")
});
```

### Using HTML Entities
You may also use HTML entity characters (depending on your server's configuration to handle UTF-8 characters):
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "×",  // Expects: string (Default = "X")
	color: "red"  // Expects: string of any valid CSS color declaration (Default = "red")
});
```

### Using Text Color Classes
As an alternative to using an color code, you may use the optional ```colorClass``` option to add a text color to your reset character:
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "×",  // Expects: string (Default = "X")
	colorClass: "text-danger"  // Expects: string of any valid CSS class you have on the page (Default = "")
});
```

### Using the Width Option
For usability concerns (especially for wider fingertips) there's a ```clickWidth``` option to fine tune the clickable region. Please note - the default is set to 30px wide, and the content within this space is aligned to the outside side of the element, so the clickable region extends from the outside to the center of the input. Increasing this value to anything over ```60px``` may cover user-added text inside the input. The container is transparent, but just note this may create a situation where a user cannot select the text underneath the click zone, and thus may accidentally lose their entered data by accidentally clicking the transparent trigger. Thus the default is set to a modest 30px wide.
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "×",  // Expects: string (Default = "X")
	colorClass: "text-danger",  // Expects: string of any valid CSS class you have on the page (Default = "")
	clickWidth: "30px"  // Expects: string of any valid CSS width unit values (Default = "30px")
});
```

### Using Icon Font Libraries
If you have icon fonts available on your site, you can leverage your available font classes (and color classes) to use icons as your OBE Input Reset character. This is done by setting the option ```iconMode``` to ```true```, and including the necessary icon classes to specify the icon with the ```iconClasses``` option. This example uses the [FontAwesome Library](http://fontawesome.io/) and [Bootstrap](https://getbootstrap.com/) classes:
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: true,  // Expects: true | false (Default = "false")
	iconClasses: "fa fa-remove text-danger"  // Expects: string of icon classes (Default = "")
});
```

### Using the Positioning Options
And finally, here's another icon font example (using [Themify.me Icons](http://themify.me/themify-icons)) that needed some small sizing and positioning tweaks:
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