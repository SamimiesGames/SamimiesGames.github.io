export function applyTourButtonsExtension() {
  for (const element of document.getElementsByClassName("tour-button")) {
    element.onclick = on_click_tour_button
  }

}

function on_click_tour_button(e) {
  e = e.target

  window.open(e.dataset.src, "_blank")

}
