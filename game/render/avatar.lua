game:GetService("ContentProvider"):SetBaseUrl("9client.xyz")
game:GetService("ScriptContext").ScriptsDisabled = true
local is = game:service("InsertService")
local plr = game.Players:CreateLocalPlayer(0)
local https = game:GetService("HttpService")
https.HttpEnabled = true
local res = 512
local port = "<<PORT>>"
local json = [[<<JSON>>]]
local key = [[<<KEY_RCC>>]]
local appearance = https:JSONDecode(json)

function test(func, onerr, ...)
	onerr = onerr or function() end
	local succ, err = pcall(func, ...)
	if not succ then
		onerr(err)
	else
		return err
	end 
end

function find(tbl, t)
	for i, v in pairs(tbl) do
		if v == t then
			return i
		end
	end
end

function combine(...)
	local full = {}
	for i, v in pairs({...}) do
		if type(v) == "table" then
			full = {unpack(full), unpack(v)}
		end
	end
	return full
end

function containsall(tbl, look)
	local amt = 0
	for i, v in pairs(tbl) do
		if find(look, v) or find(look, i) then
			amt = amt + 1
		end
	end
	return amt == #look
end
function ungroup(model, parent)
	local children 
	if model and model:IsA("Model") then
		children = model:GetChildren()
		parent = parent or model.Parent
		for i, v in pairs(children) do
			v.Parent = parent
		end
		model:Destroy()
	end
	return children
end

function apply(a, parent)
	for i, v in pairs(a) do
		if type(v) == "table" then
			local new = parent:FindFirstChild(i)
			if v.ClassName then
				new = Instance.new(v.ClassName)
				new.Name = i
			end
			if new then
				apply(v, new)
				new.Parent = parent
			end
		end
		if i == "AssetId" and type(v) == "number" then
			test(function() 
				local mdl = is:LoadAsset(v)
				ungroup(mdl,parent)
			end, warn)
		elseif i ~= "ClassName" then
			if i == "BrickColor" and type(v) == "string" then
				parent[i] = BrickColor.new(v)
			elseif type(v) == "table" then
				if v.Type then
					local vectors = {"X", "Y", "Z"}
					local rotates = {"R00","R01","R02","R10","R11","R12","R20","R21","R22"}
					local cframes = combine(vectors,rotates)
					if v.Type == "Vector3" and containsall(v, vectors) then
						local vals = {}
						for _, w in pairs(vectors) do
							table.insert(vals,v[w])
						end
						parent[i] = Vector3.new(unpack(vals))
					elseif v.Type == "CFrame" then
						local vals = {}
						if containsall(v, cframes) then
							for _, w in pairs(cframes) do
								table.insert(vals,v[w])
							end
						elseif containsall(v, vectors) then
							for _, w in pairs(vectors) do
								table.insert(vals,v[w])
							end
						end
						parent[i] = CFrame.new(unpack(vals))
					end
				end
			else
				test(function() 
					if i ~= "Source" or i ~= "source" then
						parent[i] = v 
					end
				end, warn)
			end
		end
	end
end

plr:LoadCharacter()

test(apply, warn, appearance, plr.Character)

for i,v in pairs(plr.Character:GetChildren()) do
	if v:IsA("Tool") then
		plr.Character.Torso["Right Shoulder"].CurrentAngle = math.pi / 2
	end
end

local render = game:GetService("ThumbnailGenerator"):Click("PNG", res, res, true)
local data = {
	base64 = render, --"data:image/png;base64,"..
	key = key
}
game:HttpPost("http://localhost:"..port.."/thumbnail/rcchandler", https:JSONEncode(data)) 