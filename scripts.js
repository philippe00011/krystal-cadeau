const welcome = document.getElementById('welcome');
const surprise = document.getElementById('surprise');
const exploreBtn = document.getElementById('explore');
const backBtn = document.getElementById('back');
const interactionContent = document.getElementById('interaction-content');
const actionBtns = document.querySelectorAll('.action-btn');
const nameTag = document.getElementById('name');

// Set le nom de la soeur
nameTag.textContent = "Krystal";

// Messages
const message = [
  "Salut, désolé je suis pas maupasssant 😅, il n'y aura pas de grand discours. ",
  "Ce sera juste : Bonne anniverssaire et profite bien de ta majorité ! 🎉 ",
];

const wishContent = `
  <h3 style="color: var(--accent-pink);">Ton cadeau :</h3>
  <p>J'ai pas vraiment de grandes inspirations donc tu recevras :</p>
  <p>Ce soir à 23h59 une carte cadeau Playstation de 25CHF par mail.</p>
`;

// Affiche le contenu correspondant
function renderInteraction(action) {
  interactionContent.innerHTML = "";
  if (action === "quote") {
    interactionContent.innerHTML =
      "<div class='fade'>" + message.map(line => `<p>${line}</p>`).join("") + "</div>";
  } else if (action === "wish") {
    interactionContent.innerHTML = `<div class='fade'>${wishContent}</div>`;
  }
}

exploreBtn.onclick = function() {
  welcome.classList.add("hidden");
  surprise.classList.remove("hidden");
  interactionContent.innerHTML = "";
};

backBtn.onclick = function() {
  welcome.classList.remove("hidden");
  surprise.classList.add("hidden");
};

actionBtns.forEach(btn => {
  btn.onclick = function() {
    renderInteraction(btn.dataset.action);
  };
});
