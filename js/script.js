<script>
function enviarWhatsApp(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre');
  const servicio = document.getElementById('servicio');
  const mensaje = document.getElementById('mensaje');
  const confirmacion = document.getElementById('confirmacion');

  if (!nombre.value || !servicio.value) {
    nombre.classList.add('error');
    servicio.classList.add('error');
    return;
  }

  confirmacion.style.display = 'block';

  setTimeout(() => {
    const texto = `Hola, soy ${nombre.value}. Necesito el servicio de ${servicio.value}. ${mensaje.value}`;
    window.open(`https://wa.me/573107614795?text=${encodeURIComponent(texto)}`, '_blank');
    confirmacion.style.display = 'none';
  }, 1200);
}
</script>
