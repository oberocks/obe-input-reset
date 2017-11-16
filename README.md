# OBE Input Reset
A lightweight and customizable jQuery plugin to add a clickable character to input elements, with click functionality to clear the input value, and then focus the input.
 
 
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
This plugin was designed to be bare-bones, so you can throw a variety of content at it. There are a handful of options currently baked-in. Here's an example of initializing the plugin:
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "X"  // Expects: string (Default = "X")
});
```

You may also use HTML entity characters (depending on your server setup being able to handle UTF-8 characters):
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: false,  // Expects: true | false (Default = "false")
	text: "×"  // Expects: string (Default = "X")
});
```

And if you have icon fonts available on your site, you can leverage your available font classes to use icons as your OBE Input Reset character. This is done by setting the option ```iconMode``` to ```true```, and including the necessary icon classes to specify the icon. This example uses the... wait for it... awesome [FontAwesome Library](http://fontawesome.io/icons/):
```javascript
$('input[name="example"]').obeInputReset({
	iconMode: true,  // Expects: true | false (Default = "false")
	iconClasses: "fa fa-remove"  // Expects: string of icon classes (Default = "fa fa-remove")
});
```