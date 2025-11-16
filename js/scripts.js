document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    if (!form) return;

document.getElementById("modo-escuro")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document..getElementById("alto-contraste")?.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});
    
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");

    cpfInput.addEventListener("input", function () {
        let value = cpfInput.value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = value;
    });

    telefoneInput.addEventListener("input", function () {
        let value = telefoneInput.value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
        telefoneInput.value = value;
    });

    cepInput.addEventListener("input", function () {
        let value = cepInput.value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
        cepInput.value = value;
    });

     form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dados = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      dataNasc: form.dataNasc.value,
      endereco: form.endereco.value.trim(),
      cep: form.cep.value.trim(),
      cidade: form.cidade.value.trim(),
      estado: form.estado.value.trim(),
    };

    // Validação básica
    if (Object.values(dados).some(v => v === "")) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Pegar lista já existente ou criar nova
    const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

    voluntarios.push(dados);
    localStorage.setItem("voluntarios", JSON.stringify(voluntarios));

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
});
