document.getElementById("btn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: onRun,
  })
})

function onRun() {
  const nodes = document.querySelectorAll(`[data-text-ad="1"]`)
  for (i = 0; i < nodes.length; i++) {
    nodes[i].remove()
  }
}
