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
With an input in place and the CSS + JS files included on the page, it's time to initialize the plugin!
```javascript
$('input[name="example"]').obeInputReset();
```