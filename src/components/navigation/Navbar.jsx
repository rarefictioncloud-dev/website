import { useState } from "react";

const navigation = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "#about",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50

        px-3
        pt-[51px]

        sm:px-4
        sm:pt-[52px]

        md:px-6
        md:pt-5
      "
    >
      {/* =====================================================
          FLOATING NAVBAR
      ====================================================== */}

      <nav
        className="
          mx-auto
          flex
          h-[58px]
          max-w-[980px]
          items-center
          rounded-full
          border
          border-white/[0.12]
          bg-[#0B0B0B]/90
          px-4
          shadow-[0_12px_40px_rgba(0,0,0,0.4)]
          backdrop-blur-xl

          sm:h-[62px]
          sm:px-5

          md:h-[72px]
          md:px-6
        "
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <a
          href="/"
          aria-label="Rarefiction Media home"
          className="shrink-0"
        >
          <span
            className="
              text-[16px]
              font-black
              uppercase
              tracking-[-0.07em]
              text-[#F5F5F5]

              sm:text-[18px]

              md:text-[22px]
            "
          >
            rarefiction
            <span className="text-[#E10600]">.</span>
          </span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                rounded-full
                px-4
                py-2.5
                text-[14px]
                font-medium
                text-white/60
                transition-all
                duration-300
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="
              ml-3
              rounded-full
              bg-[#E10600]
              px-6
              py-3
              text-[14px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              active:scale-95
            "
          >
            Request a quote
          </a>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          className="
            ml-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            transition
            hover:bg-white/10
            active:scale-95

            sm:h-11
            sm:w-11

            md:hidden
          "
        >
          <span
            className="
              relative
              flex
              h-4
              w-4
              items-center
              justify-center
            "
          >
            <span
              className={`
                absolute
                block
                h-[1.5px]
                w-4
                bg-white
                transition-transform
                duration-300

                ${
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-[3px]"
                }
              `}
            />

            <span
              className={`
                absolute
                block
                h-[1.5px]
                w-4
                bg-white
                transition-transform
                duration-300

                ${
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-[3px]"
                }
              `}
            />
          </span>
        </button>
      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`
          mx-auto
          mt-2
          max-w-[980px]
          overflow-hidden
          rounded-[24px]
          border
          border-white/[0.1]
          bg-[#0B0B0B]/95
          shadow-[0_20px_50px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          transition-all
          duration-300

          md:hidden

          ${
            menuOpen
              ? "max-h-[300px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col p-2.5">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="
                flex
                min-h-[52px]
                items-center
                rounded-[18px]
                px-4
                text-[15px]
                font-medium
                text-white/70
                transition
                hover:bg-white/[0.06]
                hover:text-white
                active:bg-white/[0.08]
              "
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-1
              flex
              min-h-[54px]
              items-center
              justify-center
              rounded-[18px]
              bg-[#E10600]
              px-5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#F5F5F5]
              hover:text-black
              active:scale-[0.98]
            "
          >
            Request a quote
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;