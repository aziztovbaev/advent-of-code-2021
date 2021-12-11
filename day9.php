<?php

$file_rows_array= file('inputFile1.txt');

$mid_low_points = [];
$left_edge_low_points = [];
$right_edge_low_points = [];

    foreach ($file_rows_array as $row) {
        for($i=0; $i < strlen($row) - 2; $i++){
            if(($row[$i+1] < 6) && ($row[$i+1] < $row[$i]) && ($row[$i+1] < $row[$i+2])) {
                array_push($mid_low_points, $row[$i+1]);
            }
        }
    }


    foreach($file_rows_array as $row) {
        if($row[0] == 0){
            array_push($left_edge_low_points, $row[0]);
        }
    }


    foreach($file_rows_array as $row) {
        if($row[99] == 0){
            array_push($right_edge_low_points, $row[99]);
        }
    }


function calc_risky_low_points($low_point){
    return $low_point + 1;
}


$total_low_points = array_merge($left_edge_low_points, $mid_low_points, $right_edge_low_points);
$risky_low_points = array_map('calc_risky_low_points', $total_low_points);
$sum_of_risky_low_points = array_sum($risky_low_points);
print_r($sum_of_risky_low_points);