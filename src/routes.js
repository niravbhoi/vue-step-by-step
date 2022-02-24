import {createWebHistory, createRouter} from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'

const routes=[
    {
        name : 'Home',
        path : '/',
        component : HomePage
    },
    {
        name : 'About',
        path : '/aboutus',
        component : AboutUs
    }
    ,
    {
        name : 'Contact',
        path : '/contactus',
        component : ContactUs
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;