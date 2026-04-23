// Seleção do botão de voltar ao topo
const botaoTopo = document.getElementById("btn-topo");

// Mostra ou esconde o botão conforme a posição da página
window.addEventListener("scroll", () => {
  if (window.scrollY > 420) {
    botaoTopo.classList.add("visivel");
  } else {
    botaoTopo.classList.remove("visivel");
  }
});

// Regressa ao início com deslocação suave
botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animação de fade-in ao entrar no ecrã
const elementosRevelar = document.querySelectorAll(".revelar");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("ativo");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elementosRevelar.forEach((elemento) => observador.observe(elemento));
