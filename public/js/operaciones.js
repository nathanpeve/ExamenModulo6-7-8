//funcion para formatear fecha:
function formatearFechaChile(fechaISO) {
    if (!fechaISO) return "N/A";

    // Divisiión de String
    const [fechaParte, horaParte] = fechaISO.split('T'); 
    const [anio, mes, dia] = fechaParte.split('-');
    const horaSimp = horaParte.substring(0, 5); // "HH:MM"

    // Retorna Formato: DD/MM/AA - HH:MM
    return `${dia}/${mes}/${anio.slice(-2)} - ${horaSimp}`;
}

// Formato para Moneda (Monto y Precio):
const formatearMoneda = (v) => {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
    }).format(v);
};

// Formato para Cantidad sin decimales
const formatearCantidad = (v) => {
    return new Intl.NumberFormat('es-CL', {
        maximumFractionDigits: 0
    }).format(v);
};

async function cargarFondos() {
  const res = await fetch('/api/fondos');
  const data = await res.json();

  const select = document.getElementById('fondo');
  select.innerHTML = `<option value="">Todos</option>`;

  data.forEach((f) => {
    select.innerHTML += `<option value="${f.id_fondo}">${f.nombre}</option>`;
  });
}

async function buscar() {
  const fondo = document.getElementById('fondo').value;
  const tipo = document.getElementById('tipo').value;
  const desde = document.getElementById('desde').value;
  const hasta = document.getElementById('hasta').value;

  const params = new URLSearchParams({
    id_fondo: fondo,
    tipo,
    fecha_desde: desde,
    fecha_hasta: hasta,
  });

  const res = await fetch(`/api/operaciones?${params}`);

  const response = await res.json();

  if (response.status === 'error') {
    alert(response.message);
    return;
  }

  const tabla = document.getElementById('tabla');
  tabla.innerHTML = '';

  const data = response.data;

  if (data.length === 0) {
    tabla.innerHTML = `
                    <tr>
                        <td colspan="8" class="text-center text-muted">
                            No se encontraron operaciones.
                        </td>
                    </tr>
                `;
    return;
  }

  // OK
  data.forEach((o) => {
    tabla.innerHTML += `
                <tr>
                    <td>${o.id_operacion}</td>
                    <td>${o.fondo_nombre}</td>
                    <td>${o.tipo}</td>
                    <td>${formatearFechaChile(o.fecha)}</td>
                    <td class="text-end">${formatearMoneda(o.monto)}</td>
                    <td>${o.id_nemotecnico || ''}</td>
                    <td class="text-end">${formatearCantidad(o.cantidad)}</td>
                    <td class="text-end">${formatearMoneda(o.precio)}</td>
                </tr>
                `;
  });
}

cargarFondos();
