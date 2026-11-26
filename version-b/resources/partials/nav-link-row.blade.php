<!-- Nav Link Row Partial -->
@php $isExternal = str_starts_with($href, 'http') ?? false; {{-- Laravel 11+ --}}

@if (!isset($isExternal)) { {{-- Laravel 10 y anterior --}}
    $isExternal = str_starts_with($href, 'http');
@endif}

<a
    href="{{ $href }}"
    {{ $isExternal ? 'target="_blank" rel="noopener noreferrer"' : '' }}
    class="group flex items-center justify-between border-b border-line py-3.5 text-[17px] font-medium text-ink transition-colors hover:text-primary focus-visible:text-primary"
>
    {{ $label }}
    {{-- Flecha solo para enlaces internos --}}
    @if (! $isExternal)
    <i class="fi fi-rs ChevronRightIcon h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-primary"/>{{/}}
    @endif}
</a>