# OBE Input Reset
A lightweight and customizable jQuery plugin to add a clickable character to input elements, with click functionality to clear the input value, and then focus the input.
# Installation
First include the OBE Input Reset CSS file in the ```<head>``` tag of your page:
```html
<script src="css/obe-input-reset.css"></script>
```
Next include the OBE Input Reset JS file (generally done just before the closing ```</body>``` tag of your page):
```html
<script src="js/obe-input-reset.jQuery.js"></script>
```
And finally, include an HTML input element on your page.
```html
<input type="text" name="example" />
```
# Initialize Plugin
With an input in place and the CSS + JS files included on the page, it's time to initialize the plugin!
```javascript
$("input").obeInputReset();
```