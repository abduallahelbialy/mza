<script setup>
import { Head, Link } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
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
    <div class="container mx-auto">
        <nav>
            <div class="menu-toggle" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="flex items-center">
                <button
                    class="bg-pink-600 text-white px-4 py-2 rounded-lg mr-4 phn "
                >
                    تسجيل دخول
                </button>
                <div class="relative">
                    <button class="text-white td">
                        <Cart class="w-20 flex cart d-inline-block" />
                    </button>
                    <!-- Cart Badge -->
                </div>
            </div>
            <div class="w-24 ss">
                <img
                    src="https://mzaodin.com/website/log-removebg-preview.png"
                    alt=""
                />
            </div>
 <button class="text-white er">
                        <Cart class="w-20 flex cart d-inline-block" />
                    </button>
            <ul class="menu" :class="{ active: isMenuOpen }">
                 <button
                    class="bg-pink-600 text-white px-4 py-1 rounded-lg mr-4 rr "
                >
                    تسجيل دخول
                </button>
                <li class="main-text-color">
                    <i
                        class="fas fa-users me-2 text-sm leading-lg main-text-color opacity-75"
                    />

                    <a href="#" class="text-white">من نحن</a>
                </li>
                <li class="main-text-color">
                    <i
                        class="fas fa-question-circle me-2 text-sm leading-lg main-text-color opacity-75"
                    />

                  <Link :href="route('According')" class="text-white">الاسئلة الشائعة</Link>
                </li>
                                   
                <li class="main-text-color">
                    <i
                        class="fas fa-gavel me-2 text-sm leading-lg main-text-color opacity-75"
                    />

                    <a href="#" class="text-white">المزادات</a>
                </li>
                <li class="main-text-color">
                    <i
                        class="fas fa-home me-2 text-sm leading-lg main-text-color opacity-75"
                    />

                    <a href="#" class="text-white">الرئيسية</a>
                </li>
            </ul>
        </nav>
    </div>
    
</template>

<style scoped>
.er{
    display: none;
}
.rr{
    display: none;
}
nav {
    background-color: #fff;
    color: #ec1fa4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle span {
    height: 3px;
    width: 25px;
    background-color: #fff;
    margin: 4px 0;
    transition: all 0.3s ease;
}

.menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu li {
    margin: 0 10px;
}

.menu a {
    color:#ec1fa4 ;
    text-decoration: none;
}

@media (max-width: 768px) {
    .er{
        display: block;
    }
    .td{
        display: none !important;
    }
    .ss{
        margin: auto;
    }
    .rr{
        display: block;
    }
    .phn{
        display: none;
    }
    nav{
        flex-direction: row-reverse;
    }
    .menu-toggle {
        display: flex;
    }
    .menu i{
        display: none !important;
    }
    .menu {
        display: none;
        flex-direction: column;
        line-height: 40px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color: #fff;
        padding: 10px;
        align-items: center;
        flex-direction: column-reverse;
        font-size: 20px;
        position: absolute;
        top: 150px;
        left: 0;
        width: 100%;
    }
    
    .menu.active {
        display: flex;
    }
}
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
    color: #ec1fa4 !important;
    font-size: 20px;
    font-weight: bold;
}

@media (max-width: 768px) {
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
    .bas li i {
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
        top: -42px;
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
