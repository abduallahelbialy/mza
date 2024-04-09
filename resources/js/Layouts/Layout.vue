<script setup>
import { computed, ref } from 'vue'
import { usePage, router } from '@inertiajs/vue3'

import { useStyleStore } from '@/Stores/style.js'
import Navbar from '@/Components/Landing/Navbar.vue';
// const canLogin = computed(() => usePage().props)
let canlogin = computed(() => usePage().props.canLogin)
// console.log('ca',caogin)
// console.log(caogin==true)
const styleStore = useStyleStore()
</script>

<template>
    <div>
        <Navbar :canLogin="canlogin" />
        <slot />
        <footer>
            <section class="bg-footer-end text-center">
              <p class="text-gray-400 ">Mzadodin جميع الحقوق محفوظة لدى "مزاودين"</p>
            </section>
        </footer>
    </div>
</template>

<style>
* {
    font-family: 'Cairo', sans-serif;
}

.btn {
    @apply font-bold py-1 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
}

.btn-blue:hover {
    @apply bg-blue-700;
}

.btn-main {
    background-color: #ba1971;
    color: white;
}

.login {
    height: 2.5rem;
    margin: auto;
}

.bg-main-color {
    background-color: #ba1971;
}



.cart {
    min-width: 2rem;
    max-width: 6rem;

}

.main-text-color {
    color: #c23381 !important;
    font-size: large;
    font-weight: bold;
    border-bottom: 2px white solid;
}

.main-text-color:hover {
    border-bottom: 2px #c23381 solid;
}

.logo {
    min-width: 2rem;
    max-width: 7rem;
    margin: 0 220px;
}
@media (max-width:477px) {
    .logo {
    min-width: 2rem;
    max-width: 7rem;
    margin: 0 45px !important;
}
}
nav {
    border-bottom: 1px #c23381 solid;
}

.main main {
    border: black 1px solid;

}





.card-title {
    color: #6aaaa3 !important;
    font-weight: bold;
}

.text-secondary {
    color: #6c757d !important;
}

.card-img-info {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.star {
    /* width: 2rem; */
    /* display: block; */
    font-weight: bolder;
    font-size: 2rem;
    color: #ff5757;
}

.btn-dis {
    background-color: #ff5757;
    color: white;
}

.card-input {
    max-width: 8rem;
    max-height: 1.5rem;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.sort-icons>* {
    /* max-width: 2rem; */
    font-weight: bolder;
    font-size: 2rem;
    color: #c23381;

    /* color: red; */
    /* background-color: blue; */
    /* border-color: green; */
    /* opacity: 0.5; */
    /* filter: brightness(1) invert(5); */


}

.card-pop {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Additional styling if needed */
    padding: 5px 30px;
    background-color: #d6d6d6;
    opacity: .9;
}

.card-btn-info {
    height: 2.2rem;
    text-align: center;
    padding: auto;
    background-color: #ba1971;
    color: white;
}

iconify-icon {
    margin: .5rem;
}

.bg-footer-end {
    /* background-color: #f3f4f1; */
}

footer {
    padding: 1rem;
    /* background-color: #f3f4f1; */
    width: 100%;
    height: 5rem;
}

footer section {
    margin: auto;
}

@media (max-width:477px) {
    footer{
        margin-top: -40px;
        font-weight: bold;
        background-color: transparent !important;
    }
}
@media (min-width: 1164px) {
    .main-nav {
        margin: 0 100px;
    }

    footer section {
        width: 50%;
        margin: auto;
    }

    .main main ul li {
        margin: 10px;
    }


}

/* @media (max-width: 1280px) {
    .logo {

        margin: 0;
    }
} */

@media (max-width: 576px) {
    .card-pop {
        top: 30%;

    }

    .cart {
        min-width: 2rem;
        max-width: 3rem;
    }




    .main main ul {
        font-size: small;
        display: flex;
        text-align: center;
        justify-content: space-around;
        width: 100%;
    }

    .main main ul li {
        margin: 5px;
    }

    .sort-icons {
        display: none !important;
    }

    /* .sm-position-absolute{
        position: relative;
        top: 50%;
        left: 50%;
    } */
}

.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
