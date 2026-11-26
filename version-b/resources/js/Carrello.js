$(document).ready(function() {

    // Carrito mínimo - simulación
    let carrello = [];

    // Añadir al carrito
    $('.aggiungi-al-carrello').on('click', function() {
        const prodId = $(this).data('id');
        const esiste = carrello.some(item => item.id === prodId);
        
        if (!esiste) {
            carrello.push({ id: prodId, qty: 1 });
        } else {
            carrello = carrello.map(item => item.id === prodId ? { ...item, qty: item.qty + 1 } : item);
        }
        
        aggiornaContatore();
    });

    // Quitar del carrito
    $('.rimuovi-dal-carrello').on('click', function() {
        const prodId = $(this).data('id');
        carrello = carrello.filter(item => item.id !== prodId);
        aggiornaContatore();
    });

    function aggiornaContatore() {
        const total = carrello.reduce((sum, item) => sum + item.qty, 0);
        $('.contatore-carrello').text(total);
        if (total > 0) {
            $('.carrello').removeClass('hidden');
        } else {
            $('.carrello').addClass('hidden');
        }
    }

});