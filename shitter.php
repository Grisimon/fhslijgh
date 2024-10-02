<?php
header("content-type: text/html; charset=utf-8");
if (empty($_GET["name"])) {
    echo "<h1>hello world <h1>";
} else { 
    echo '<h1>hej', filter_input('input_get', 'name', FILTER_SANITIZE_SPECIAL_CHARS()),'<h1>';
    
}

echo "sjfhlkfj";