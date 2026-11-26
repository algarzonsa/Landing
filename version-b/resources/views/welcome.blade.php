@extends('layouts.app')

@section('content')

<!-- Header -->
<header class="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
    @include('partials.top-bar')
    <div class="shell flex h-[68px] items-center gap-4 lg:h-[76px] lg:gap-8">
        @include('partials.navbar')

        <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden w-52 lg:block xl:w-60">
                @include('partials.search-field')
            </div>

            <span class="hidden lg:block">
                <button
                    type="button"
                    onClick="$('#accedi').modal('toggle')"
                    aria-haspopup="dialog"
                    className="btn btn--secondary h-11 px-3.5 text-sm"
                >
                    <i class="fi fi-r UserIcon"></i> Accedi
                </button>
            </span>

            <button
                type="button"
                onClick="$('#carrello').modal('toggle')"
                aria-haspopup="dialog"
                aria-label="Apri il carrello"
                class="icon-btn relative"
            >
                <i class="fi fi-b BagIcon"></i>
                <span aria-hidden="true" class="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-white">
                    0
                </span>
            </button>

            <button
                ref="menuButton"
                type="button"
                aria-expanded="false"
                aria-controls="panel-mobile"
                onClick="$('#panel-mobile').toggleClass('hidden')"
                class="icon-btn lg:hidden"
            >
                <span class="sr-only">Menu</span>
                <i class="fi fi-m MenuIcon"></i>
            </button>
        </div>
    </div>
</header>

<!-- Hero -->
<section class="relative py-16 pt-14 sm:py-20 sm:pt-20 lg:pb-24 lg:pt-24">
    <Image
        src="/images/header/bg-header.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
    />
    <div aria-hidden="true" className="hero-overlay absolute inset-0 -z-10" />

    <div class="shell relative z-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
            <h1 id="hero-title" class="max-w-[16ch] text-balance font-display text-[clamp(2.75rem,6.2vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
                Ogni valutazione comincia da un ascolto.
            </h1>

            <p class="mt-6 max-w-[56ch] text-[17px] leading-7 text-ink-soft sm:mt-7 sm:text-lg sm:leading-8">
                Test, manuali e formazione per psicologi, scuole e organizzazioni.
                Strumenti selezionati con rigore scientifico, pensati per capire le
                persone e accompagnarle nel cambiamento.
            </p>

            <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#catalogo" class="btn btn--primary">
                    Esplora il catalogo
                    <i class="fi fi-ar ArrowUpRightIcon"></i>
                </a>
                <a href="#contatti" class="btn btn--secondary" onclick="$('#contatti-modal').modal('toggle')">
                    Parla con un consulente
                </a>
            </div>
        </div>

        <aside aria-labelledby="ambiti-title">
            <div class="rounded-md border border-line bg-paper p-6 shadow-panel sm:p-7">
                <h2 id="ambiti-title" class="border-b border-line pb-4 font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">
                    Ambiti di applicazione
                </h2>

                <ul>
                    @foreach($categorie as $categoria)
                    <li class="@if($loop->first)otherwise:border-t border-line/80@endif">
                        <a href="#catalogo" class="group grid grid-cols-[1fr_auto] items-center gap-4 py-4">
                            <span>
                                <span className="block text-[15px] font-medium leading-6 text-ink transition-colors group-hover:text-primary">
                                    {{ $categoria['nome'] }}
                                </span>
                                <span class="mt-0.5 block text-[13px] leading-5 text-ink-soft">
                                    {{ $categoria['descrizione'] }}
                                </span>
                            </span>
                            <span class="flex items-center gap-2 text-[13px] text-ink-soft">
                                {{ $categoria['totale'] }}
                                <i class="fi fi-rs ChevronRightIcon"></i>
                            </span>
                        </a>
                    </li>
                    @endforeach
                </ul>

                <p class="border-t border-line pt-4 text-[13px] text-ink-soft">
                    {{ $totalProductos }} strumenti disponibili in catalogo.
                </p>
            </div>
        </aside>
    </div>
</section>

<!-- Grilla de productos -->
<section class="py-12 bg-paper">
    <div class="shell">
        <div class="mb-8">
            <h2 class="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink mb-4">Catalogo</h2>
            <p class="text-[13px] text-ink-soft">Filtrar por categoría:</p>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn--secondary text-[12px] px-4 py-2" data-cat="Tutti">Tutti</button>
                @foreach($categorias as $cat)
                <button class="btn btn--secondary text-[12px] px-4 py-2 {{ request('cat') == $cat['nome'] ? 'bg-primary text-white' : 'text-ink-soft' }}" data-cat="{{ $cat['nome'] }}">{{ $cat['nome'] }}</button>
                @endforeach
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="grid-productos">
            @foreach($productos as $prod)
            @include('sections.product-card')
            @endforeach
        </div>
    </div>
</section>

<!-- Formulario de contacto -->
<section class="py-12" id="contatti">
    <div class="shell max-w-md mx-auto">
        <h2 class="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink mb-6">Contattaci</h2>

        <form id="form-contacto" novalidate>
            <div class="mb-4">
                <label for="nombre" class="block text-[13px] font-medium text-ink mb-2">Nome <span class="text-red-500">*</span></label>
                <input type="text" id="nombre" name="nombre" required minlength="2"
                    class="w-full rounded-md border border-line bg-surface px-4 py-3 text-[13px] font-medium text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-describedby="error-nombre">
                <p id="error-nombre" class="text-red-500 text-[12px] mt-2 hidden">Il nome deve avere almeno 2 caratteri.</p>
            </div>

            <div class="mb-4">
                <label for="email" class="block text-[13px] font-medium text-ink mb-2">Email <span class="text-red-500">*</span></label>
                <input type="email" id="email" name="email" required
                    class="w-full rounded-md border border-line bg-surface px-4 py-3 text-[13px] font-medium text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-describedby="error-email">
                <p id="error-email" class="text-red-500 text-[12px] mt-2 hidden">Inserisci un'email valida.</p>
            </div>

            <div class="mb-4">
                <label for="messaggio" class="block text-[13px] font-medium text-ink mb-2">Messaggio <span class="text-red-500">*</span></label>
                <textarea id="messaggio" name="messaggio" required minlength="10"
                    class="w-full rounded-md border border-line bg-surface px-4 py-3 text-[13px] font-medium text-ink resize-none focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-describedby="error-messaggio"></textarea>
                <p id="error-messaggio" class="text-red-500 text-[12px] mt-2 hidden">Il messaggio deve avere almeno 10 caratteri.</p>
            </div>

            <button type="submit"
                class="btn btn--primary w-full mt-6"
                onclick="return validarFormulario();">
                Invia richiesta
            </button>
        </form>
    </div>
</section>

<!-- Footer -->
<footer class="mt-12 border-t border-line bg-paper/80 py-8">
    <div class="shell flex flex-col lg:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2">
            <span class="text-[16px] font-medium text-ink">Giunti Psychometrics</span>
        </div>
        <div class="flex gap-2">
            <a href="#" class="text-ink-soft hover:text-primary transition-colors" aria-label="Facebook">
                <i class="fi fi-facebook-f"></i>
            </a>
            <a href="#" class="text-ink-soft hover:text-primary transition-colors" aria-label="Twitter">
                <i class="fi fi-twitter"></i>
            </a>
            <a href="#" class="text-ink-soft hover:text-primary transition-colors" aria-label="LinkedIn">
                <i class="fi fi-linkedin-in"></i>
            </a>
        </div>
        <p class="mt-2 text-sm text-ink-soft copyright">
            Copyright &copy; 2026 Giunti Psychometrics. All rights reserved.
        </p>
    </div>
</footer>

@push('scripts')
<script>
    // Inicialización de modales (usando el CSS de Tailwind/Alpine o un CDN)
    document.addEventListener('DOMContentLoaded', function() {
        // Elementos del menú móvil
        const menuBtn = document.querySelector('[ref="menuButton"]');
        const panel = document.getElementById('panel-mobile');

        if (menuBtn && panel) {
            menuBtn.addEventListener('click', function() {
                panel.classList.toggle('hidden');
            });
        }

        // Cerrar menú al hacer clic en un enlace
        const links = panel ? panel.querySelectorAll('a') : [];
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (panel) panel.classList.add('hidden');
            });
        });
    });

    // Validación del formulario
    function validarFormulario() {
        let valido = true;

        // Nombre
        const nombre = document.getElementById('nombre');
        const errorNombre = document.getElementById('error-nombre');
        if (nombre.value.length < 2) {
            errorNombre.classList.remove('hidden');
            valido = false;
        } else {
            errorNombre.classList.add('hidden');
        }

        // Email
        const email = document.getElementById('email');
        const errorEmail = document.getElementById('error-email');
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        if (!emailRegex.test(email.value)) {
            errorEmail.classList.remove('hidden');
            valido = false;
        } else {
            errorEmail.classList.add('hidden');
        }

        // Mensaje
        const messaggio = document.getElementById('messaggio');
        const errorMessaggio = document.getElementById('error-messaggio');
        if (messaggio.value.length < 10) {
            errorMessaggio.classList.remove('hidden');
            valido = false;
        } else {
            errorMessaggio.classList.add('hidden');
        }

        return valido;
    }
</script>
@endpush