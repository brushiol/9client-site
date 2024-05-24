<?php
header("content-type: text/plain"); 
ob_start();?>
 
pcall(function() game:GetService("InsertService"):SetFreeModelUrl("http://9client.xyz/a//Game/Tools/InsertAsset.ashx?type=fm&q=%s&pg=%d&rs=%d") end)
pcall(function() game:GetService("InsertService"):SetFreeDecalUrl("http://9client.xyz/a//Game/Tools/InsertAsset.ashx?type=fd&q=%s&pg=%d&rs=%d") end)
 
game:GetService("ScriptInformationProvider"):SetAssetUrl("http://9client.xyz/a//Asset/")
game:GetService("InsertService"):SetBaseSetsUrl("http://9client.xyz/a//Game/Tools/InsertAsset.ashx?nsets=10&type=base")
game:GetService("InsertService"):SetUserSetsUrl("http://9client.xyz/a//Game/Tools/InsertAsset.ashx?nsets=20&type=user&userid=%d")
game:GetService("InsertService"):SetCollectionUrl("http://9client.xyz/a//Game/Tools/InsertAsset.ashx?sid=%d")
game:GetService("InsertService"):SetAssetUrl("http://9client.xyz/a//Asset/?id=%d")
game:GetService("InsertService"):SetAssetVersionUrl("http://9client.xyz/a//Asset/?assetversionid=%d")
 
pcall(function() game:GetService("SocialService"):SetFriendUrl("http://9client.xyz/a//Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerid=%d&userid=%d") end)
pcall(function() game:GetService("SocialService"):SetBestFriendUrl("http://9client.xyz/a//Game/LuaWebService/HandleSocialRequest.ashx?method=IsBestFriendsWith&playerid=%d&userid=%d") end)
pcall(function() game:GetService("SocialService"):SetGroupUrl("http://9client.xyz/a//Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid=%d&groupid=%d") end)
pcall(function() game:GetService("SocialService"):SetGroupRankUrl("http://9client.xyz/a//Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&playerid=%d&groupid=%d") end)
pcall(function() game:GetService("SocialService"):SetGroupRoleUrl("http://9client.xyz/a//Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=%d&groupid=%d") end)
pcall(function() game:GetService("GamePassService"):SetPlayerHasPassUrl("http://9client.xyz/a//Game/GamePass/GamePassHandler.ashx?Action=HasPass&UserID=%d&PassID=%d") end)
pcall(function() game:GetService("MarketplaceService"):SetProductInfoUrl("https://9client.xyz/a//marketplace/productinfo?assetId=%d") end)
pcall(function() game:GetService("MarketplaceService"):SetPlayerOwnsAssetUrl("https://9client.xyz/a//ownership/hasasset?userId=%d&assetId=%d") end)
 
game:GetService("ScriptContext"):AddStarterScript(37801172) 
 
<?php
$data = "\r\n" . ob_get_clean();
$key = file_get_contents($_SERVER['DOCUMENT_ROOT']."PrivateKey.pem");
openssl_sign($data, $sig, $key, OPENSSL_ALGO_SHA1);
echo "%" . base64_encode($sig) . "%" . $data;
?>
 
