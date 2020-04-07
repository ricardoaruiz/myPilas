// Elementos do menu a serem manipulados
const ICONE_HAMBURGUER = document.querySelector(".js-hamburguer");
const LINHAS_DO_ICONE = document.querySelectorAll(".js-hamburguer-icone-linha");
const LISTA_ITEMS_MENU = document.querySelector(".js-hamburguer-menu-items");
const ITEMS_LISTA_MENU = document.querySelectorAll(".js-hamburguer-menu-item");

// Classes a serem aplicadas nos elementos do menu de acordo com o estado
const MENU_ITEM_HIDDEN = "navegacao__menu-hamburguer-items--hidden";
const MENU_ITEM_VISIBLE = "navegacao__menu-hamburguer-items--visible";
const ICONE_LINHA_NORMAL = "navegacao__menu-hamburguer-icone-linha--normal";
const ICONE_LINHA_GIRAR_HORARIO =
  "navegacao__menu-hamburguer-icone-linha--girar-horario";
const ICONE_LINHA_HIDDEN = "navegacao__menu-hamburguer-icone-linha--hidden";
const ICONE_LINHA_GIRAR_ANTI_HORARIO =
  "navegacao__menu-hamburguer-icone-linha--girar-antihorario";

const _toggleMenu = () => {
  if (LISTA_ITEMS_MENU.classList.contains(MENU_ITEM_HIDDEN)) {
    _showMenu();
  } else {
    _hideMenu();
  }
};

const _showMenu = () => {
  LINHAS_DO_ICONE.forEach((linha, index) => {
    switch (index) {
      case 0:
        linha.classList.remove(ICONE_LINHA_NORMAL);
        linha.classList.add(ICONE_LINHA_GIRAR_HORARIO);
        break;
      case 1:
        linha.classList.remove(ICONE_LINHA_NORMAL);
        linha.classList.add(ICONE_LINHA_HIDDEN);
        break;
      default:
        linha.classList.remove(ICONE_LINHA_NORMAL);
        linha.classList.add(ICONE_LINHA_GIRAR_ANTI_HORARIO);
        break;
    }
  });

  LISTA_ITEMS_MENU.classList.remove(MENU_ITEM_HIDDEN);
  LISTA_ITEMS_MENU.classList.add(MENU_ITEM_VISIBLE);

  document.body.style.overflowY = "hidden";
};

const _hideMenu = () => {
  LINHAS_DO_ICONE.forEach((linha, index) => {
    switch (index) {
      case 0:
        linha.classList.remove(ICONE_LINHA_GIRAR_HORARIO);
        linha.classList.add(ICONE_LINHA_NORMAL);
        break;
      case 1:
        setTimeout(() => {
          linha.classList.remove(ICONE_LINHA_HIDDEN);
          linha.classList.add(ICONE_LINHA_NORMAL);
        }, 250);
        break;
      default:
        linha.classList.remove(ICONE_LINHA_GIRAR_ANTI_HORARIO);
        linha.classList.add(ICONE_LINHA_NORMAL);
        break;
    }
  });

  LISTA_ITEMS_MENU.classList.remove(MENU_ITEM_VISIBLE);
  LISTA_ITEMS_MENU.classList.add(MENU_ITEM_HIDDEN);

  document.body.style.overflowY = "auto";
};

// Clique no botão hamburguers
ICONE_HAMBURGUER.addEventListener("click", () => _toggleMenu());

// Clique em cada item da lista do menu para fechar o menu
ITEMS_LISTA_MENU.forEach((item) =>
  item.addEventListener("click", () => _toggleMenu())
);
