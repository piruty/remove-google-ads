console.log("run Remove Ads")
const nodes = document.querySelectorAll(`[data-text-ad="1"]`)
for (i = 0; i < nodes.length; i++) {
  nodes[i].remove()
}
