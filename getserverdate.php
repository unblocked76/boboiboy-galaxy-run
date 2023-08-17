<?php
    $info = getdate();
    $date = $info['mday'];
    $month = $info['mon'];
    $year = $info['year'];
    
    if ($month < 10) {
        $month = "0".$month;
    }
    if ($date < 10) {
        $date = "0".$date;
    }
    
    $current_date = "$year$month$date";
    echo $current_date;
?>