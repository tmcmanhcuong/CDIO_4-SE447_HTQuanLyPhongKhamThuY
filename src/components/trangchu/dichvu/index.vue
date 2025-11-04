<template>
  <div class="dichvu-container">
    <!-- Hero Section -->
    <section class="hero-section bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="display-4 mb-3">🏥 Dịch Vụ PETTY</h1>
            <p class="lead">Chăm sóc tốt nhất cho thú cưng của bạn</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2>Các Dịch Vụ Của Chúng Tôi</h2>
            <p class="text-muted">Đa dạng dịch vụ chăm sóc sức khỏe thú cưng</p>
          </div>
        </div>
        
        <div class="row">
          <!-- Service 1 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-stethoscope text-primary" style="font-size: 3rem;"></i>
                </div>
                <h5 class="card-title">Khám Tổng Quát</h5>
                <p class="card-text">Kiểm tra sức khỏe định kỳ cho thú cưng của bạn</p>
                <div class="price text-primary fw-bold">200.000 VNĐ</div>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-syringe text-success" style="font-size: 3rem;"></i>
                </div>
                <h5 class="card-title">Tiêm Phòng</h5>
                <p class="card-text">Vaccine đầy đủ để bảo vệ thú cưng khỏi bệnh tật</p>
                <div class="price text-primary fw-bold">150.000 VNĐ</div>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-cut text-info" style="font-size: 3rem;"></i>
                </div>
                <h5 class="card-title">Phẫu Thuật</h5>
                <p class="card-text">Phẫu thuật an toàn với đội ngũ bác sĩ giàu kinh nghiệm</p>
                <div class="price text-primary fw-bold">500.000 VNĐ</div>
              </div>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-shower text-warning" style="font-size: 3rem;"></i>
                </div>
                <h5 class="card-title">Spa & Tắm Gội</h5>
                <p class="card-text">Dịch vụ làm đẹp và vệ sinh cho thú cưng</p>
                <div class="price text-primary fw-bold">100.000 VNĐ</div>
              </div>
            </div>
          </div>

          <!-- Service 5 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-x-ray text-danger" style="font-size: 3rem;"></i>
                </div>
                <h5 class="card-title">Chụp X-Quang</h5>
                <p class="card-text">Chẩn đoán hình ảnh chính xác và nhanh chóng</p>
                <div class="price text-primary fw-bold">300.000 VNĐ</div>
              </div>
            </div>
          </div>

          <!-- Service 6 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-pills text-secondary" style="font-size: 3rem;"></i>
                </div>
                <h5 class="card-title">Điều Trị Nội Khoa</h5>
                <p class="card-text">Điều trị các bệnh lý nội khoa chuyên sâu</p>
                <div class="price text-primary fw-bold">250.000 VNĐ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h3>Cần Tư Vấn Thêm?</h3>
            <p class="mb-4">Liên hệ với chúng tôi để được tư vấn miễn phí</p>
            <button class="btn btn-primary btn-lg me-3">📞 Gọi Ngay</button>
            <button class="btn btn-outline-primary btn-lg">📅 Đặt Lịch</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DichVu',
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Khám Tổng Quát',
          price: '200.000 VNĐ',
          description: 'Kiểm tra sức khỏe định kỳ cho thú cưng của bạn',
          icon: 'fas fa-stethoscope'
        },
        // Có thể thêm data services nếu cần
      ]
    }
  },
  mounted() {
    console.log('Trang Dịch Vụ đã được load!');
  }
}
</script>

<style scoped>
.dichvu-container {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
}

.service-icon {
  margin-bottom: 1rem;
}

.price {
  font-size: 1.2rem;
  margin-top: 1rem;
}

.cta-section {
  background-color: #f8f9fa;
}

.btn {
  border-radius: 25px;
  padding: 12px 30px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .btn-lg {
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>