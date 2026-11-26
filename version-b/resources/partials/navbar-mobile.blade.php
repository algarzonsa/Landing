<!-- Navbar Mobile -->
<nav aria-label="Navigazione principale" class="mt-4">
    <ul id="panel-mobile" class="hidden space-y-4">
        <li>
            <a href="#catalogo" class="block py-3 px-4 text-[15px] font-medium text-ink-soft border-b border-line/80 hover:text-primary transition-colors">
                Test
            </a>
        </li>
        <li>
            <a href="#formazione" class="block py-3 px-4 text-[15px] font-medium text-ink-soft border-b border-line/80 hover:text-primary transition-colors">
                Formazione
            </a>
        </li>
        <li>
            <a href="#risorse" class="block py-3 px-4 text-[15px] font-medium text-ink-soft border-b border-line/80 hover:text-primary transition-colors">
                Risorse
            </a>
        </li>
        <li>
            <a href="#contatti" class="block py-3 px-4 text-[15px] font-medium text-ink-soft border-b border-line/80 hover:text-primary transition-colors">
                Contatti
            </a>
        </li>
    </ul>
</nav>

<!-- Botón menú móvil -->
<button ref="menuButton" type="button" aria-expanded="false" aria-controls="panel-mobile" onclick="$('#panel-mobile').toggleClass('hidden')" class="lg:hidden mt-3">
    <span class="sr-only">Menu</span>
    <i class="fi fi-m MenuIcon"></i>
</button>