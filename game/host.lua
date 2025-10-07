local ns = game:GetService("NetworkServer")
local rs = game:GetService("RunService")
local plrs = game:GetService("Players")

function host(place,port)
  game:Load()
  ns:start(port, 20)
  rs:run()

  plrs.PlayerAdded:connect(function(plr)
    print("player added | ID: "..plr.UserId.." Name: "..plr.Name)
    plr:LoadCharacter()
  end)
end