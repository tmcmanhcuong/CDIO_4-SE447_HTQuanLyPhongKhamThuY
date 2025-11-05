import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    /********************** Trang Chủ ************************* */
    {
        path : '/',
        component: ()=>import('../components/trangchu/index.vue'),
        meta: { layout: 'trangchu' }
    },
    /********************** Khách Hàng ************************* */
    {
        path: '/khach-hang/dang-ky',
        component: ()=>import('../components/KhachHang/DangKi/index.vue'),
        meta: { layout: 'dangki_dangnhap' } 
    },
    {
        path: '/khach-hang/dang-nhap',
        component: ()=>import('../components/KhachHang/DangNhap/index.vue'),
        meta: { layout: 'dangki_dangnhap' } 
    },
    {
        path: '/khach-hang/trang-cua-toi',
        component: ()=>import('../components/KhachHang/QuanLyTaiKhoan/index.vue'),
        meta: { layout: 'trangchu' } 
    },
    //********************** Admin ************************* */
     {
        path: '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'dangki_dangnhap' } 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router