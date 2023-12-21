const btn = document.getElementById("btn")
btn.addEventListener("click", getSchemes)

function getSchemes() {
  const colorsContainer = document.getElementById("colors-container")
  const hexContainer = document.getElementById("hex-container")
  colorsContainer.innerHTML = ""
  hexContainer.innerHTML = ""
  const colorInput = document.getElementById("color-input")
  const colorVal = colorInput.value
  const hexValue = colorVal.slice(1)
  const modeOptions = document.getElementById("mode")
  const mode = modeOptions.value
  const endpoints = `scheme?hex=${hexValue}&mode=${mode}`
  fetch(`https://www.thecolorapi.com/${endpoints}`)
    .then((response) => response.json())
    .then((data) => {
      const hexColors = data.colors.map((color) => {
        return color.hex.value
      })

      for (let color of hexColors) {
        const colorDiv = document.createElement("div")
        colorDiv.style.backgroundColor = color
        colorsContainer.append(colorDiv)
        const hexDiv = document.createElement("div")
        hexDiv.textContent = color
        hexDiv.addEventListener("click", (e) => {
          console.log(e.target)
        })
        hexContainer.prepend(hexDiv)
      }
    })
}

getSchemes()
