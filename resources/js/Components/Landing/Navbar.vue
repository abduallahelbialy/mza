<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Logo from '@/Components/Logo.vue';
import Cart from '@/Components/Cart.vue';
import { onMounted, ref } from 'vue';
const showMenu = ref(false);

function toggleNavbar() {
    showMenu.value = !showMenu.value;
}

onMounted(() => {
    const button = document.querySelector('.toggle-button');
    button.addEventListener('click', toggleNavbar);
});

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    asset: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    canResetPassword: {
        type: Boolean,
    },
});


</script>

<template>
    <div class="flex justify-center pupl">
        <p class="text-black font-semibold">شريط اعلانات : <sapn class="text-red-600 font-semibold">انتظرونا قريبا</sapn></p> </div>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class=" jjj w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-startz">

                <section v-if="canLogin" class="flex">
                    <Link v-if="$page.props.auth.user" :href="route('admin.dashboard')"
                        class=" btn-main text-white font-bold py-3  px-4 rounded lg:block hidden h-100 text-center">
                    Dashboard</Link>
                    <template v-else>

                        <Link
                            class=" btn-main text-white font-bold py-3  px-4 rounded lg:block hidden h-100 text-center"
                            :href="route('login')">
                        تسجيل الدخول

                        </Link>
                    </template>
                    <!-- <Link
                    :href="route('login')"
                    class="login navbar-brand btn btn-main text-white d-none d-lg-block"
                    >تسجيل الدخول</Link
                > -->
                    <Cart class="w-20 flex cart d-inline-block" />
                    <Logo class=" logo max-w-full lg:hidden block   " />

                </section>
                <div class="flex">




                </div>
                <div class="notification relative cursor-pointer">
                    <svg class="not-img absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24"
                        width="24" id="Bell-Notification--Streamline-Nova">
                        <!-- <desc>Bell Notification Streamline Icon: https://streamlinehq.com</desc> -->
                        <path d="M20 9A8 8 0 0 0 4 9v9h16zM4 18H0m24 0h-4" fill="none" stroke="#be290b"
                            stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M15 21a3 3 0 0 1 -6 0z" fill="#be290b" stroke-width="2"></path>
                    </svg>
                </div>
                <button
                    class="  toggle-button main-text-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">

                <ul class="flex flex-col lg:flex-row list-none ml-auto items-center">
            <Logo class=" logo max-w-20 m-auto lg:block hidden  " />

                    <li class="nav-item">
                        <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            href="#pablo">
                            <i class="fas fa-users text-lg leading-lg main-text-color opacity-75" /><span
                                class="ml-2">من
                                نحن</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <Link
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75 "
                            :href="route('home')">
                        <i class="fas fa-question-circle text-lg leading-lg main-text-color opacity-75" /><span
                            class="ml-2">الاسئلة
                            الشائعة</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            :href="route('auctions')">
                        <i class="fas fa-gavel text-lg leading-lg main-text-color opacity-75" /><span
                            class="ml-2">المزادات</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            :href="route('home')">
                        <i class="fas fa-home text-lg leading-lg main-text-color opacity-75" /><span
                            class="ml-2">الرئيسية</span>
                        </Link>
                    </li>
                    
                    <!-- <li class="nav-item">
                        <Link v-if="$page.props.auth.user"
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug main-text-color hover:opacity-75"
                            :href="route('settings')">
                        <i class="fas fa-cog text-lg leading-lg main-text-color opacity-75" /><span
                            class="ml-2">الاعدادت</span>
                        </Link>
                    </li> -->
                    <li v-if="canLogin" class="nav-item block my-5 lg:hidden">
                        <Link v-if="$page.props.auth.user" :href="route('admin.dashboard')"
                            class=" btn-main text-white font-bold py-3  px-4 rounded  h-100 text-center">
                        Dashboard</Link>
                        <template v-else>

                            <Link class=" btn-main text-white font-bold py-3  px-4 rounded  h-100 text-center"
                                :href="route('login')">
                            تسجيل الدخول

                            </Link>
                        </template>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.pupl{
    display: none;
}
.notification {
    display: none;
}

@media (max-width:477px) {
    .notification {
        display: block;
    }
.pupl{
    display: flex;
    border: 2px solid black;
    background-color: rgb(113, 246, 65);
    padding: 5px;
    border-radius: 4px;
}
    .not-img {
        left: 10px;
        top: 6px;
    }
}
@media (min-width:1024px) {
    .jjj{
        margin-bottom: -102px;
    }
}
@media (min-width:1280px) {
    .jjj{
        margin-bottom: 0px;
    }
}

</style>
