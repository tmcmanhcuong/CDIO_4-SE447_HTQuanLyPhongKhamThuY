<template>
  <div class="bg-gray-100 border-b border-gray-300 px-4 md:px-14 flex items-center justify-between h-16 relative">
    <!-- Logo -->
    <a href="#" class="flex items-center gap-2 font-bold text-base text-teal-700 font-['Montserrat_Alternates']">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path d="M8 10c0-2 1-3 4-3s4 1 4 3c0 2-1 3-4 3s-4 1-4 3" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" />
      </svg>
      <span>PETTY</span>
    </a>

    <!-- Navigation – CĂN GIỮA MÀN HÌNH (chỉ desktop) -->
    <nav class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-2">
      <a href="#" class="nav-link">Trang Chủ</a>
      <a href="#services" class="nav-link">Dịch Vụ</a>
      <a href="#about" class="nav-link">Giới Thiệu</a>
      <a href="#policy" class="nav-link">Chính Sách</a>
      <a href="#forum" class="nav-link">Diễn Đàn</a>
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors">
      <svg class="w-6 h-6" :class="{ 'hidden': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg class="w-6 h-6" :class="{ 'hidden': !mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Desktop Buttons -->
    <div class="hidden md:flex gap-2">
      <a href="#" class="auth-btn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
          <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" />
          <path d="M6 21c0-4 3-7 6-7s6 3 6 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <span>Đăng Ký</span>
      </a>
      <a href="#" class="auth-btn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
          <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>Đăng Nhập</span>
      </a>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-gray-100 border-b border-gray-300 shadow-lg z-50">
      <div class="flex flex-col p-4 gap-2">
        <a href="#" class="mobile-nav-link">Trang Chủ</a>
        <a href="#services" class="mobile-nav-link">Dịch Vụ</a>
        <a href="#about" class="mobile-nav-link">Giới Thiệu</a>
        <a href="#policy" class="mobile-nav-link">Chính Sách</a>
        <a href="#forum" class="mobile-nav-link">Diễn Đàn</a>
        <div class="border-t border-gray-300 mt-2 pt-2 flex flex-col gap-2">
          <a href="#" class="mobile-auth-btn">Đăng Ký</a>
          <a href="#" class="mobile-auth-btn">Đăng Nhập</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State cho mobile menu
const mobileMenuOpen = ref(false)
</script>

<style scoped>
/* Desktop Nav Link */
.nav-link {
  @apply px-3 py-1.5 font-['Nunito_Sans'] font-bold text-base text-gray-500 rounded-md transition-all duration-200 hover:text-gray-900 hover:bg-gray-200/60;
}

/* Desktop Auth Buttons */
.auth-btn {
  @apply flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold text-gray-500 transition-all duration-200 hover:bg-gray-500/10 font-['DM_Sans'];
}

/* Mobile Nav Link */
.mobile-nav-link {
  @apply px-3 py-2 font-['Nunito_Sans'] font-bold text-base text-gray-700 rounded-md hover:bg-gray-200 transition-colors;
}

/* Mobile Auth Button */
.mobile-auth-btn {
  @apply flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200 font-['DM_Sans'] transition-colors;
}
</style>