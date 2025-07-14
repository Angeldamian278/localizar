const form = document.getElementById("form-agenda");
const lista = document.getElementById("lista-citas");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const cita = document.createElement("p");
    cita.textContent = `📅 ${nombre} - ${fecha} a las ${hora}`;
    lista.appendChild(cita);

    form.reset();
});