<?php 
require 'database.php';

// get the posted data 
$postdata=file_get_contents("php://input");

if(isset($postdata)&& !empty($postdata))
{
    // extract the data 
    $request=json_decode($postdata);

    //validation 
    if(trim($request->number)===''|| (float)$request->amount<0)
    {
        
        return http_response_code(400);

    }

    // sanitize
    $number=mysqli_real_escapse_string($con,trim($request->number));
    // ?????
    $amount=mysqli_real_escapse_string($con,(int)($request->amount));

    $sql="INSERT INTO `policies`(`id`,`number`,`amount`)VALES (null,'{$number}','{$amount}')";


    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
        $policy=['number'=>$number,'amount'=>$amount,'id'=>mysqli_insert_id($con)];

        echo json_encode($policy);
    }else{
        http_response_code(422);
    }
}

