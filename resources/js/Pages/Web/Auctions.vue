<script setup>
// import { Head, Link } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
// import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import WebSite from '@/Layouts/WebSite.vue'
import Navbar from '@/Components/Landing/Navbar.vue';
import Layout from "@/Layouts/Layout.vue"

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

    canResetPassword: {
        type: Boolean,
    },

});



const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),

    });
    const loginSuccessful = true;

    if (loginSuccessful) {
        // Close the modal using jQuery
        $('#loginModal').modal('hide');
    }
};
</script>

<template>
    <!-- <WebSite :canLogin="canLogin"> -->

    <Head title="Auctions" />
    <Layout>
        <!-- <Navbar :canLogin="canLogin" /> -->


        <div class="container mx-auto">
            <div class=" mt-5 main">


                <!-- Your content goes here -->

                <main class="rounded  justify-end sm:flex-row p-5 items-center">
                    <p class="text-4xl font-bold text-end my-3">المزادات</p>

                    <ul class="list-none flex flex-nowrap justify-end">
                        <li>
                            <a class="main-text-color" href="#">منتهى +99 </a>
                        </li>
                        <li>
                            <a class="main-text-color" href="#">قادم 10</a>
                        </li>
                        <li>
                            <a class="main-text-color" href="#">جاري 4</a>
                        </li>
                        <li>
                            <a class="main-text-color" href="#">الكل 14</a>
                        </li>
                    </ul>
                </main>


            </div>
            <div class=" my-3">
                <div class="row flex justify-end p-3 sort-icons">
                    <i class="fa-solid fa-bars m-2"></i>
                    <i class="fa-solid fa-table-cells-large m-2"></i>
                    <i class="fa-solid fa-table-cells m-2"></i>
                    <!-- <figure class="p-3">
                    <img :src="assetPath(asset,"menu-burger.png")" class="sort-icon" alt="Card Image">

                </figure>
                <figure class="p-3">
                    <img :src="assetPath(asset,"dots-menu-svgrepo-com.svg" class="sort-icon" alt="Card Image">
                </figure> -->
                </div>
            </div>


            <div class="flex flex-wrap text-end">
                <div v-for="(product, index) in products.data" :key="index" class="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div class="bg-white relative rounded-md overflow-hidden shadow-md">
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn btn-dis"> <i class="fa-solid fa-eye"></i> عرض </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>
                        <img :src="product['image_product'][0]?.image_path" class="w-full h-48 object-cover"
                            alt="Card Image">
                        <div class="rounded card-pop p-2">
                            <div> انتهى المزاد </div>
                        </div>
                        <div class="card-body p-4">
                            <div class="card-h mb-3 flex justify-center">
                                <h5 class="card-title text-success">{{ product.title }}</h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input rounded">
                                <p class="w-48">مبلغ ترسية المزاد</p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input rounded">
                                <p class="w-48">المزاود</p>
                            </div>
                            <div class="card-h mb-3 flex justify-between">
                                <button class="btn card-btn-info">لوحة المزايدة</button>
                                <button class="btn card-btn-info">زاود</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" m-5 flex justify-end flex-col text-end">

                <p class="text-3xl font-semibold  my-1">زاود : وكن الفائز</p>
                <p class="text-xl font-semibold mb-4 text-right text-secondary ">خطوات المشاركة والفوز</p>

                <ul class="list-unstyled flex flex-wrap justify-around w-100 py-5 text-center ">
                    <li class="">
                        <p>......................... 3</p>
                        <a class="nav-link text-secondary" href="#"> المزايدة والفوز </a>
                    </li>
                    <li class="">
                        <p>......................... 2</p>
                        <a class="nav-link text-secondary" href="#"> الاشتراك </a>
                    </li>
                    <li class=" ">
                        <p>......................... 1</p>
                        <Link v-if="canRegister" :href="route('register')" class="nav-link text-secondary"> التسجيل </Link>
                    </li>

                </ul>
                <!-- <img :src="'https://mzaodin.com/website/log-removebg-preview.png'"
                            class="w-100 d-inline-block m-0 p-0 logo" alt=""> -->
                <!-- <ul class="list-unstyled flex flex-wrap justify-around w-100 py-5 ">
                    <li class="text-center">
                        <a class="nav-link text-secondary" href="#"> المزايدة والفوز </a>
                    </li>
                    <li class="">
                        <a class="nav-link text-secondary" href="#"> الاشتراك </a>
                    </li>
                    <li class=" ">
                        <Link v-if="canRegister" :href="route('register')" class="nav-link text-secondary"> التسجيل </Link>
                    </li>

                </ul> -->
                <ul class="list-unstyled flex flex-wrap justify-around min-w-full my-5  py-5 ">

                    <li class="text-center">
                        <a class="nav-link text-secondary" href="#"> من نحن</a>
                    </li>
                    <li class="">
                        <a class="nav-link text-secondary" href="#"> الروابط </a>
                    </li>
                    <li class=" ">
                        <a class="nav-link text-secondary" href="#"> التواصل </a>
                    </li>
                    <li class="text-center">
                        <img :src="'https://mzaodin.com/website/log-removebg-preview.png'"
                            class=" d-inline-block m-0 p-0 logo" alt="">
                    </li>
                </ul>

                <div class="footer-icons flex justify-between">

                    <div class="payment">
                        <iconify-icon icon="simple-icons:applepay"></iconify-icon>
                        <iconify-icon icon="logos:visa"></iconify-icon>
                        <iconify-icon icon="logos:mastercard"></iconify-icon>
                    </div>
                    <div class="social">
                        <iconify-icon icon="akar-icons:linkedin-fill"></iconify-icon>
                        <iconify-icon icon="mdi:youtube"></iconify-icon>
                        <iconify-icon icon="pajamas:x"></iconify-icon>
                    </div>
                </div>
            </div>

            <!-- <figure>
            <img :src="assetPath(asset,"Screenshot from 2024-01-12 00-59-29.png")" class="card-img-top h-100 cover" alt="Card Image">

        </figure> -->

        </div>


        <!-- Link Bootstrap JS and Popper.js -->

</Layout>
    <!-- </WebSite> -->
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
    margin: 0 100px;
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
    background-color: #f3f4f1;
}

footer {
    padding: 1rem;
    background-color: #f3f4f1;

    width: 100%;
    height: 5rem;
}

footer section {
    margin: auto;
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

@media (max-width: 1280px) {
    .logo {

        margin: 0;
    }
}

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
<script>
export default {
    methods: {
        assetPath(asset, urlPath) {
            return `${asset}/${urlPath}`;
        }
    }
}
</script>
