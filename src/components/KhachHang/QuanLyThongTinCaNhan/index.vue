<template>
    <div class="min-h-screen">
      <div class="container max-w-6xl mx-auto px-6 py-8 md:px-12 lg:px-20">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-lg font-semibold mb-8">
          <img src="https://www.figma.com/api/mcp/asset/1d75c94f-d14c-428b-bb1d-c3790ef43737" alt="Home" class="w-5 h-5" />
          <span class="text-gray-400">Trang chủ</span>
          <span class="text-black text-2xl">/</span>
          <span class="underline text-black">Thông tin cá nhân</span>
        </nav>
  
        <!-- Personal Information Card -->
        <div class="bg-white border border-gray-100 rounded-2xl p-8 mb-6">
          <div class="mb-8">
            <h1 class="text-2xl font-bold text-black mb-1">Thông tin cá nhân</h1>
            <p class="text-xl font-semibold text-gray-500">Quản lý thông tin tài khoản và cài đặt cá nhân của bạn</p>
          </div>
  
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Avatar Section -->
            <div class="flex flex-col items-center gap-4">
              <div class="w-32 h-32 bg-teal-200 rounded-full flex items-center justify-center text-2xl font-semibold text-[#2f5755]">
                NV
              </div>
              <button @click="onAvatarClick" class="flex items-center gap-3 px-4 py-2 border border-black/40 rounded-lg hover:bg-gray-100 transition">
                <img src="https://www.figma.com/api/mcp/asset/eb992b41-f02a-470f-a22e-4159ca1002da" alt="Camera" class="w-4 h-4" />
                <span class="font-semibold">Ảnh đại diện</span>
              </button>
            </div>
  
            <!-- Form Section -->
            <form class="flex-1 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block font-semibold text-lg mb-2">Họ và tên *</label>
                  <input v-model="form.name" type="text" :readonly="!isEditing" class="w-full h-11 bg-gray-200 border border-black/10 rounded-lg px-3 font-semibold text-base focus:outline-none focus:border-teal-600" :class="{ 'opacity-50': !isEditing, 'opacity-100': isEditing }" />
                </div>
                <div>
                  <label class="block font-semibold text-lg mb-2">Số điện thoại *</label>
                  <input v-model="form.phone" type="tel" :readonly="!isEditing" class="w-full h-11 bg-gray-200 border border-black/10 rounded-lg px-3 font-semibold text-base focus:outline-none focus:border-teal-600" :class="{ 'opacity-50': !isEditing, 'opacity-100': isEditing }" />
                </div>
              </div>
  
              <div>
                <label class="block font-semibold text-lg mb-2">Email *</label>
                <input v-model="form.email" type="email" :readonly="!isEditing" class="w-full h-11 bg-gray-200 border border-black/10 rounded-lg px-3 font-semibold text-base focus:outline-none focus:border-teal-600" :class="{ 'opacity-50': !isEditing, 'opacity-100': isEditing }" />
              </div>
  
              <div>
                <label class="block font-semibold text-lg mb-2">Địa chỉ</label>
                <input v-model="form.address" type="text" :readonly="!isEditing" class="w-full h-11 bg-gray-200 border border-black/10 rounded-lg px-3 font-semibold text-base focus:outline-none focus:border-teal-600" :class="{ 'opacity-50': !isEditing, 'opacity-100': isEditing }" />
              </div>
  
              <div>
                <label class="block font-semibold text-lg mb-2">Zalo liên kết</label>
                <input v-model="form.zalo" type="text" :readonly="!isEditing" class="w-full h-11 bg-gray-200 border border-black/10 rounded-lg px-3 font-semibold text-base focus:outline-none focus:border-teal-600" :class="{ 'opacity-50': !isEditing, 'opacity-100': isEditing }" />
                <p class="text-sm italic text-gray-400 mt-1">Liên kết Zalo để nhận thông báo nhanh về lịch hẹn</p>
              </div>
  
              <button type="button" @click="toggleEdit" class="px-5 py-2 border border-black/30 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                {{ isEditing ? 'Lưu thông tin' : 'Chỉnh sửa thông tin' }}
              </button>
            </form>
          </div>
        </div>
  
        <!-- Security Card -->
        <div class="bg-white border border-gray-100 rounded-2xl p-8 mb-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-black mb-1">Bảo mật tài khoản</h2>
            <p class="text-xl font-semibold text-gray-500">Quản lý mật khẩu và cài đặt bảo mật</p>
          </div>
  
          <div class="space-y-6">
            <!-- Password -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4 border border-gray-200 rounded-xl">
              <div>
                <h3 class="font-semibold text-lg">Mật khẩu</h3>
                <p class="font-semibold text-gray-600">Thay đổi mật khẩu định kỳ để bảo vệ tài khoản</p>
              </div>
              <button @click="onChangePassword" class="flex items-center gap-2 px-4 py-2 border border-black/70 rounded-lg hover:bg-gray-100 transition">
                <img src="https://www.figma.com/api/mcp/asset/8c4e111d-ff36-4599-a675-3d5b938ea571" alt="Key" class="w-4 h-4" />
                <span class="font-semibold">Đổi mật khẩu</span>
              </button>
            </div>
  
            <hr class="border-t border-black/10" />
  
            <!-- Logout All -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4 border border-gray-200 rounded-xl">
              <div>
                <h3 class="font-semibold text-lg">Đăng xuất khỏi tất cả thiết bị</h3>
                <p class="font-semibold text-gray-600">Đăng xuất khỏi tất cả các phiên đăng nhập khác</p>
              </div>
              <button @click="onLogoutAll" class="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition">
                <img src="https://www.figma.com/api/mcp/asset/63132e90-e7db-435c-acbd-360a6e1a3fee" alt="Logout" class="w-4 h-4" />
                <span class="font-semibold">Đăng xuất tất cả</span>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Account Information Card -->
        <div class="bg-teal-50 border border-teal-200 rounded-2xl p-8">
          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="font-medium">Loại tài khoản:</span>
              <span class="font-bold text-[#2f5755]">Khách hàng thường</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">Ngày tham gia:</span>
              <span class="font-bold text-lime-800">15/01/2024</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">Số thú cưng đã đăng ký:</span>
              <span class="font-bold">2 bé</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">Tổng số lần khám:</span>
              <span class="font-bold text-teal-600">8 lần</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const isEditing = ref(false)
  
  const form = ref({
    name: 'Nguyễn Văn A',
    phone: '0912345678',
    email: 'nguyen.a@email.com',
    address: '123 Đường Nguyễn Huệ, Quận 1, TP.HCM',
    zalo: '0912345678'
  })
  
  const toggleEdit = () => {
    if (isEditing.value) {
      alert('Thông tin đã được cập nhật!')
    }
    isEditing.value = !isEditing.value
  }
  
  const onAvatarClick = () => {
    alert('Chức năng upload ảnh đại diện sẽ được triển khai!')
  }
  
  const onChangePassword = () => {
    alert('Chuyển đến trang đổi mật khẩu...')
  }
  
  const onLogoutAll = () => {
    if (confirm('Bạn có chắc muốn đăng xuất khỏi tất cả thiết bị?')) {
      alert('Đã đăng xuất khỏi tất cả thiết bị!')
    }
  }
  </script>
  
  <style scoped>
  /* Nếu cần thêm custom color không có trong Tailwind */
  </style>