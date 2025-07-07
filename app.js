
  // Botão Adicionar
  const btnAdicionar = document.getElementById("btn-adicionar");
  if (btnAdicionar) {
    btnAdicionar.addEventListener("click", () => {
      alert("Você clicou em Adicionar!");
    });
  }

  // Botões Editar
  const editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Você clicou em Editar!");
    });
  });

  // Botões Deletar
  const deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Você clicou em Deletar!");
    });
  });


