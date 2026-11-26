with open('E:\\Pruebas\\Giunti Psychometrics\\landing1\\version-a\\components\\Header.tsx', 'r', encoding='utf-8') as f:
    c = f.read()
old = """      <div className="bg-primary text-white">
        <div className="shell flex h-9 items-center justify-between gap-4">
          <p className="truncate text-[12.5px] tracking-[0.005em] text-white/95">
            Spedizione gratuita per ordini superiori a 120 €
          </p>
          <div className="hidden shrink-0 items-center gap-4 text-[12.5px] sm:flex">
            <a
              href="#contatti"
              className="text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-white"
            >
              Assistenza
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-white/25" />
            <span className="text-white/75">Italiano</span>
            <span className="text-white/75">EUR</span>
          </div>
        </div>
      </div>"""
new = """      <div className="bg-primary text-white">
        <div className="shell flex h-9 items-center justify-center gap-8">
          <span className="text-[15px] font-medium text-[#F9CE23] whitespace-nowrap">
            Black Friday
          </span>
          <span className="text-[15px] font-medium text-white whitespace-nowrap">
            Sconti fino al -30%
          </span>
          <span className="text-[15px] font-medium text-white whitespace-nowrap">
            Scopri le offerte
          </span>
        </div>
      </div>"""
new_content = c.replace(old, new)
with open('E:\\Pruebas\\Giunti Psychometrics\\landing1\\version-a\\components\\Header.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Updated header')