function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#050505]
        text-[#F5F5F5]
      "
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <video
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/media/videos/bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          VIDEO OVERLAYS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-black/35
          via-transparent
          to-black/85

          md:from-black/60
          md:via-black/15
          md:to-black/80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/35
          via-transparent
          to-black/10
        "
      />

      {/* =====================================================
          RED ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-35%]
          top-[28%]
          h-[80vw]
          w-[80vw]
          rounded-full
          bg-[#E10600]/10
          blur-[100px]
          mix-blend-screen

          md:right-[-15%]
          md:top-[10%]
          md:h-[55vw]
          md:w-[55vw]
          md:blur-[140px]
        "
      />

      {/* =====================================================
          MOBILE HERO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          flex-col
          justify-end
          px-5
          pb-8
          pt-24

          sm:px-7
          sm:pb-10

          md:hidden
        "
      >
        {/* Mobile side marker */}

        <div
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            flex
            -translate-y-1/2
            rotate-90
            items-center
            gap-3
            text-[8px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          <span className="h-px w-8 bg-white/30" />
          RFM / 01
        </div>

        {/* =================================================
            MOBILE CONTENT

            Moved upward by approximately 1cm.
        ================================================== */}

        <div
          className="
            relative
            -translate-y-[8vh]

            sm:-translate-y-[7vh]
          "
        >
          {/* =================================================
              TAGLINE
          ================================================== */}

          <div
            className="
              mb-6
              flex
              items-center
              gap-2.5
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]
                shrink-0
                rounded-full
                bg-[#E10600]
                shadow-[0_0_14px_rgba(225,6,0,0.9)]
              "
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-white/75
              "
            >
              Where Fiction Meets Function.
            </span>
          </div>

          {/* =================================================
              MOBILE HEADLINE
          ================================================== */}

          <h1
            className="
              uppercase
              font-black
              tracking-[-0.075em]
              leading-[0.82]
            "
          >
            <span
              className="
                block
                text-[16.5vw]
                text-[#F5F5F5]
              "
            >
              WE MAKE
            </span>

            <span
              className="
                block
                text-[16.5vw]
                text-[#F5F5F5]
              "
            >
              BRANDS
            </span>

            <span
              className="
                block
                text-[16.2vw]
                text-[#E10600]
                drop-shadow-[0_0_25px_rgba(225,6,0,0.18)]
              "
            >
              IMPOSSIBLE
            </span>

            <span
              className="
                block
                text-[16.5vw]
                text-[#F5F5F5]
              "
            >
              TO IGNORE
              <span className="text-[#E10600]">.</span>
            </span>
          </h1>

          {/* =================================================
              DIVIDER

              More breathing room from headline.
          ================================================== */}

          <div
            className="
              mt-7
              h-px
              w-full
              bg-white/20
            "
          />

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-5
              max-w-[320px]
              text-[11px]
              leading-[1.65]
              text-white/75
            "
          >
            From brand strategy to production, digital and
            content — we create work that stays with people.
          </p>

          {/* =================================================
              CTA

              More breathing room from description.
          ================================================== */}

          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-2.5
            "
          >
            <a
              href="#work"
              className="
                flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-white
                px-3
                text-[11px]
                font-bold
                text-black
                transition-all
                duration-300
                active:scale-[0.97]
              "
            >
              View our work
            </a>

            <a
              href="#contact"
              className="
                flex
                h-12
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/20
                px-3
                text-[11px]
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                active:scale-[0.97]
              "
            >
              Request a quote
              <span className="ml-1.5 text-[#E10600]">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* =================================================
            MOBILE SCROLL
        ================================================== */}

        <div
          className="
            mt-[-2vh]
            flex
            items-center
            justify-center
            gap-2
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/35
          "
        >
          <span className="h-px w-5 bg-white/20" />
          Scroll
          <span className="h-px w-5 bg-white/20" />
        </div>
      </div>

      {/* =====================================================
          DESKTOP / LAPTOP HERO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          min-h-screen
          flex-col
          justify-end
          px-10
          pb-12
          pt-32

          md:flex
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            flex-1
            flex-col
            justify-end
          "
        >
          {/* Desktop tagline */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#E10600]
                shadow-[0_0_16px_rgba(225,6,0,0.9)]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/75
              "
            >
              Where Fiction Meets Function.
            </span>
          </div>

          {/* Desktop headline */}

          <h1
            className="
              max-w-[1150px]
              text-[clamp(3.6rem,9.5vw,9.5rem)]
              font-black
              uppercase
              leading-[0.79]
              tracking-[-0.075em]
              text-[#F5F5F5]
            "
          >
            <span className="block">
              We make
            </span>

            <span className="block">
              brands
            </span>

            <span className="block text-[#E10600]">
              impossible
            </span>

            <span className="block">
              to ignore
              <span className="text-[#E10600]">.</span>
            </span>
          </h1>

          {/* Desktop bottom */}

          <div
            className="
              mt-9
              flex
              flex-row
              items-end
              justify-between
              gap-7
              border-t
              border-white/20
              pt-6
            "
          >
            <p
              className="
                max-w-xl
                text-lg
                leading-relaxed
                text-white/75
              "
            >
              From brand strategy to production, digital and
              content — we create work that stays with people.
            </p>

            <div
              className="
                flex
                gap-3
              "
            >
              <a
                href="#work"
                className="
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#E10600]
                  hover:text-white
                "
              >
                View our work
              </a>

              <a
                href="#contact"
                className="
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Request a quote
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop scroll */}

        <div
          className="
            absolute
            bottom-7
            right-8
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
}

export default Hero;