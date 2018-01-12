## jAutoComplete

A jQuery plugin for Autocomplete textboxes.
This is a recommended tools for Search or Sign-UP forms etc.

### How to use ?

This plugin works with JSON data and you must generate a JSON data file and set this url to Plugin settings.

This will send a parameter with name 'keyword' to your data generator file and you must get that and create your JSON file.

A simple PHP for example :

``` php
$s = $_POST['keyword'];
$query = "SELECT * FROM `products` WHERE `title` LIKE '%".$s."%' ORDER BY `id` DESC";
mysql_query($query);
// json encoder ...
```

Add jAutoComplete css file between html head tag :

``` html
<link rel="stylesheet" href="assets/jAutoComplete.css">
```

Add latest version of jQuery and jAutoComplete at end line of html body tag :

``` html
<script src="assets/jquery-3.2.1.min.js"></script>
<script src="assets/jAutoComplete-1.0.0.js"></script>
```

Add a text input into a form and set an unique id :

``` html
<form>
  <input type="text" id="textbox">
</form>
```

And now select your input and call jAutoComplete :

``` html
<script>

$(document).ready(function(){
    $('#textbox').jAutoComplete({
        url: 'search.php',
        method: 'POST'
    });
});

</script>
```

### Options

url ( Your JSON generator file url / Default = null / Required )

method ( Your selected method: GET or POST / Default = POST / Optional )

