<?php
 
if(!isset($_GET['id'])) {
    die('ID isnt set');
}
$AID = $_GET['id'];
if(file_exists("$AID")) 
{
	header("Content-Type: application/octet-stream");
    header("Content-Transfer-Encoding: Binary");
    header("Content-disposition: attachment; filename=".$AID); 
 
	die(file_get_contents($AID));
} 
	elseif(file_exists($AID.".lua")) 
{
	header("Content-Type: application/octet-stream");
    header("Content-Transfer-Encoding: Binary");
    header("Content-disposition: attachment; filename=".$AID); 
 
	$data = "\r\n" . file_get_contents($AID.".lua");
	$key = file_get_contents($_SERVER['DOCUMENT_ROOT']."/private/keys/PrivateKey.pem");
	openssl_sign($data, $sig, $key, OPENSSL_ALGO_SHA1);
	//die("" . sprintf("%%%s%%%s", base64_encode($sig), $data));
	die($data);
} 
	else 
{
	die(header("Location: https://assetdelivery.roblox.com/v1/asset/?assetversionid=".$_SERVER['QUERY_STRING']));
}
?>