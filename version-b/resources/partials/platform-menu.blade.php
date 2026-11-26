<!-- Platform Menu Partial -->
@php $platformLinks = [
    ['label' => 'Giunti Testing', 'href' => 'https://psy-portal.giuntitesting.com/login'],
    ['label' => 'Giunti Campus', 'href' => 'https://www.giunticampus.com/'],
    ['label' => 'Erica', 'href' => 'https://erica.giuntipsy.com/'],
    ['label' => 'BPA', 'href' => 'https://bpa.giuntipsy.com/'],
    ['label' => 'BFE', 'href' => 'https://bfe.giuntipsy.com/signin'],
]; ?>

<div class="relative group">
    <button
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="platform-menu"
        class="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
        onclick="$('#platform-menu').toggleClass('hidden')"
    >
        Accesso alla piattaforma
        <i class="fi fi-rs ChevronDownIcon"></i>
    </button>

    <div id="platform-menu" class="absolute right-0 top-full z-50 w-64 pt-2 transition duration-150 md:block hidden">
        <ul class="rounded-sm border border-line bg-paper p-1">
            @foreach ($platformLinks as $link)
            <li>
                <a href="{{ $link['href'] }}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary">
                    {{ $link['label'] }}
                </a>
            </li>
            @endforeach
        </ul>
    </div>
</div>