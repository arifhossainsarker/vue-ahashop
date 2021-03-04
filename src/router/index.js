import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue'
import Aboutus from '../components/Aboutus.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'
import Shop from '../components/Shop.vue'
import Login from '../components/Login.vue'

const routes =[
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about-us",
        name: "Aboutus",
        component: Aboutus
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;