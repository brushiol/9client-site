-- Server script by EnergyCell
-- This is a short version, and simple
-- Use Tools > Execute script to run a server
Port = 53640
Server = game:GetService("NetworkServer")
RunService = game:GetService("RunService")
Server:start(Port, 20)
RunService:run()
function onJoined(newPlayer)
  print ("An new connection was accepted.")
  newPlayer:LoadCharacter()
end
game.Players.PlayerAdded:connect(onJoined)
-- You can adjust SendRate in the Studio settings to make the server run faster.
