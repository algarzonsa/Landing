<!DOCTYPE html>
<html lang="it" dir="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'">

    <title>Giunti Psychometrics - Catalogo Tests e Formazione Professionale</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon.ico') }}">
</head>
<body class="font-sans">

@yield('content')

<!-- Flash message -->
@if (session('status'))
<div class="fixed top-4 right-4 px-6 py-3 rounded-md bg-green-100 text-green-800 animate-in fade-in-duration-500" role="alert">
    <span class="font-medium">{{ session('status') }}</span>
</div>
@endif

<!-- Footer -->
<footer class="mt-12 border-t border-line bg-paper/80 py-8">
    <div class="shell flex flex-col lg:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2">
            <span class="text-[16px] font-medium text-ink">Giunti Psychometrics</span>
        </div>
        <div class="flex gap-2">
            <!-- Íconos redes sociales placeholder -->
            <a href="#" class="text-ink-soft hover:text-primary transition-colors" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-ink-soft hover:text-primary transition-colors" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-ink-soft hover:text-primary transition-colors" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
        <p class="mt-2 text-sm text-ink-soft copyright">
            Copyright &copy; 2026 Giunti Psychometrics. All rights reserved.
        </p>
    </div>
</footer>

<!-- Scripts -->
@stack('scripts')
@push('scripts')
<script src="{{ mix('js/app.js') }}" defer></script>
@endpush

</body>
</html>