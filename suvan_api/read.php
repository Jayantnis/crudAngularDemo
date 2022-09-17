<?php require 'database.php';
// return the list of policies

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods:PUT,GET ,POST ,DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$policies=[];
$sql="SELECT id,number,amount FROM policies";
// json resovle problem
if($result=mysqli_query($con,$sql))
{
    $i=0;
    while($row=mysqli_fetch_assoc($result))
    {    
         $policies[$i]['id'] = $row['id'];
         $policies[$i]['number'] = $row['number'];
         $policies[$i]['amount'] = $row['amount'];
         $i++;
    }
    echo json_encode($policies);
}else{
    http_response_code(404);//eror define code
}