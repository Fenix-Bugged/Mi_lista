const input = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

btnAgregar.onclick = () => {
  const texto = input.value.trim();
  
  if (texto === "") {
   alert("Por favor escribe una tarea antes de agregarla."); //lo unico que aprendí con malaver
    return;
  }
  // Crear elementos
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnEliminar = document.createElement("button");

  span.textContent = texto;
  btnEliminar.textContent = "X";
  btnEliminar.classList.add("btn-eliminar");

  // Eventos
  span.onclick = () => {
    li.classList.toggle("completada");
  };

  btnEliminar.onclick = () => {
    li.remove();
  };

  // Estructura final
  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  // Limpiar input
  input.value = "";
};
