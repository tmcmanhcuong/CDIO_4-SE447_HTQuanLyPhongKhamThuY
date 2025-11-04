<template>
  <!-- Header Component - Desktop & Mobile Responsive -->
  <header
    class="fixed top-0 left-0 right-0 z-50 px-6 md:px-14 py-0 h-16 flex items-center justify-between transition-all duration-300"
    :class="isScrolled ? 'bg-[#eeeeee]/40 backdrop-blur-md shadow-md border-b border-[#d4d4d8]/50' : 'bg-[#eeeeee] border-b border-[#d4d4d8]'">

    <!-- Logo Section -->
    <router-link to="/" class="flex items-center gap-2 h-8 shrink-0">
      <!-- Petty Icon -->
      <div class="w-32 h-8 relative">
        <img src="/src/assets/img_imports/Petty Logo.png" alt="Petty Icon" class="w-full h-full object-contain" />
      </div>
    </router-link>

    <!-- Desktop Navigation Menu -->
    <nav class="hidden md:flex items-center gap-1.5 h-12">
      <!-- Trang Chủ -->
      <router-link to="/"
        class="flex items-center px-2.5 py-1.5 font-['Nunito_Sans'] font-bold text-base leading-5 text-gray-500 rounded-md transition-all duration-200 hover:text-black whitespace-nowrap"
        active-class="!text-[#222831] !font-black">
        Trang Chủ
      </router-link>

      <!-- Dịch Vụ -->
      <router-link to="/dich-vu"
        class="flex items-center px-2.5 py-1.5 font-['Nunito_Sans'] font-bold text-base leading-5 text-gray-500 rounded-md transition-all duration-200 hover:text-black whitespace-nowrap"
        active-class="!text-[#222831] !font-black">
        Dịch Vụ
      </router-link>

      <!-- Giới Thiệu -->
      <router-link to="/gioi-thieu"
        class="flex items-center px-2.5 py-1.5 font-['Nunito_Sans'] font-bold text-base leading-5 text-gray-500 rounded-md transition-all duration-200 hover:text-black whitespace-nowrap"
        active-class="!text-[#222831] !font-black">
        Giới Thiệu
      </router-link>

      <!-- Liên Hệ -->
      <router-link to="/lien-he"
        class="flex items-center px-2.5 py-1.5 font-['Nunito_Sans'] font-bold text-base leading-5 text-gray-500 rounded-md transition-all duration-200 hover:text-black whitespace-nowrap"
        active-class="!text-[#222831] !font-black">
        Liên Hệ
      </router-link>

      <!-- Diễn Đàn -->
      <router-link to="/dien-dan"
        class="flex items-center gap-0 px-2.5 py-1.5 font-['Nunito_Sans'] font-bold text-base leading-5 text-gray-500 rounded-md transition-all duration-200 hover:text-black whitespace-nowrap"
        active-class="!text-[#222831] !font-black">
        <span>Diễn Đàn</span>
        <!-- External Link Icon - Import từ file SVG -->
        <ArrowIcon class="w-3 h-3 ml-0.5 [&_path]:stroke-[#90a1b9]" />
      </router-link>
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="mobileMenuOpen = !mobileMenuOpen"
      class="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors z-50" aria-label="Toggle menu">
      <svg class="w-6 h-6 text-gray-600" :class="{ 'hidden': mobileMenuOpen }" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg class="w-6 h-6 text-gray-600" :class="{ 'hidden': !mobileMenuOpen }" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Right Side Buttons (Desktop) -->
    <div class="hidden md:flex items-center gap-1.5 shrink-0">
      <!-- Đăng Ký Button -->
      <router-link to="/khach-hang/dang-ky" v-slot="{ isActive }" custom>
        <div :class="[
          'flex items-center gap-1.5 p-1.5 font-[\'Nunito Sans\'] font-bold text-sm leading-5 rounded-md transition-all duration-200 hover:bg-slate-50 hover:text-black cursor-pointer group',
          isActive ? '!bg-white !text-black' : 'text-gray-500'
        ]" @click="$router.push('/khach-hang/dang-ky')">
          <Register :class="[
            'w-6 h-6 transition-all',
            isActive ? '[&_path]:stroke-black' : '[&_path]:stroke-gray-500 group-hover:[&_path]:stroke-black'
          ]" />
          <span>Đăng Ký</span>
        </div>
      </router-link>

      <!-- Đăng Nhập Button -->
      <router-link to="/khach-hang/dang-nhap" v-slot="{ isActive }" custom>
        <div :class="[
          'flex items-center gap-1.5 p-1.5 font-[\'Nunito Sans\'] font-bold text-sm leading-5 rounded-md transition-all duration-200 hover:bg-slate-50 hover:text-black cursor-pointer group',
          isActive ? '!bg-white !text-black' : 'text-gray-500'
        ]" @click="$router.push('/khach-hang/dang-nhap')">
          <LogIn :class="[
            'w-6 h-6 transition-all',
            isActive ? '[&_path]:stroke-black' : '[&_path]:stroke-gray-500 group-hover:[&_path]:stroke-black'
          ]" />
          <span>Đăng Nhập</span>
        </div>
      </router-link>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="mobileMenuOpen"
      class="md:hidden absolute top-16 left-0 right-0 bg-[#eeeeee] border-b border-[#d4d4d8] shadow-lg z-40">
      <div class="flex flex-col p-4 gap-2">
        <!-- Mobile Navigation Links -->
        <router-link to="/"
          class="px-4 py-3 font-['Nunito_Sans'] font-bold text-base text-gray-700 rounded-md transition-colors hover:bg-[#d4d4d8]"
          @click="mobileMenuOpen = false">
          Trang Chủ
        </router-link>
        <router-link to="/dich-vu"
          class="px-4 py-3 font-['Nunito_Sans'] font-bold text-base text-gray-700 rounded-md transition-colors hover:bg-[#d4d4d8]"
          @click="mobileMenuOpen = false">
          Dịch Vụ
        </router-link>
        <router-link to="/gioi-thieu"
          class="px-4 py-3 font-['Nunito_Sans'] font-bold text-base text-gray-700 rounded-md transition-colors hover:bg-[#d4d4d8]"
          @click="mobileMenuOpen = false">
          Giới Thiệu
        </router-link>
        <router-link to="/lien-he"
          class="px-4 py-3 font-['Nunito_Sans'] font-bold text-base text-gray-700 rounded-md transition-colors hover:bg-[#d4d4d8]"
          @click="mobileMenuOpen = false">
          Liên Hệ
        </router-link>
        <router-link to="/dien-dan"
          class="px-4 py-3 font-['Nunito_Sans'] font-bold text-base text-gray-700 rounded-md transition-colors hover:bg-[#d4d4d8]"
          @click="mobileMenuOpen = false">
          Diễn Đàn
        </router-link>

        <!-- Mobile Auth Buttons -->
        <div class="border-t border-gray-300 mt-2 pt-2 flex flex-col gap-2">
          <a href="#"
            class="flex items-center gap-2 px-4 py-3 font-['DM_Sans'] font-semibold text-sm text-gray-600 transition-colors rounded-md hover:bg-[#d4d4d8]">
            Đăng Ký
          </a>
          <a href="#"
            class="flex items-center gap-2 px-4 py-3 font-['DM_Sans'] font-semibold text-sm text-gray-600 transition-colors rounded-md hover:bg-[#d4d4d8]">
            Đăng Nhập
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ArrowIcon from '../../assets/svg/arrow-up-right.svg'
import Register from '../../assets/svg/registered.svg'
import LogIn from '../../assets/svg/log-in.svg'

// State for mobile menu toggle
const mobileMenuOpen = ref(false)

// State for scroll detection
const isScrolled = ref(false)

// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

// Add scroll listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove scroll listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 
  Tất cả styling đã được chuyển sang Tailwind CSS!
  Không cần custom CSS nữa vì Tailwind đã cover hết.
*/
</style>