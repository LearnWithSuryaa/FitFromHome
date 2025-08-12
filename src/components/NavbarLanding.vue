<template>
  <nav
    class="fixed top-0 left-0 w-full py-4 lg:py-5 z-30 transition-all duration-300 ease-in-out"
    :class="{
      'bg-white/95 backdrop-blur-lg shadow-md': isScrolled,
      'bg-transparent': !isScrolled,
    }"
  >
    <div class="container mx-auto px-5 lg:px-8 flex justify-between items-center">
      <a
        href="#"
        @click.prevent="scrollToSection('#hero-section')"
        class="text-2xl lg:text-3xl font-bold transition-colors duration-300"
        :class="isScrolled ? 'text-[rgba(0,119,137,1)]' : 'text-white'"
      >
        FitFromHome
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-7 lg:space-x-10 items-center">
        <li>
          <a
            href="#"
            @click.prevent="scrollToSection('#features-teaser')"
            class="text-base font-medium hover:text-[rgba(0,119,137,1)] transition-colors duration-200"
            :class="isScrolled ? 'text-gray-600' : 'text-gray-100'"
          >Fitur</a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollToSection('#food-section')"
            class="text-base font-medium hover:text-[rgba(0,119,137,1)] transition-colors duration-200"
            :class="isScrolled ? 'text-gray-600' : 'text-gray-100'"
          >Resep</a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollToSection('#exercise-section')"
            class="text-base font-medium hover:text-[rgba(0,119,137,1)] transition-colors duration-200"
            :class="isScrolled ? 'text-gray-600' : 'text-gray-100'"
          >Latihan</a>
        </li>
        <li>
          <button
            @click="handleNavigation('/dashboard/bmi')"
            class="bg-[rgba(0,119,137,1)] hover:bg-[rgba(0,90,105,1)] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[rgba(0,119,137,0.5)] focus:ring-offset-2"
          >
            Mulai Gratis
          </button>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileNav"
        class="lg:hidden text-3xl p-1 -mr-1 rounded-md focus:outline-none focus:ring-2 focus:ring-inset"
        :class="isScrolled ? 'text-[rgba(0,119,137,1)] focus:ring-[rgba(0,119,137,0.5)]' : 'text-white focus:ring-white/70'"
      >
        <span v-if="!isMobileNavOpen" class="block h-7 w-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
        <span v-else class="block h-7 w-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>
    </div>

    <!-- Overlay -->
    <transition name="fade">
      <div
        v-show="isMobileNavOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="isMobileNavOpen = false"
      ></div>
    </transition>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <aside
        v-show="isMobileNavOpen"
        class="fixed top-0 left-0 h-full w-64 bg-slate-800 text-gray-100 shadow-xl z-50 flex flex-col p-6 lg:hidden"
      >
        <div class="flex justify-between items-center mb-8">
          <span class="text-xl font-bold text-white">Menu</span>
          <button @click="isMobileNavOpen = false" class="text-gray-300 hover:text-white text-2xl">&times;</button>
        </div>
        <ul class="flex flex-col space-y-3">
          <li>
            <a
              href="#"
              @click.prevent="scrollToSection('#features-teaser'); isMobileNavOpen = false"
              class="block py-2.5 px-3 rounded-md hover:bg-slate-700 transition-colors duration-200 font-medium"
            >Fitur</a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="scrollToSection('#food-section'); isMobileNavOpen = false"
              class="block py-2.5 px-3 rounded-md hover:bg-slate-700 transition-colors duration-200 font-medium"
            >Resep</a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="scrollToSection('#exercise-section'); isMobileNavOpen = false"
              class="block py-2.5 px-3 rounded-md hover:bg-slate-700 transition-colors duration-200 font-medium"
            >Latihan</a>
          </li>
          <li class="pt-4">
            <button
              @click="handleNavigation('/dashboard/bmi')"
              class="w-full bg-[rgba(0,119,137,1)] hover:bg-[rgba(0,90,105,1)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md text-sm"
            >
              Mulai Gratis
            </button>
          </li>
        </ul>
      </aside>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavbarLanding',
  data() {
    return {
      isScrolled: false,
      isMobileNavOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll() {
      this.isScrolled = window.scrollY > 30
    },
    scrollToSection(selector) {
      const el = document.querySelector(selector)
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    },
    handleNavigation(path) {
      this.$router.push(path)
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
