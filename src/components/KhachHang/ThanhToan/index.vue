<template>
    <div class="min-h-screen  font-nunito">
      <div class="container mx-auto px-6 py-7 max-w-6xl">
        <div class="flex items-center gap-1 mb-6 text-lg">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 15L11.25 10L6.25 5" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-gray-500 font-semibold">Trang chủ</span>
          <span class="font-bold text-black">/</span>
          <span class="font-semibold underline text-black">Hoá đơn & Thanh Toán</span>
        </div>
  
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-black mb-1">Thanh toán</h1>
          <p class="text-xl font-medium text-gray-700">Quản lý hóa đơn và lịch sử thanh toán</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div class="bg-white border border-teal-400 rounded-2xl p-6 flex flex-col justify-between min-h-40">
            <p class="text-gray-700 font-medium mb-10">Tổng đã thanh toán</p>
            <div>
              <p class="text-teal-600 text-xl font-semibold">700.000 ₫</p>
              <p class="text-gray-700 font-medium">3 hóa đơn</p>
            </div>
          </div>
  
          <div class="bg-white border border-amber-300 rounded-2xl p-6 flex flex-col justify-between min-h-40">
            <p class="text-gray-700 font-medium mb-10">Chờ thanh toán</p>
            <div>
              <p class="text-amber-700 text-xl font-semibold">500.000 ₫</p>
              <p class="text-gray-700 font-medium">1 hóa đơn</p>
            </div>
          </div>
  
          <div class="bg-white border border-gray-400 rounded-2xl p-6 flex flex-col justify-between min-h-40">
            <p class="text-gray-700 font-medium mb-10">Tổng chi tiêu</p>
            <div>
              <p class="text-black text-xl font-semibold">1.200.000 ₫</p>
              <p class="text-gray-700 font-medium">Trong năm 2025</p>
            </div>
          </div>
        </div>
  
        <div class="bg-white border border-black/10 rounded-2xl p-8 mb-6">
          <div class="mb-6">
            <h2 class="text-lg font-semibold text-black">Lịch sử giao dịch</h2>
            <p class="text-gray-500 font-medium">Danh sách các hóa đơn và thanh toán</p>
          </div>
  
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="border-b border-black/10">
                <tr>
                  <th class="py-3 px-2 font-medium text-black">Mã hóa đơn</th>
                  <th class="py-3 px-2 font-medium text-black">Dịch vụ</th>
                  <th class="py-3 px-2 font-medium text-black">Thú cưng</th>
                  <th class="py-3 px-2 font-medium text-black">Ngày khám</th>
                  <th class="py-3 px-2 font-medium text-black text-right">Số tiền</th>
                  <th class="py-3 px-2 font-medium text-black">Trạng thái</th>
                  <th class="py-3 px-2 font-medium text-black">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invoice in invoices" :key="invoice.id" class="border-b border-black/10">
                  <td class="py-2 px-2">
                    <div class="font-medium">{{ invoice.id }}</div>
                    <div class="text-gray-500 text-sm">{{ invoice.appointmentId }}</div>
                  </td>
                  <td class="py-2 px-2 font-medium">{{ invoice.service }}</td>
                  <td class="py-2 px-2">
                    <span :class="invoice.petColor === 'amber' ? 'text-amber-700' : 'text-sky-500'" class="font-medium">
                      {{ invoice.pet }}
                    </span>
                  </td>
                  <td class="py-2 px-2">
                    <div class="font-medium">{{ invoice.date }}</div>
                    <div v-if="invoice.paymentDate" class="text-gray-500 text-xs">TT: {{ invoice.paymentDate }}</div>
                  </td>
                  <td class="py-2 px-2 text-right">
                    <div class="font-medium">{{ invoice.amount }}</div>
                    <div v-if="invoice.method" class="text-gray-500 text-xs text-right">{{ invoice.method }}</div>
                  </td>
                  <td class="py-2 px-2">
                    <span :class="invoice.status === 'pending' ? 'bg-amber-100 text-amber-800 border-amber-800' : 'bg-teal-50 text-teal-700 border-teal-700'"
                          class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium">
                      <svg v-if="invoice.status === 'pending'" class="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      <svg v-else class="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      {{ invoice.status === 'pending' ? 'Chờ thanh toán' : 'Đã thanh toán' }}
                    </span>
                  </td>
                  <td class="py-2 px-2">
                    <div class="flex justify-end gap-2">
                      <button :class="invoice.status === 'pending' ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-white border border-black/10 text-black hover:bg-gray-50'"
                              class="flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition">
                        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path :d="invoice.status === 'pending' ? 'M2 8h12M8 2v12' : 'M8 2v12M2 8h12'" 
                                :stroke="invoice.status === 'pending' ? 'white' : 'black'" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        {{ invoice.status === 'pending' ? 'Thanh toán' : 'Biên lai' }}
                      </button>
                      <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition">
                        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="4" r="1" fill="currentColor"/>
                          <circle cx="8" cy="8" r="1" fill="currentColor"/>
                          <circle cx="8" cy="12" r="1" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div class="bg-teal-50 border border-teal-300 rounded-2xl p-6">
          <div class="mb-6">
            <h3 class="text-teal-900 font-medium">Phương thức thanh toán</h3>
            <p class="text-teal-700 font-medium">Chúng tôi hỗ trợ các hình thức thanh toán sau</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="method in paymentMethods" :key="method.title" class="bg-white border border-teal-300 rounded-xl p-4 flex gap-3">
              <div class="w-10 h-10 bg-teal-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                <svg class="w-5 h-5 text-teal-600" viewBox="0 0 20 20" fill="none">
                  <path d="M4 6h12M4 10h12M4 14h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-black">{{ method.title }}</h4>
                <p class="text-sm text-gray-700">{{ method.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const invoices = ref([
    {
      id: 'HD001234',
      appointmentId: 'LH001234',
      service: 'Khám tổng quát + Xét nghiệm máu',
      pet: 'Milo',
      petColor: 'amber',
      date: '10/11/2025',
      amount: '500.000 ₫',
      status: 'pending'
    },
    {
      id: 'HD001230',
      appointmentId: 'LH001230',
      service: 'Khám da liễu + Thuốc điều trị',
      pet: 'Milo',
      petColor: 'amber',
      date: '25/10/2025',
      paymentDate: '25/10/2025',
      amount: '350.000 ₫',
      method: 'VNPay',
      status: 'paid'
    },
    {
      id: 'HD001228',
      appointmentId: 'LH001228',
      service: 'Khám tổng quát',
      pet: 'Luna',
      petColor: 'sky',
      date: '15/10/2025',
      paymentDate: '15/10/2025',
      amount: '200.000 ₫',
      method: 'Tiền mặt',
      status: 'paid'
    },
    {
      id: 'HD001225',
      appointmentId: 'LH001225',
      service: 'Tiêm phòng 6 bệnh',
      pet: 'Milo',
      petColor: 'sky',
      date: '20/09/2025',
      paymentDate: '20/09/2025',
      amount: '150.000 ₫',
      method: 'Chuyển khoản',
      status: 'paid'
    }
  ])
  
  const paymentMethods = ref([
    { title: 'VNPay / MoMo', desc: 'Thanh toán qua ví điện tử' },
    { title: 'Chuyển khoản ngân hàng', desc: 'Quét mã QR hoặc chuyển khoản' },
    { title: 'Tiền mặt', desc: 'Thanh toán trực tiếp tại phòng khám' }
  ])
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap');
  
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
  </style>