import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'
import ProfileDetail from './components/ProfileDetail.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'About',
        path: '/aboutus',
        component: AboutUs
    },
    {
        name: 'Contact',
        path: '/contactus',
        component: ContactUs
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: ProfileDetail
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;