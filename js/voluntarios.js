document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("listaVoluntarios");
  const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

  if (voluntarios.length === 0) {
    lista.innerHTML = "<li>Nenhum voluntário cadastrado ainda.</li>";
    return;
  }

  voluntarios.forEach((v, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${v.nome}</strong> - ${v.cidade}/${v.estado}<br>
      <small>${v.email} | ${v.telefone}</small>
      <button class="remover" data-index="${i}">EXCLUIR</button>
    `;
    lista.appendChild(li);
  });

  lista.addEventListener("click", (e) => {
    if (e.target.classList.contains("remover")) {
      const index = e.target.dataset.index;
      voluntarios.splice(index, 1);
      localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
      location.reload();
    }
  });
});