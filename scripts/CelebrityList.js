import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("star")) {
    const [, id] = itemClicked.id.split("--");

    for (const celebrity of celebrities) {
      if (celebrity.id === parseInt(id)) {
        window.alert(`${celebrity.name} plays ${celebrity.sport}`);
      }
    }
  }
});

export const Celebrities = () => {
  let html = "<ol>";

  for (const celebrity of celebrities) {
    html += `<li id="star--${celebrity.id}">${celebrity.name}</li>`;
  }

  html += "</ol>";
  return html;
};
