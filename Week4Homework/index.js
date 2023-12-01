document.addEventListener("DOMContentLoaded", function() {
  const dynamicContent = document.getElementById("dynamic-content");
  const heading = document.createElement("h2");
  heading.textContent = "See the Unseen";
  dynamicContent.appendChild(heading);

  document.querySelectorAll("div").forEach(div => {
    if (div.id) {
      const p = document.createElement("p");
      p.textContent = `ID: ${div.id}`;
      p.classList.add("bold-div-id");
      div.parentNode.insertBefore(p, div);
    }
  });
});
