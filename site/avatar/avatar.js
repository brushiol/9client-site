var avatar = {}
const sendy = document.getElementById('redraw')
const parts = document.getElementById('bodyparts')
const bcpicker = document.getElementById('bcpicker')
const invcont = document.getElementById('invcont')
const img = document.getElementById('render')

/*-------------BODYCOLORS-------------*/

function updateparts() {
    for (let [part, id] of Object.entries(bodyparts)) {
        let sel = document.getElementById(id)
        if (avatar[part]) {
            avatar[part].BrickColor = sel.value
        } else {
            avatar[part] = {
                BrickColor: sel.value
            }
        }
    }
}
let focus = false

function unfocus() {
    if (focus) {
        focus = false
        bcpicker.style.visibility = "hidden"
    }
}
bcpicker.onmouseleave = unfocus
for (let child of parts.children) {
    child.value = bodycolors[child.id]
    let ind = Object.keys(brickcolors).find(v => brickcolors[v].Number == child.value)
    let bc = brickcolors[ind]
    child.style.backgroundColor = `rgb(${bc.RGB})`
    child.onclick = function () {
        focus = true
        let pos = getOffset(child)
        bcpicker.style.visibility = "visible"
        bcpicker.style.left = (pos.left + child.offsetWidth / 2) + "px"
        bcpicker.style.top = (pos.top + child.offsetHeight / 2) + "px"
        bcpicker.value = child
    }
}
let bcnode = document.createElement("div")
let size = `${225 / Object.entries(brickcolors).length}vw`
bcnode.style.width = size
bcnode.style.height = size
var sorted = Object.entries(brickcolors).sort(([ia, va], [ib, vb]) => {
    let rgb1 = va.RGB.split(" ")
    let rgb2 = vb.RGB.split(" ")
    let hsl1 = rgbToHsl(rgb1[0], rgb1[1], rgb1[2])
    let hsl2 = rgbToHsl(rgb2[0], rgb2[1], rgb2[2])
    return va.Number - vb.Number //hsl1[2] - hsl2[2]
})
for (let [color, arr] of sorted) {
    let elt = bcnode.cloneNode()
    elt.value = String(arr.Number)
    elt.title = color
    elt.style.backgroundColor = `rgb(${arr.RGB})`
    elt.style.outlineColor = `rgb(${arr.RGB})`
    elt.onclick = function () {
        if (bcpicker.value) {
            unfocus()
            bcpicker.value.style.backgroundColor = `rgb(${arr.RGB})`
            bcpicker.value.value = elt.value
            updateparts()
        }
    }
    bcpicker.appendChild(elt)
}

/*-------------INVENTORY-------------*/

var categories = {}

for (let elta of invcont.children) {
    if (elta.tagName == "DETAILS") {
        categories[elta.id] = []
    }
    elta.ontoggle = (event) => {
        if (elta.open) {
            for (let eltb of invcont.children) {
                if (eltb.tagName == "DETAILS" && !elta.isSameNode(eltb)) {
                    eltb.open = false
                } else if (eltb.class == "invitem") {
                    var item = categories[elta.id]
                    if (item.find((v) => eltb.isSameNode(v))) {
                        eltb.style.visibility = "visible"
                    } else {
                        eltb.style.visibility = "collapse"
                    }
                }
            }
        }
    }
}
for (let item of inventory) {
    let equipped = false
    let temp = document.createElement("div")
    let title = document.createElement("label")
    let but = document.createElement("button")
    temp.class = "invitem"
    title.for = "equip"
    title.textContent = item.Name
    but.textContent = "Equip"
    but.class = "equip"
    but.onclick = () => {
        if (!equipped) {
            equipped = true
            but.textContent = "Unequip"
            avatar[item.Name] = item.Data
        } else {
            equipped = false
            but.textContent = "Equip"
            delete avatar[item.Name]
        }
    }
    temp.style.visibility = "collapse"
    temp.appendChild(title)
    temp.appendChild(document.createElement("br"))
    temp.appendChild(but)
    invcont.appendChild(temp)
    invcont.appendChild(document.createElement("br"))
    categories[item.Type].push(temp)
}

/*-------------END-------------*/

updateparts()

sendy.addEventListener('click', async () => {
    updateparts()
    console.log(JSON.stringify(avatar, null, 2))
    sendy.setAttribute("disabled", true)
    const url = domain + '/thumbnail/avatar';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(avatar, null, 2)
        });
        const result = await response.text()
        img.src = "data:image/png;base64," + result
    } catch (error) {
        console.error(error);
    }
    setTimeout(() => sendy.removeAttribute("disabled"), 3000);
});