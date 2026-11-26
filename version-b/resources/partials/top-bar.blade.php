<!-- Top Bar -->
<div class="border-b border-line bg-paper/90">
    <div class="shell flex h-10 items-center justify-between gap-6">
        <p class="truncate text-[13px] text-ink-soft">
            Spedizioni gratuite per gli ordini online
        </p>

        <div className="hidden shrink-0 items-center gap-5 md:flex">
            {{-- Corporate --}}
            <a href="https://corporate.giuntipsy.com/en-en/"
               target="_blank"
               rel="noopener noreferrer"
               class="text-[13px] font-medium text-ink-soft transition-colors hover:text-primary focus-visible:text-primary">
                Corporate
            </a>

            {{-- Aiuto --}}
            <a href="https://giuntipsy.zendesk.com/hc/it/"
               target="_blank"
               rel="noopener noreferrer"
               class="text-[13px] font-medium text-ink-soft transition-colors hover:text-primary focus-visible:text-primary">
                Aiuto
            </a>

            {{-- Desplegable plataformas --}}
            <div className="relative group">
                <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="platform-menu-mobile"
                    class="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
                    onclick="$('#platform-menu-mobile').toggleClass('hidden')"
                >
                    Accesso alla piattaforma
                    <i class="fi fi-rs ChevronDownIcon"></i>
                </button>

                <div id="platform-menu-mobile" class="absolute right-0 top-full z-50 w-64 pt-2 transition duration-150 hidden md:block">
                    <ul class="rounded-sm border border-line bg-paper p-1">
                        {{-- Giunti Testing --}}
                        <li>
                            <a href="https://psy-portal.giuntitesting.com/login"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary">
                                Giunti Testing
                            </a>
                        </li>
                        {{-- Giunti Campus --}}
                        <li>
                            <a href="https://www.giunticampus.com/"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary">
                                Giunti Campus
                            </a>
                        </li>
                        {{-- Erica --}}
                        <li>
                            <a href="https://erica.giuntipsy.com/"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary">
                                Erica
                            </a>
                        </li>
                        {{-- BPA --}}
                        <li>
                            <a href="https://bpa.giuntipsy.com/"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary">
                                BPA
                            </a>
                        </li>
                        {{-- BFE --}}
                        <li>
                            <a href="https://bfe.giuntipsy.com/signin"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary">
                                BFE
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>