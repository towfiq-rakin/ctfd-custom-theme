var teamPrivateConfigNode = document.getElementById("team-private-config");
if (teamPrivateConfigNode) {
  var teamPrivateRaw =
    (teamPrivateConfigNode.content && teamPrivateConfigNode.content.textContent) ||
    teamPrivateConfigNode.innerHTML ||
    teamPrivateConfigNode.textContent ||
    "{}";
  var teamPrivateConfig = {};
  try {
    teamPrivateConfig = JSON.parse(teamPrivateRaw || "{}");
  } catch (_e) {
    teamPrivateConfig = {};
  }
  window.stats_data = teamPrivateConfig.stats_data;
  window.team_captain = teamPrivateConfig.team_captain;
}
