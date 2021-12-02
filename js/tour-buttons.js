export function applyTourButtonsExtension() {
  for (const element of document.getElementsByClassName("tour-button")) {
    element.onclick = on_click_tour_button
  }

}

function on_click_tour_button(e) {
  e = e.target

  if(e.dataset.clicked === "1") {
    e.parentElement.removeChild(e.parentElement.getElementsByTagName("iframe")[0])
    e.dataset.clicked = "0"
    e.textContent = "Take a peek."
  }
  else {
    e.dataset.clicked = "1"

    const iframe = document.createElement("iframe")
    iframe.frameBorder = "0"
    iframe.src = e.dataset.src
    iframe.width = "567"
    iframe.height = "720"
    e.parentElement.appendChild(iframe)
    e.textContent = "Back"
  }
}
