var STATE = null;
var setupConfigNode = document.getElementById("setup-config");
if (setupConfigNode) {
  var setupConfigRaw =
    (setupConfigNode.content && setupConfigNode.content.textContent) ||
    setupConfigNode.innerHTML ||
    setupConfigNode.textContent ||
    "{}";
  var setupConfig = {};
  try {
    setupConfig = JSON.parse(setupConfigRaw || "{}");
  } catch (_e) {
    setupConfig = {};
  }
  STATE = setupConfig.state || null;
}
window.STATE = STATE;
