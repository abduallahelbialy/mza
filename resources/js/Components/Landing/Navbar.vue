<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Logo from "@/Components/Logo.vue";
import Cart from "@/Components/Cart.vue";
import { onMounted, ref } from "vue";
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

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
        <p class="text-black font-semibold">
            شريط اعلانات :
            <sapn class="text-red-600 font-semibold">انتظرونا قريبا</sapn>
        </p>
    </div>
    <div class="container mx-auto p-4">

    <nav class="bg-white p-2">
        <div class="flex justify-between items-center">
            <!-- Cart & Login Button -->
            <div class="flex items-center">
                <button
                    class="bg-pink-600 text-white px-4 py-2 rounded-lg mr-4 phon"
                >
                    تسجيل دخول
                </button>
                <div class="relative">
                    <button class="text-white">
                        <Cart class="w-20 flex cart d-inline-block" />
                    </button>
                    <!-- Cart Badge -->
                </div>
            </div>
            <!-- Logo -->
            <div class="flex items-center">
                <div class="w-24">
                    <img
                        src="https://mzaodin.com/website/log-removebg-preview.png"
                        alt=""
                    />
                </div>
            </div>
            <!-- Toggle Menu Button -->
             <div class="notification relative cursor-pointer">
                    <svg class="not-img absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24"
                        width="24" id="Bell-Notification--Streamline-Nova">
                        <!-- <desc>Bell Notification Streamline Icon: https://streamlinehq.com</desc> -->
                        <path d="M20 9A8 8 0 0 0 4 9v9h16zM4 18H0m24 0h-4" fill="none" stroke="#be290b"
                            stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M15 21a3 3 0 0 1 -6 0z" fill="#be290b" stroke-width="2"></path>
                    </svg>
                </div>
            <div class="flex md:hidden">
                <button
                    id="toggleButton"
                    class="text-white focus:outline-none bg-gray-600"
                    @click="toggleMenu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <!-- Links -->
            <div
                :class="{
                    hidden: !isMenuOpen,
                    'md:flex': true,
                    'space-x-4': true,
                }"
            >
                <ul class="flex space-x-4 bas">
                    <li class="main-text-color">
                        <i
                            class="fas fa-users me-2 text-sm leading-lg main-text-color opacity-75"
                        />

                        <a href="#" class="text-white">من نحن</a>
                    </li>
                    <li  class="main-text-color">
                        <i
                            class="fas fa-question-circle me-2 text-sm leading-lg main-text-color opacity-75"
                        />

                        <a href="#" class="text-white">الاسئلة الشائعة</a>
                    </li>
                    <li  class="main-text-color">
                        <i
                            class="fas fa-gavel me-2 text-sm leading-lg main-text-color opacity-75"
                        />

                        <a href="#" class="text-white">المزادات</a>
                    </li>
                    <li  class="main-text-color">
                        <i
                            class="fas fa-home me-2 text-sm leading-lg main-text-color opacity-75"
                        />

                        <a href="#" class="text-white">الرئيسية</a>
                    </li>
                    <div class="flex justify-end">
                        <button
                            class="bg-pink-600 text-white px-2 py-0 rounded-lg mr-4 yy"
                        >
                            تسجيل دخول
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</template>
<style scoped>
.pupl {
    display: none;
}
.yy {
    display: none;
}
.notification {
    display: none;
}
.bas li a {
    color: #fc40b9 !important;
    font-size: 20px;
    font-weight: bold;
}

@media (max-width: 477px) {
    .notification {
        display: block;
    }
    .phon {
        display: none;
    }
    .bas {
        flex-direction: column-reverse;
        position: absolute;
        left: 0px;
        width: 100%;
        margin: auto !important;
        top: 140px;
        align-items: end;
        padding: 5px 15px;
        border-radius: 12px;
        background-color: #fff !important;
        box-shadow: 0 0 10px #ddd;
        font-size: 20px;
        font-weight: bold;
        line-height: 44px;
    }
    .bas li a {
        color: #ec1fa4 !important;
    }
    .bas li  i{
        display: none;
    }
    .pupl {
        display: flex;
        border: 2px solid black;
        background-color: rgb(113, 246, 65);
        padding: 5px;
        border-radius: 4px;
    }
    .not-img {
      left: 64px;
    top: -42px
    }
}

/* @media (min-width: 1024px) {
    .jjj {
        margin-bottom: -102px;
    }
}
@media (min-width: 1280px) {
    .jjj {
        margin-bottom: 0px;
    }
} */
</style>
