import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/trangchu/index.vue'),
        meta: { layout: 'trangchu' }
    },
    {
        path: '/dich-vu',
        component: ()=>import('../components/dichvu/index.vue'),
        meta: { layout: 'trangchu' }
    },
    // TODO: Thêm route khi có trang Đăng Ký/Đăng Nhập
    {
        path: '/dang-ky',
        component: ()=>import('../components/auth/DangKy.vue'),
        meta: { layout: 'headeronly' } 
    },
    // {
    //     path: '/dang-nhap',
    //     component: ()=>import('../components/auth/DangNhap.vue'),
    //     meta: { layout: 'auth' }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router