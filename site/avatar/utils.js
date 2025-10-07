var domain = "http://localhost:36739" //"https://clgd.us.kg"

const brickcolors = {
  "Light blue": {
    "Number": 45,
    "RGB": "180 210 228"
  },
  "Royal purple": {
    "Number": 1031,
    "RGB": "98 37 209"
  },
  "Dark orange": {
    "Number": 38,
    "RGB": "160 95 53"
  },
  "Lig. yellowish green": {
    "Number": 120,
    "RGB": "217 228 167"
  },
  "Light grey": {
    "Number": 103,
    "RGB": "199 193 183"
  },
  "Yellow flip/flop": {
    "Number": 178,
    "RGB": "180 132 85"
  },
  "Light bluish violet": {
    "Number": 39,
    "RGB": "193 202 222"
  },
  "Tr. Flu. Yellow": {
    "Number": 157,
    "RGB": "255 246 123"
  },
  "Earth blue": {
    "Number": 140,
    "RGB": "32 58 86"
  },
  "Grey": {
    "Number": 2,
    "RGB": "161 165 162"
  },
  "Tr. Medi. reddish violet": {
    "Number": 113,
    "RGB": "228 173 200"
  },
  "Medium Royal blue": {
    "Number": 213,
    "RGB": "108 129 183"
  },
  "Light orange brown": {
    "Number": 12,
    "RGB": "203 132 66"
  },
  "Dark Curry": {
    "Number": 209,
    "RGB": "176 142 68"
  },
  "Medium green": {
    "Number": 29,
    "RGB": "161 196 140"
  },
  "Sand green": {
    "Number": 151,
    "RGB": "120 144 130"
  },
  "Tr. Flu. Blue": {
    "Number": 143,
    "RGB": "207 226 247"
  },
  "Neon green": {
    "Number": 134,
    "RGB": "216 221 86"
  },
  "Light lilac": {
    "Number": 220,
    "RGB": "167 169 206"
  },
  "Lime green": {
    "Number": 1020,
    "RGB": "0 255 0"
  },
  "Light red": {
    "Number": 100,
    "RGB": "238 196 182"
  },
  "Camo": {
    "Number": 1021,
    "RGB": "58 125 21"
  },
  "Turquoise": {
    "Number": 211,
    "RGB": "121 181 181"
  },
  "Light yellow": {
    "Number": 3,
    "RGB": "249 233 153"
  },
  "Sand yellow": {
    "Number": 138,
    "RGB": "149 138 115"
  },
  "Light orange": {
    "Number": 125,
    "RGB": "234 184 146"
  },
  "Lilac": {
    "Number": 219,
    "RGB": "107 98 155"
  },
  "Bright blue": {
    "Number": 23,
    "RGB": "13 105 172"
  },
  "Black metallic": {
    "Number": 149,
    "RGB": "22 29 50"
  },
  "Tr. Flu. Red": {
    "Number": 158,
    "RGB": "225 164 194"
  },
  "Pastel orange": {
    "Number": 1025,
    "RGB": "255 201 201"
  },
  "Medium bluish violet": {
    "Number": 112,
    "RGB": "104 116 172"
  },
  "Navy blue": {
    "Number": 1011,
    "RGB": "0 32 96"
  },
  "Sand red": {
    "Number": 153,
    "RGB": "149 121 119"
  },
  "Olive": {
    "Number": 1008,
    "RGB": "193 190 66"
  },
  "Curry": {
    "Number": 180,
    "RGB": "215 169 75"
  },
  "Medium red": {
    "Number": 101,
    "RGB": "218 134 122"
  },
  "Bright orange": {
    "Number": 106,
    "RGB": "218 133 65"
  },
  "Earth orange": {
    "Number": 25,
    "RGB": "98 71 50"
  },
  "Reddish brown": {
    "Number": 192,
    "RGB": "105 64 40"
  },
  "Sand violet metallic": {
    "Number": 146,
    "RGB": "149 142 163"
  },
  "Tr. Lg blue": {
    "Number": 42,
    "RGB": "193 223 240"
  },
  "Tr. Yellow": {
    "Number": 44,
    "RGB": "247 241 141"
  },
  "Bright reddish lilac": {
    "Number": 198,
    "RGB": "142 66 133"
  },
  "Tr. Flu. Green": {
    "Number": 49,
    "RGB": "248 241 132"
  },
  "Light bluish green": {
    "Number": 118,
    "RGB": "183 215 213"
  },
  "Brown": {
    "Number": 217,
    "RGB": "124 92 70"
  },
  "Neon orange": {
    "Number": 1005,
    "RGB": "255 175 0"
  },
  "Really red": {
    "Number": 1004,
    "RGB": "255 0 0"
  },
  "Teal": {
    "Number": 1018,
    "RGB": "18 238 212"
  },
  "Warm yellowish orange": {
    "Number": 225,
    "RGB": "235 184 127"
  },
  "Tr. Flu. Reddish orange": {
    "Number": 47,
    "RGB": "217 133 108"
  },
  "Dark red": {
    "Number": 154,
    "RGB": "123 46 47"
  },
  "White": {
    "Number": 1,
    "RGB": "242 243 243"
  },
  "Pastel violet": {
    "Number": 1026,
    "RGB": "177 167 255"
  },
  "Silver flip/flop": {
    "Number": 179,
    "RGB": "137 135 136"
  },
  "Dark green": {
    "Number": 28,
    "RGB": "40 127 71"
  },
  "Br. yellowish orange": {
    "Number": 105,
    "RGB": "226 155 64"
  },
  "Medium orange": {
    "Number": 137,
    "RGB": "224 152 100"
  },
  "Bright red": {
    "Number": 21,
    "RGB": "196 40 28"
  },
  "Med. bluish green": {
    "Number": 116,
    "RGB": "85 165 175"
  },
  "Flame yellowish orange": {
    "Number": 191,
    "RGB": "232 171 45"
  },
  "Lig. Yellowich orange": {
    "Number": 36,
    "RGB": "243 207 155"
  },
  "Dark stone grey": {
    "Number": 199,
    "RGB": "99 95 98"
  },
  "Grime": {
    "Number": 1022,
    "RGB": "127 142 100"
  },
  "Red flip/flop": {
    "Number": 176,
    "RGB": "151 105 91"
  },
  "Sand blue": {
    "Number": 135,
    "RGB": "116 134 157"
  },
  "Light grey metallic": {
    "Number": 150,
    "RGB": "171 173 172"
  },
  "Tr. Green": {
    "Number": 48,
    "RGB": "132 182 141"
  },
  "Bright purple": {
    "Number": 221,
    "RGB": "205 98 152"
  },
  "Sand blue metallic": {
    "Number": 145,
    "RGB": "121 136 161"
  },
  "Tr. Red": {
    "Number": 41,
    "RGB": "205 84 75"
  },
  "Bright reddish violet": {
    "Number": 124,
    "RGB": "146 57 120"
  },
  "Med. yellowish green": {
    "Number": 115,
    "RGB": "199 210 60"
  },
  "Light stone grey": {
    "Number": 208,
    "RGB": "229 228 223"
  },
  "Lemon metalic": {
    "Number": 200,
    "RGB": "130 138 93"
  },
  "Black": {
    "Number": 26,
    "RGB": "27 42 53"
  },
  "Dark grey": {
    "Number": 27,
    "RGB": "109 110 108"
  },
  "Flame reddish orange": {
    "Number": 193,
    "RGB": "207 96 36"
  },
  "Lavender": {
    "Number": 1023,
    "RGB": "140 91 159"
  },
  "Sand yellow metallic": {
    "Number": 147,
    "RGB": "147 135 103"
  },
  "Br. yellowish green": {
    "Number": 119,
    "RGB": "164 189 71"
  },
  "CGA brown": {
    "Number": 1014,
    "RGB": "170 85 0"
  },
  "Dusty Rose": {
    "Number": 1007,
    "RGB": "163 75 75"
  },
  "Cool yellow": {
    "Number": 226,
    "RGB": "253 234 141"
  },
  "Pastel brown": {
    "Number": 1030,
    "RGB": "255 204 153"
  },
  "Pastel yellow": {
    "Number": 1029,
    "RGB": "255 255 204"
  },
  "Bright bluish violet": {
    "Number": 110,
    "RGB": "67 84 147"
  },
  "Pastel green": {
    "Number": 1028,
    "RGB": "204 255 204"
  },
  "Alder": {
    "Number": 1006,
    "RGB": "180 128 255"
  },
  "Brick yellow": {
    "Number": 5,
    "RGB": "215 197 154"
  },
  "Medium lilac": {
    "Number": 268,
    "RGB": "52 43 117"
  },
  "Bright yellow": {
    "Number": 24,
    "RGB": "245 205 48"
  },
  "Sand violet": {
    "Number": 136,
    "RGB": "135 124 144"
  },
  "Faded green": {
    "Number": 210,
    "RGB": "112 149 120"
  },
  "Pastel blue-green": {
    "Number": 1027,
    "RGB": "159 243 233"
  },
  "Magenta": {
    "Number": 1015,
    "RGB": "170 0 170"
  },
  "Gold": {
    "Number": 127,
    "RGB": "220 188 129"
  },
  "Med. yellowish orange": {
    "Number": 121,
    "RGB": "231 172 88"
  },
  "Toothpaste": {
    "Number": 1019,
    "RGB": "0 255 255"
  },
  "Deep orange": {
    "Number": 1017,
    "RGB": "255 175 0"
  },
  "Deep blue": {
    "Number": 1012,
    "RGB": "33 84 185"
  },
  "Pink": {
    "Number": 1016,
    "RGB": "255 102 204"
  },
  "New Yeller": {
    "Number": 1009,
    "RGB": "255 255 0"
  },
  "Cyan": {
    "Number": 1013,
    "RGB": "4 175 236"
  },
  "Tr. Blue": {
    "Number": 43,
    "RGB": "123 182 232"
  },
  "Medium blue": {
    "Number": 102,
    "RGB": "110 153 202"
  },
  "Earth green": {
    "Number": 141,
    "RGB": "39 70 45"
  },
  "Tr. Brown": {
    "Number": 111,
    "RGB": "191 183 177"
  },
  "Fire Yellow": {
    "Number": 190,
    "RGB": "249 214 46"
  },
  "Light green (Mint)": {
    "Number": 6,
    "RGB": "194 218 184"
  },
  "Really blue": {
    "Number": 1010,
    "RGB": "0 0 255"
  },
  "Bright green": {
    "Number": 37,
    "RGB": "75 151 75"
  },
  "Royal blue": {
    "Number": 195,
    "RGB": "70 103 164"
  },
  "Transparent": {
    "Number": 40,
    "RGB": "236 236 236"
  },
  "Medium stone grey": {
    "Number": 194,
    "RGB": "163 162 165"
  },
  "Dark Royal blue": {
    "Number": 196,
    "RGB": "35 71 139"
  },
  "Hot pink": {
    "Number": 1032,
    "RGB": "255 0 191"
  },
  "Bright bluish green": {
    "Number": 107,
    "RGB": "0 143 156"
  },
  "Bright violet": {
    "Number": 104,
    "RGB": "107 50 124"
  },
  "Pastel Blue": {
    "Number": 11,
    "RGB": "128 187 219"
  },
  "Rust": {
    "Number": 216,
    "RGB": "143 76 42"
  },
  "Dove blue": {
    "Number": 232,
    "RGB": "125 187 221"
  },
  "Really black": {
    "Number": 1003,
    "RGB": "17 17 17"
  },
  "Dark grey metallic": {
    "Number": 148,
    "RGB": "87 88 87"
  },
  "Mid gray": {
    "Number": 1002,
    "RGB": "205 205 205"
  },
  "Nougat": {
    "Number": 18,
    "RGB": "204 142 105"
  },
  "Med. reddish violet": {
    "Number": 22,
    "RGB": "196 112 160"
  },
  "Reddish lilac": {
    "Number": 218,
    "RGB": "150 112 159"
  },
  "Earth yellow": {
    "Number": 108,
    "RGB": "104 92 67"
  },
  "Light brick yellow": {
    "Number": 224,
    "RGB": "240 213 160"
  },
  "Light pink": {
    "Number": 223,
    "RGB": "220 144 149"
  },
  "Silver": {
    "Number": 131,
    "RGB": "156 163 168"
  },
  "Light purple": {
    "Number": 222,
    "RGB": "228 173 200"
  },
  "Light Royal blue": {
    "Number": 212,
    "RGB": "159 195 233"
  },
  "Institutional white": {
    "Number": 1001,
    "RGB": "248 248 248"
  },
  "Pastel light blue": {
    "Number": 1024,
    "RGB": "175 221 255"
  },
  "Phosph. White": {
    "Number": 50,
    "RGB": "236 232 222"
  },
  "Dark nougat": {
    "Number": 128,
    "RGB": "174 122 89"
  },
  "Light reddish violet": {
    "Number": 9,
    "RGB": "232 186 200"
  },
  "Tr. Bright bluish violet": {
    "Number": 126,
    "RGB": "165 165 203"
  },
  "Gun metallic": {
    "Number": 168,
    "RGB": "117 108 98"
  },
  "Br. reddish orange": {
    "Number": 123,
    "RGB": "211 111 76"
  }
}

const inventory = [
    {
        Name: "Guest Shirt",
        Type: "shirt",
        Data: {
            ClassName: "Shirt",
            ShirtTemplate: "rbxasset://avatar/guestshirt.png"
        }
    },
    {
        Name: "report.PNG",
        Type: "tshirt",
        Data: {
            ClassName: "ShirtGraphic",
            Graphic: "rbxasset://avatar/report.png"
        }
    },
    {
        Name: "9client Straw Hat",
        Type: "hat",
        Data: {
            "ClassName": "Hat",
            "AttachmentPos": {
                "Type": "Vector3",
                "X": 0,
                "Y": -0.09,
                "Z": 0.4
            },
            "Handle": {
                "ClassName": "Part",
                "Mesh": {
                    "ClassName": "SpecialMesh",
                    "Scale": {
                        "Type": "Vector3",
                        "X": 1.75,
                        "Y": 1.75,
                        "Z": 1.75
                    },
                    "MeshId": "rbxasset://avatar/9straw.mesh",
                    "TextureId": "rbxasset://avatar/9straw.png"
                }
            }
        }
    },
    {
        Name: "Chess Piece",
        Type: "gear",
        Data: {
            "ClassName": "Tool",
            "GripUp": {
                "Type": "Vector3",
                "X": 0,
                "Y": 0,
                "Z": 1
            },
            "Handle": {
                "ClassName": "Part",
                "Mesh": {
                    "ClassName": "SpecialMesh",
                    "Scale": {
                        "Type": "Vector3",
                        "X": 0.03,
                        "Y": 0.03,
                        "Z": 0.03
                    },
                    "MeshId": "rbxasset://fonts/2009/pawn.mesh",
                    "TextureId": "rbxasset://sky/skyspheremap.jpg"
                }
            }
        }
    }
]

const bodyparts = {
    "Head": "head",
    "Torso": "torso",
    "Right Arm": "rarm",
    "Left Arm": "larm",
    "Right Leg": "rleg",
    "Left Leg": "lleg",
}
const bodycolors = {
  "head": "190",
    "torso": "23",
    "rarm": "190",
    "larm": "190",
    "rleg": "115",
    "lleg": "115",
}

function colorDistance(color1, color2) { //use ;ater
  const x =
    Math.pow(color1[0] - color2[0], 2) +
    Math.pow(color1[1] - color2[1], 2) +
    Math.pow(color1[2] - color2[2], 2);
  return Math.sqrt(x);
}

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [ h, s, l ];
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
    //elt.style.zIndex = Object.keys(brickcolors).findIndex(key => key == color)