$(document).ready(function() {

    // Menú móvil - toggle
    $('.menu-btn').on('click', function() {
        $('#panel-mobile').toggleClass('hidden');
    });

    // Cerrar menú al hacer clic en un enlace
    $('#panel-mobile a').on('click', function() {
        $('#panel-mobile').addClass('hidden');
    });

    // Filtro por categoría
    $('.categoria-btn').on('click', function() {
        const cat = $(this).data('cat');
        
        // Actualizar estado activo
        $('.categoria-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filtrar productos
        $('#grid-productos .product-card').each(function() {
            const categoria = $(this).data('categoria');
            if (cat === 'Tutti' || categoria === cat) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    });

    // Buscador
    $('#campo-busqueda').on('keyup', function() {
        const valor = $(this).val().toLowerCase();
        $('#grid-productos .product-card').each(function() {
            const nombre = $(this).data('nome').toLowerCase();
            const autor = $(this).data('autor').toLowerCase();
            if (nombre.includes(valor) || autor.includes(valor)) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    });

    // Desplegable plataformas en top bar
    $('.platform-menu-trigger').on('click', function() {
        $('#platform-menu-mobile').toggleClass('hidden');
    });

    // Cerrar desplegable al hacer clic fuera
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.platform-menu').length) {
            $('#platform-menu-mobile').addClass('hidden');
        }
    });

});