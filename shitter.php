<?php
mb_internal_encoding("UTF-8");
$words[] = trim(filter_input(INPUT_GET, "word1", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW));
$words[] = trim(filter_input(INPUT_GET, "word2", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW));
$words[] = trim(filter_input(INPUT_GET, "word3", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW));

foreach ($words as $w) {
    $lengths[] = mb_strlen($w);

}
header("content-type: text/html; charset=utf-8");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>din mor</title>
    <style>
        body{
            font-family: sans-serif;
            max-width: 600px;
         }

    </style>
</head>
<body>
    <h1>gigga</h1>


<?php
$i = 0;
foreach(@$words as $w) {
    echo '<p>"'. htmlspecialchars(@w, ENT_QUOTES) .
    "\" innehåller {f$lengths[$i]} bokstäver. </p>\n";
    $i++;

}
?>

</body>
</html>
<?php




<?php
mb_internal_encoding("UTF-8");

// Fetch input words safely, handling potential empty values
$words = [];
$words[] = trim(filter_input(INPUT_GET, "word1", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW) ?? "");
$words[] = trim(filter_input(INPUT_GET, "word2", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW) ?? "");
$words[] = trim(filter_input(INPUT_GET, "word3", FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW) ?? "");

// Calculate lengths for each word
$lengths = [];
foreach ($words as $w) {
    $lengths[] = mb_strlen($w);
}

header("Content-Type: text/html; charset=utf-8");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>din mor</title>
    <style>
        body {
            font-family: sans-serif;
            max-width: 600px;
        }
    </style>
</head>
<body>
    <h1>gigga</h1>

<?php
// Display the words and their lengths
$i = 0;
foreach ($words as $w) {
    echo '<p>"' . htmlspecialchars($w, ENT_QUOTES) . 
    "\" innehåller {$lengths[$i]} bokstäver.</p>\n";
    $i++;
}
?>

</body>
</html>
