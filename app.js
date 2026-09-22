const balls = [
  ["15.2", "1", "Babar takes a quick single."],
  ["15.1", "4", "FOUR! Beautiful cover drive."],
  ["15.0", "0", "Dot ball. Good length delivery."],
  ["14.6", "2", "Two runs through mid-wicket."],
  ["14.5", "1", "Single to fine leg."],
  ["14.4", "W", "WICKET! Caught behind."],
  ["14.3", "0", "Beaten outside off."],
  ["14.2", "6", "SIX! Clean strike over long-on."],
  ["14.1", "1", "Pushed into the gap for one."]
];

const feed = document.getElementById("feed");

function render() {
  feed.innerHTML = balls.map(ball => `
    <div class="ball">
      <div class="over">${ball[0]}</div>
      <div class="runs">${ball[1]}</div>
      <div class="desc">${ball[2]}</div>
    </div>
  `).join("");
}

render();

setInterval(() => {
  const first = balls.shift();
  balls.push(first);
  render();
}, 15000);
