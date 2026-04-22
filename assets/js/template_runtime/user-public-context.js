var userPublicConfigNode = document.getElementById("user-public-config");
if (userPublicConfigNode) {
  var userPublicRaw =
    (userPublicConfigNode.content && userPublicConfigNode.content.textContent) ||
    userPublicConfigNode.innerHTML ||
    userPublicConfigNode.textContent ||
    "{}";
  var userPublicConfig = {};
  try {
    userPublicConfig = JSON.parse(userPublicRaw || "{}");
  } catch (_e) {
    userPublicConfig = {};
  }
  window.USER = userPublicConfig.user;
}
