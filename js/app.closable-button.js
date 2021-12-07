export function applyClosableButtonsExtension() {
  for (const element of document.getElementsByClassName("nav-closable")) {
    element.onclick = removeParentFromElement
  }
}

function removeParentFromElement(e) {
  e = e.target
  e.parentElement.remove()
}
