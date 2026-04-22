var teamPublicConfigNode = document.getElementById("team-public-config");
if (teamPublicConfigNode) {
  var teamPublicRaw =
    (teamPublicConfigNode.content && teamPublicConfigNode.content.textContent) ||
    teamPublicConfigNode.innerHTML ||
    teamPublicConfigNode.textContent ||
    "{}";
  var teamPublicConfig = {};
  try {
    teamPublicConfig = JSON.parse(teamPublicRaw || "{}");
  } catch (_e) {
    teamPublicConfig = {};
  }
  window.TEAM = teamPublicConfig.team;
}
