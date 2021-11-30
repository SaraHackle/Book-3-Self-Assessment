import { getChildren } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("kid")) {
    const [, id] = itemClicked.id.split("--");

    for (const child of children) {
      if (child.id === parseInt(id)) {
        window.alert(`${child.name} wishes to ${child.wish}`);
      }
    }
  }
});

const children = getChildren();

export const Kids = () => {
  let html = "<ol>";

  for (const child of children) {
    html += `<li id="kid--${child.id}">${child.name}</li>`;
  }

  html += "</ol>";
  return html;
};
