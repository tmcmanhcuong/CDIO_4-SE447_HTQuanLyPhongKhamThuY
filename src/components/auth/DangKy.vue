<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4">
    <div class="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden ">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- Left Side - Info Section with Gradient -->
        <div class="bg-gradient-to-br from-[#5a9690] to-[#3d7671] p-12 text-white relative">
          <!-- Header -->
          <div class="mb-16">
            <h1 class="text-white text-3xl font-bold font-nunito mb-2">
              Chào mừng bạn đến với PETTY
            </h1>
            <p class="text-blue-100 font-nunitoSans">
              Tham gia cùng hàng nghìn chủ nuôi đang sử dụng để đặt lịch
            </p>
          </div>

          <!-- Image -->
          <div class="mb-28 rounded-xl overflow-hidden">
            <img 
              src="/src/assets/img_imports/sign_in_up_img/sign-img2.png" 
              alt="Veterinarian with pet"
              class="w-full h-80 object-cover rounded-lg"
            />
          </div>

          <!-- Features List -->
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 mt-1 flex-shrink-0">
                <Tick class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="text-white text-lg font-semibold font-nunitoSans">Bảo mật & An toàn</h3>
                <p class="text-sm text-blue-100 font-nunitoSans">
                  Mọi thông tin của bạn và thú cưng được lưu trữ bảo mật
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-5 h-5 mt-1 flex-shrink-0">
                <Tick class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="text-white text-lg font-semibold font-nunitoSans">24/7 Hỗ Trợ</h3>
                <p class="text-sm text-blue-100 font-nunitoSans">
                  Đội ngũ PETTY luôn sẵn sàng giúp bạn khi cần
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-5 h-5 mt-1 flex-shrink-0">
               <Tick class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="text-white text-lg font-semibold font-nunitoSans">Sử dụng dễ dàng</h3>
                <p class="text-sm text-blue-100 font-nunitoSans">
                  Bắt đầu chỉ với vài thao tác đơn giản – đặt lịch, xem hồ sơ...
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Form Section -->
        <div class="p-12 bg-white">
          <!-- Form Header -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-textColor font-nunito mb-1">
              Tạo tài khoản
            </h2>
            <p class="text-lg text-gray-400 font-semibold font-nunitoSans">
              Bắt đầu để khám phá ngay nhé
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Họ và Tên -->
            <div>
              <label class="block text-sm font-semibold text-textColor mb-2 font-nunitoSans">
                Họ và Tên
              </label>
              <div class="relative">
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ">
                    <User viewBox="0 0 20 20" 
                    path d="M10 2a5 5 0 100 10 5 5 0 000-10zM2 18a8 8 0 1116 0H2z"  />
                </div>
                <input 
                  v-model="formData.fullName"
                  type="text" 
                  placeholder="Nguyễn Văn A"
                  class="w-full pl-14 pr-3 py-3 bg-gray-100 border-0 rounded-lg text-base font-nunitoSans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-semibold text-textColor mb-2 font-nunitoSans">
                Email
              </label>
              <div class="relative">
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                 <EmailAddress viewBox="0 0 20 20" 
                    path d="M10 2a5 5 0 100 10 5 5 0 000-10zM2 18a8 8 0 1116 0H2z"  />
                </div>
                <input 
                  v-model="formData.email"
                  type="email" 
                  placeholder="nguyenvana@example.com"
                  class="w-full pl-14 pr-3 py-3 bg-gray-100 border-0 rounded-lg text-base font-nunitoSans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <!-- Mật Khẩu -->
            <div>
              <label class="block text-sm font-semibold text-textColor mb-2 font-nunitoSans">
                Mật Khẩu
              </label>
              <div class="relative">
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                  <password viewBox="0 0 20 20" 
                    path d="M10 2a5 5 0 100 10 5 5 0 000-10zM2 18a8 8 0 1116 0H2z"  />
                </div>
                <input 
                  v-model="formData.password"
                  type="password" 
                  placeholder="Nhập mật khẩu"
                  class="w-full pl-14 pr-3 py-3 bg-gray-100 border-0 rounded-lg text-base font-nunitoSans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <!-- Xác nhận mật khẩu -->
            <div>
              <label class="block text-sm font-semibold text-textColor mb-2 font-nunitoSans">
                Xác nhận mật khẩu
              </label>
              <div class="relative">
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                  <password viewBox="0 0 20 20" 
                    path d="M10 2a5 5 0 100 10 5 5 0 000-10zM2 18a8 8 0 1116 0H2z"  />
                </div>
                <input 
                  v-model="formData.confirmPassword"
                  type="password" 
                  placeholder="Xác nhận mật khẩu"
                  class="w-full pl-14 pr-3 py-3 bg-gray-100 border-0 rounded-lg text-base font-nunitoSans text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <!-- Checkbox Terms -->
            <div class="flex items-start gap-2 pt-2">
              <input 
                v-model="formData.agreeTerms"
                type="checkbox" 
                id="terms"
                class="w-4 h-4 mt-0.5 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-primary"
              />
              <label for="terms" class="text-sm font-semibold text-gray-900 font-nunitoSans">
                Tôi đồng ý với các 
                <a href="#" class="text-blue-600 font-bold hover:underline">Điều Khoản</a>
                và
                <a href="#" class="text-blue-600 font-bold hover:underline">Chính Sách Bảo Mật</a>
              </label>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full bg-[#5A9690] text-white py-2.5 rounded-2xl font-semibold text-lg font-nunito hover:bg-opacity-70 transition-all duration-300"
            >
              Đăng Ký
            </button>

            <!-- Divider -->
            <div class="relative my-5">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm -mt-6 -mb-6">
                <span class="px-4 bg-white text-gray-600">Hoặc tiếp tục với</span>
              </div>
            </div>

            <!-- Social Login Buttons -->
            <div class="grid grid-cols-2 gap-3 -mt-4">
              <button 
                type="button"
                class="flex items-center justify-center gap-2 px-4 py-2 shadow rounded-lg text-sm font-semibold text-gray-900 font-nunitoSans hover:bg-gray-200 transition-colors"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>

              <button 
                type="button"
                class="flex items-center justify-center gap-2 px-4 py-2 shadow rounded-lg text-sm font-semibold text-gray-900 font-nunitoSans hover:bg-gray-200 transition-colors"
              >
                <svg class="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </form>

          <!-- Login Link -->
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600 font-nunitoSans">
              Đã có tài khoản?
              <router-link to="/dang-nhap" class="text-blue-600 font-medium hover:underline ml-1">
                Đăng Nhập
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tick from '../../assets/svg/tick.svg'
import User from '../../assets/svg/User.svg'
import EmailAddress from '../../assets/svg/emailaddress.svg'
import Password from '../../assets/svg/password.svg'
const formData = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  
}
</script>

<style scoped>

</style>
