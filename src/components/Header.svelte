<script>
  import Logo from './Logo.svelte'
  let isActiveMobileMenu = false;
  const handleClickMenu = () => (isActiveMobileMenu = !isActiveMobileMenu);
  const navlinks = [
    { link: "Inicio", to: "/" },
    { link: "Nosotros", to: "/nosotros" },
    { link: "Servicios", to: "/servicios" },
    { link: "FAQs", to: "/faqs" },
    { link: "Contactos", to: "/contactos" },
  ];
</script>

<header class="shadow fixed w-full h-14 z-10">
  <nav class="flex flex-col relative justify-between items-start pl-6 py-3 bg-secondary-200 shadow-lg md:pr-6 md:flex-row md:items-center overflow-hidden">
    <Logo />
    <button 
      class="absolute top-6 right-4 flex flex-col justify-between w-8 h-5 md:hidden" 
      on:click={handleClickMenu}
    >
      <span 
        class="{isActiveMobileMenu ? "absolute top-2 rotate-45" : ''} h-1 w-full bg-white rounded-xl transition-all duration-200 ease-in"
      />
      <span 
        class="{isActiveMobileMenu ? 'bg-transparent' : 'bg-white'} h-1 w-full rounded-xl"
      />
      <span 
        class="{isActiveMobileMenu ? "absolute top-2 rotate-[-45deg]" : ''} h-1 w-full bg-white rounded-xl transition-all duration-200 ease-in"
      />
    </button>
    <ul class="{isActiveMobileMenu ? "max-md:max-h-52" : "max-md:max-h-0"} flex flex-col md:flex-row max-md:w-full h-full m-0 py-0 px-4 tansition ease-linear duration-300">
      {#each navlinks as navlink}
        <li class="list-none text-right">
          <a 
            class="text-while block font-semibold py-2 hover:text-white/80 text-white/50 md:p-4" 
            href={navlink.to}
          >
            {navlink.link}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
