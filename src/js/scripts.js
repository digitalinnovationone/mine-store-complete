// 1. pegar o box items
let boxItems = document.getElementById("box-items");

let audio = new Audio("src/assets/sounds/select.mp3");

// 2. montar as caixinhas
async function createDinamicBox(pictureName) {
  return `<div class="box">
  <img src="src/assets/imgs/${pictureName}.webp">
  <div class="label">
    <img src="src/assets/imgs/coin.png" width="50px">
    <p>MC 100</p>
  </div>
</div>`;
}
// 3. juntar todas as caixinhas
async function rendering() {
  let components = [];

  for (let index = 1; index < 5; index++) {
    components.push(createDinamicBox(`boy-${index}`));
    components.push(createDinamicBox(`girl-${index}`));
  }

  boxItems.innerHTML = (await Promise.all(components)).join("");

  await addSound();
}

// 3.1 adicionar efeito de som ao passar sobre a imagem
async function addSound() {
  let elements = document.getElementsByClassName("box");

  for (const item of elements) {
    item.addEventListener("mouseover", () => {
      audio.play();
    });
  }
}

// 4. injetar no html
rendering();
