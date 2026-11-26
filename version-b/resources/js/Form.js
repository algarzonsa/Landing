$(document).ready(function() {

    // Validación del formulario de contacto
    $('#form-contacto').on('submit', function(e) {
        let valido = true;

        // Nombre
        const nombre = $('#nombre');
        const errorNombre = $('#error-nombre');
        if (nombre.val().length < 2) {
            errorNombre.removeClass('hidden');
            valido = false;
        } else {
            errorNombre.addClass('hidden');
        }

        // Email
        const email = $('#email');
        const errorEmail = $('#error-email');
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        if (!emailRegex.test(email.val())) {
            errorEmail.removeClass('hidden');
            valido = false;
        } else {
            errorEmail.addClass('hidden');
        }

        // Mensaje
        const messaggio = $('#messaggio');
        const errorMessaggio = $('#error-messaggio');
        if (messaggio.val().length < 10) {
            errorMessaggio.removeClass('hidden');
            valido = false;
        } else {
            errorMessaggio.addClass('hidden');
        }

        if (!valido) {
            e.preventDefault();
        }
    });

    // Máscara para el campo nombre (mínimo 2 caracteres)
    $('#nombre').on('input', function() {
        if ($(this).val().length < 2) {
            $(this).addClass('border-red-500');
        } else {
            $(this).removeClass('border-red-500');
        }
    });

    // Efecto focus en inputs
    $('input, textarea').on('focus', function() {
        $(this).css('border-color', '#1b4f8a');
    }).on('blur', function() {
        $(this).css('border-color', '#cfdeed');
    });

});