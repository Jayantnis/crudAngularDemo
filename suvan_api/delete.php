<?php 
require 'database.php';
error_reporting(0);
$id= (($_GET['id']!==null)  && ((int)$_GET['id']>0))? mysqli_real_escape_string($con,(int)$_GET['id']):false;


$sql="DELETE FROM  `policies` WHERE `id`='{$id}' LIMIT 1";
if(!$id)
{
    return http_response_code(400);
}

if(mysqli_query($con,$sql))
{
    return http_response_code(204);
}
else{
    return http_response_code(422);
}
