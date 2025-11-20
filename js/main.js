function calc() {
      const a = Number(document.getElementById("ap").value);
      const d = Number(document.getElementById("dia").value);
      const w = Number(document.getElementById("w").value);
      const l = Number(document.getElementById("l").value);

      // Basic validation
      if (!a || !d || !w || !l || a < 0 || d < 0 || w <= 0 || l <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
      }

      const pitch = a + d;
      if (pitch === 0) {
        alert("Aperture + Wire DIA cannot be zero.");
        return;
      }

      const weight = 0.00001233 * d * d * w * l / pitch;
      const rounded = weight.toFixed(2);

      // Show current result
      document.getElementById("out").innerText = rounded;

      // Add to history (in memory only, clears when page is closed/reloaded)
      const historyList = document.getElementById("history-list");
      const emptyMsg = document.getElementById("history-empty");
      if (emptyMsg) emptyMsg.style.display = "none";

      const li = document.createElement("li");
      li.innerHTML =
        `OPG: ${a} mm, DIA: ${d} mm, ` +
        `W: ${w} mm, L: ${l} mm ` +
        `→ <span class="history-weight">${rounded} kg</span>`;

      // Newest on top
      historyList.prepend(li);
    }