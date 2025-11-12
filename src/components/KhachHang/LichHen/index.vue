<template>
    <div class="min-h-screen font-nunito">
      <div class="container mx-auto px-6 py-6 max-w-6xl">
        <div class="flex items-center gap-1 mb-6 text-lg">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 15L11.25 10L6.25 5" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-gray-500 font-semibold">Trang chủ</span>
          <span class="font-bold text-black">/</span>
          <span class="font-semibold underline text-black">Lịch hẹn</span>
        </div>
  
        <div class="flex justify-between items-center mb-6 flex-col md:flex-row gap-4">
          <div>
            <h1 class="text-2xl font-bold text-black">Lịch hẹn khám</h1>
            <p class="text-xl font-medium text-gray-600">Quản lý các buổi khám đã đặt</p>
          </div>
          <button @click="handleNewAppointment"
                  class="flex items-center gap-3 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium text-lg hover:bg-teal-700 transition">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Đặt lịch mới
          </button>
        </div>
  
        <div class="flex bg-zinc-100 rounded-2xl p-1 gap-1 mb-8 w-fit">
          <button v-for="tab in tabs" :key="tab.id"
                  @click="activeTab = tab.id"
                  :class="activeTab === tab.id ? 'bg-white text-black' : 'text-black hover:opacity-70'"
                  class="px-4 py-2 rounded-2xl font-semibold text-base transition">
            {{ tab.label }} ({{ tab.count }})
          </button>
        </div>
  
        <div class="bg-gray-200 border border-black/20 rounded-2xl p-6 mb-8">
          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M7 10h6M5 15h10" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span class="font-medium text-gray-700">Lọc theo:</span>
            </div>
  
            <div class="flex flex-1 flex-wrap gap-4">
              <button @click="openFilter('pet')"
                      class="flex-1 min-w-48 flex justify-between items-center px-4 py-2 bg-white rounded-lg hover:opacity-80 transition">
                <span class="text-gray-500 font-medium">Tất cả thú cưng</span>
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M2 5l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <button @click="openFilter('service')"
                      class="flex-1 min-w-48 flex justify-between items-center px-4 py-2 bg-white rounded-lg hover:opacity-80 transition">
                <span class="text-gray-500 font-medium">Tất cả dịch vụ</span>
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M2 5l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <button @click="openFilter('date')"
                      class="flex-1 min-w-48 flex justify-between items-center px-4 py-2 bg-white rounded-lg hover:opacity-80 transition">
                <span class="text-gray-500 font-medium">Khoảng thời gian</span>
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M2 5l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
  
            <button @click="clearFilters"
                    class="px-3 py-1 text-teal-700 font-medium hover:opacity-70 transition">
              Xóa bộ lọc
            </button>
          </div>
        </div>
  
        <div class="space-y-4">
          <div v-for="appt in filteredAppointments" :key="appt.id" class="bg-white rounded-2xl overflow-hidden border border-black/5">
            <div class="bg-teal-50 border-b border-teal-100 p-6">
              <div class="flex justify-between flex-col md:flex-row gap-4">
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-lg font-semibold">{{ appt.service }}</h3>
                    <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-lg font-medium text-base">
                      Đã xác nhận
                    </span>
                  </div>
                  <p class="text-gray-600 font-medium">Mã lịch hẹn: {{ appt.id }}</p>
                </div>
                <div class="text-right md:text-left">
                  <div class="font-medium">{{ appt.date }}</div>
                  <div class="text-teal-400 font-medium">{{ appt.time }}</div>
                </div>
              </div>
            </div>
  
            <div class="p-6">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="7" r="3" stroke="#6b7280" stroke-width="2"/>
                      <path d="M4 18c0-3.5 3-6 6-6s6 2.5 6 6" stroke="#6b7280" stroke-width="2"/>
                    </svg>
                    <div>
                      <p class="text-gray-600 font-medium mb-1">Thú cưng</p>
                      <p :class="appt.pet === 'Milo' ? 'text-amber-700' : 'text-sky-500'"
                         class="font-semibold">{{ appt.pet }}</p>
                      <div class="flex flex-wrap gap-3 mt-2 text-gray-600 font-medium">
                        <span>{{ appt.breed }}</span>
                        <span>{{ appt.age }}</span>
                        <span>{{ appt.weight }}</span>
                      </div>
                    </div>
                  </div>
  
                  <div class="flex gap-4">
                    <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM3 18c0-4.5 4-7 7-7s7 2.5 7 7" stroke="#6b7280" stroke-width="2"/>
                    </svg>
                    <div>
                      <p class="text-gray-600 font-medium mb-1">Bác sĩ</p>
                      <p class="font-medium">{{ appt.doctor }}</p>
                    </div>
                  </div>
                </div>
  
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2a6 6 0 00-6 6c0 5 6 10 6 10s6-5 6-10a6 6 0 00-6-6z" stroke="#6b7280" stroke-width="2"/>
                      <circle cx="10" cy="8" r="2" fill="#6b7280"/>
                    </svg>
                    <div>
                      <p class="text-gray-600 font-medium mb-1">Địa điểm</p>
                      <p class="font-medium">{{ appt.clinic }}</p>
                      <p class="text-gray-600 font-medium">{{ appt.address }}</p>
                    </div>
                  </div>
  
                  <div v-if="appt.note" class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p class="font-inter font-bold text-amber-800 text-sm mb-1">Lưu ý:</p>
                    <p class="font-medium text-amber-800">{{ appt.note }}</p>
                  </div>
                </div>
              </div>
  
              <div class="pt-6 border-t border-zinc-100 flex flex-col md:flex-row gap-3">
                <button @click="handleReschedule(appt.id)"
                        class="flex-1 flex items-center justify-center gap-2 py-2 border border-black/5 rounded-lg hover:opacity-80 transition">
                  <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Đổi lịch
                </button>
                <button @click="handleCancel(appt.id)"
                        class="flex-1 flex items-center justify-center gap-2 py-2 border border-red-200 text-red-600 rounded-lg hover:opacity-80 transition">
                  <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Hủy hẹn
                </button>
                <button @click="handleViewDetail(appt.id)"
                        class="flex-1 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const tabs = ref([
    { id: 'upcoming', label: 'Sắp tới', count: 2 },
    { id: 'past', label: 'Đã qua', count: 3 }
  ])
  const activeTab = ref('upcoming')
  
  const appointments = ref([
    {
      id: 'LH001234',
      service: 'Khám tổng quát',
      date: '10/11/2025',
      time: '14:00 - 14:30',
      pet: 'Milo',
      breed: 'Golden Retriever',
      age: '2 tuổi',
      weight: '28 kg',
      doctor: 'Bs. Nguyễn Thị B',
      clinic: 'Phòng khám Petty - Chi nhánh Quận 1',
      address: '123 Nguyễn Huệ, Q.1, TP.HCM',
      note: 'Mang theo sổ tiêm phòng',
      status: 'upcoming'
    },
    {
      id: 'LH001235',
      service: 'Tiêm phòng dại',
      date: '15/11/2025',
      time: '10:30 - 11:00',
      pet: 'Luna',
      breed: 'Ragdoll',
      age: '1.5 tuổi',
      weight: '4.2 kg',
      doctor: 'Bs. Trần Văn C',
      clinic: 'Phòng khám Pet Care - Chi nhánh Quận 1',
      address: '123 Nguyễn Huệ, Q.1, TP.HCM',
      note: null,
      status: 'upcoming'
    }
  ])
  
 
  const filteredAppointments = computed(() => {
    return appointments.value.filter(appt => appt.status === activeTab.value)
  })
  
  const handleNewAppointment = () => {
    alert('Chức năng đặt lịch mới')
  }
  
  const openFilter = (type) => {
    alert(`Lọc theo ${type}`)
  }
  
  const clearFilters = () => {
    alert('Đã xóa bộ lọc')
  }
  
  const handleReschedule = (id) => {
    if (confirm(`Bạn có muốn đổi lịch hẹn ${id}?`)) {
      alert('Chức năng đổi lịch')
    }
  }
  
  const handleCancel = (id) => {
    if (confirm(`Bạn có chắc chắn muốn hủy lịch hẹn ${id}?`)) {
      alert('Đã hủy lịch hẹn')
    }
  }
  
  const handleViewDetail = (id) => {
    alert(`Xem chi tiết lịch hẹn ${id}`)
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&family=Inter:wght@700&display=swap');
  
  .font-nunito { font-family: 'Nunito Sans', sans-serif; }
  .font-inter { font-family: 'Inter', sans-serif; }
  </style>