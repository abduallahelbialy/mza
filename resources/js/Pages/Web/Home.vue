<script setup>
// import { Head, Link } from '@inertiajs/vue3';
import Checkbox from "@/Components/Checkbox.vue";
// import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import carddat from "../Web/fakers/cardData";
import twodata from "../Web/fakers/cardTwo";
import dataswiper from "../Web/fakers/dataswiper";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WebSite from "@/Layouts/WebSite.vue";
import Navbar from "@/Components/Landing/Navbar.vue";
import Layout from "@/Layouts/Layout.vue";
import { ref, onMounted } from "vue";
// import Pagination from "@/Components/Admin/Pagination.vue"

const modules = [Autoplay, Pagination, Navigation];

const props = defineProps({
    products: {
        type: Object,
        default: () => ({}),
    },
    auctionStatusCount: {
        type: Object,
        default: () => ({}),
    },
    auctionstatus: {
        type: Object,
        default: () => ({}),
    },
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
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
});
const data = props.products;
console.log("data", data);
const activeTab = props.auctionstatus;
console.log("dfdf", props.products.data);
function auction_status(auctionStatusActiveTab) {
    const form = useForm({
        _method: "get",

        auction_status: auctionStatusActiveTab,
    });
    form.get(route("home"));
}
const { not_started, ended, ongoing } = props.auctionStatusCount;
// const totalCountAuctionStatusCount = not_started+ ended+ ongoing;
// console.log(props.auctionStatusCount);
const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
    const loginSuccessful = true;

    if (loginSuccessful) {
        // Close the modal using jQuery
        $("#loginModal").modal("hide");
    }
};
</script>

<template>
    <!-- <WebSite :canLogin="canLogin"> -->

    <Head title="Home" />
    <Layout>
        <!-- <Navbar :canLogin="canLogin" /> -->

        <div class="container mx-auto">
            <div class="mt-5 main">
                <!-- Your content goes here -->

                <main class="rounded justify-end sm:flex-row p-5 items-center">
                    <p class="text-4xl font-bold text-end my-3">المزادات</p>

                    <ul
                        class="list-none flex flex-nowrap justify-end text-pink-600 text-[25px]"
                    >
                        <li>
                            <a
                                @click="auction_status('ended')"
                                :class="{
                                    'main-text-color': activeTab === 'ended',
                                    active: activeTab === 'ended',
                                }"
                                href="#"
                                >منتهى {{ ended }}
                            </a>
                        </li>
                        <li>
                            <a
                                @click="auction_status('not_started')"
                                :class="{
                                    'main-text-color':
                                        activeTab === 'not_started',
                                    active: activeTab === 'not_started',
                                }"
                                href="#"
                                >قادم {{ not_started }}</a
                            >
                        </li>
                        <li>
                            <a
                                @click="auction_status('ongoing')"
                                :class="{
                                    'main-text-color': activeTab === 'ongoing',
                                    active: activeTab === 'ongoing',
                                }"
                                href="#"
                                >جاري {{ ongoing }}</a
                            >
                        </li>
                        <!-- <li>
                            <a class="main-text-color" href="#">الكل {{ totalCountAuctionStatusCount }}</a>
                        </li> -->
                    </ul>
                </main>
            </div>
            <div class="my-3">
                <div class="row flex justify-end p-3 sort-icons">
                    <!-- <i
                        class="fa-solid fa-bars m-2 cursor-pointer"
                    ></i>
                    <i

                        class="fa-solid fa-table-cells m-2 cursor-pointer"
                    ></i> -->
                    <!-- <figure class="p-3">
                    <img :src="assetPath(asset,"menu-burger.png")" class="sort-icon" alt="Card Image">

                </figure>
                <figure class="p-3">
                    <img :src="assetPath(asset,"dots-menu-svgrepo-com.svg" class="sort-icon" alt="Card Image">
                </figure> -->
                </div>
            </div>

            <div class="flex flex-wrap text-end">
                <div
                    class="w-full md:w-1/2 lg:w-1/3 p-4"
                    v-for="dat in props.products.data"
                    :key="dat.id"
                    v-if="activeTab === 'not_started'"
                >
                    <div
                        class="bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn card-btn-info rounded-md">
                                <i class="fa-solid fa-eye"></i> التفاصيل
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>
                        <swiper
                            :spaceBetween="30"
                            :centeredSlides="true"
                            :autoplay="{
                                delay: 5000,
                                disableOnInteraction: false,
                            }"
                            :pagination="{
                                clickable: true,
                            }"
                            :navigation="true"
                            :modules="modules"
                            class="mySwiper"
                        >
                            <swiper-slide
                                v-for="sw in dat['image_product']"
                                :key="sw.id"
                                ><img
                                    :src="sw.image_path"
                                    class="w-full h-48 object-cover"
                                    :alt="sw.alt"
                                />
                            </swiper-slide>
                        </swiper>

                        <div class="card-body p-4">
                            <div
                                class="card-h mb-3 flex justify-center flex-col"
                            >
                                <h5
                                    class="card-titl text-green-700 text-success font-semibold"
                                >
                                    {{ dat.name_arabic }}
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    type="text"
                                    disabled
                                    :value="dat.estimated_market_price"
                                    class="card-input"
                                />
                                <p class="w-40 font-semibold">
                                    السعر التقديرى للمنتج
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    disabled
                                    type="text"
                                    :value="dat.registration_amount"
                                    class="card-input rounded"
                                />
                                <p class="w-40 font-semibold">مبلغ التسجيل</p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    disabled
                                    type="text"
                                    :value="dat.required_bidders"
                                    class="card-input rounded"
                                />
                                <p class="w-40 font-semibold">
                                    الباقى من المشتركين للبدء
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    disabled
                                    type="text"
                                    :value="dat.opening_bid_amount"
                                    class="card-input"
                                />
                                <p class="w-40 font-semibold">
                                    الحد الادنى للتزايد
                                </p>
                            </div>
                            <div class="card-h mb-3 flex justify-between">
                                <Link :href="route('Contrdashdone', dat.id)">
                                    <button class="btn card-btn-info">
                                        التسجيل فى المزاد
                                    </button>
                                </Link>
                            </div>
                            <div
                                class="flex justify-between flex-1 items-center"
                            >
                                <div class="flex flex-col text-[22px]">
                                    <p class="text-center font-semibold mb-3">
                                        شارك المنتج
                                    </p>
                                    <div class="flex gap-3 cursor-pointer">
                                        <i
                                            class="fa-brands fa-whatsapp"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-twitter"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-solid fa-share-nodes"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-facebook-f"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-snapchat"
                                            style="color: #63e6be"
                                        ></i>
                                    </div>
                                </div>
                                <div class="flex gap-3 ms-20 flex-wrap">
                                    <!-- <button
                                        class="bg-green-600 px-4 h-7 text-white rounded-md"
                                    >
                                        اضف تقيمك
                                    </button> -->
                                    <p class="text-[25px] text-gray-600">
                                        التقييمات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap text-end">
                <div
                    class="w-full md:w-1/2 lg:w-1/3 p-4"
                    v-for="dat in props.products.data"
                    :key="dat.id"
                    v-if="activeTab === 'ongoing'"
                >
                    <div
                        class="bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn card-btn-info rounded-md">
                                <i class="fa-solid fa-eye"></i> التفاصيل
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>

                        <swiper
                            :autoplay="{
                                delay: 5000,
                                disableOnInteraction: false,
                            }"
                            :grabCursor="true"
                            :effect="'creative'"
                            :creativeEffect="{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },

                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }"
                            :modules="modules"
                            class="mySwiper"
                        >
                            <swiper-slide
                                v-for="sw in dat['image_product']"
                                :key="sw.id"
                                ><img
                                    :src="sw.image_path"
                                    class="w-full h-48 object-cover"
                                    :alt="sw.alt"
                                />
                            </swiper-slide>
                        </swiper>

                        <div class="card-body p-4">
                            <div Class=" relative">
                                <p
                                    class="absolute-center z-20 bg-slate-50 text-center border-2 border-black py-2 px-4 w-52 rounded-lg"
                                >
                                    جارى يتنهى بعد
                                </p>
                                <div
                                    class="flex justify-center gap-4 mt-[-80px] relative z-20"
                                >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                    >
                                        01 <br />يوم</sapn
                                    >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                    >
                                        07 <br />ساعة</sapn
                                    >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                    >
                                        54 <br />دقيقة</sapn
                                    >
                                    <sapn
                                        class="bg-slate-50 text-center border-2 border-black font-semibold py-2 px-4 w-16 h-16 rounded-lg"
                                    >
                                        02 <br />ثانية</sapn
                                    >
                                </div>
                            </div>
                            <div
                                class="card-h mb-3 mt-2 text-green-700 flex justify-center flex-col"
                            >
                                <h5 class="card-titl font-semibold">
                                    {{ dat.name_arabic }}
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input type="text" class="card-input" />
                                <p class="w-32 font-semibold">
                                    اعلى مبلغ مزايدة
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    type="text"
                                    class="card-input rounded-lg"
                                />
                                <p class="w-32 font-semibold">المزاود</p>
                            </div>

                            <div class="card-h mb-3 flex justify-between">
                                <Link :href="route('Controlthree', dat.id)">
                                    <button
                                        class="btn card-btn-info rounded-lg"
                                    >
                                        لوحة المزايدة
                                    </button>
                                </Link>
                                <Link :href="route('Controtwo', dat.id)">
                                    <button
                                        class="btn card-btn-info rounded-lg"
                                    >
                                        زواد
                                    </button>
                                </Link>
                            </div>
                            <div
                                class="flex justify-between flex-1 items-center"
                            >
                                <div class="flex flex-col text-[22px]">
                                    <p class="text-center font-semibold mb-3">
                                        شارك المنتج
                                    </p>
                                    <div class="flex gap-3 cursor-pointer">
                                        <i
                                            class="fa-brands fa-whatsapp"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-twitter"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-solid fa-share-nodes"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-facebook-f"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-snapchat"
                                            style="color: #63e6be"
                                        ></i>
                                    </div>
                                </div>
                                <div class="flex gap-3 ms-20 flex-wrap">
                                    <!-- <button
                                        class="bg-green-600 px-4 h-7 text-white rounded-md"
                                    >
                                        اضف تقيمك
                                    </button> -->
                                    <p class="text-[25px] text-gray-600">
                                        التقييمات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap text-end">
                <div
                    class="w-full md:w-1/2 lg:w-1/3 p-4"
                    v-for="dat in props.products.data"
                    :key="dat.id"
                    v-if="activeTab === 'ended'"
                >
                    <div
                        class="bg-white relative rounded-md overflow-hidden shadow-md border-2 border-black"
                    >
                        <div class="card-img-info flex justify-end p-2 w-100">
                            <div class="btn card-btn-info rounded-md">
                                <i class="fa-solid fa-eye"></i> التفاصيل
                            </div>
                            <i class="fa-solid fa-star star"></i>
                        </div>

                        <swiper
                            :autoplay="{
                                delay: 5000,
                                disableOnInteraction: false,
                            }"
                            :grabCursor="true"
                            :effect="'creative'"
                            :creativeEffect="creativeEffect"
                            :modules="modules"
                            class="mySwiper"
                          
                        >
           
                            <swiper-slide
                                v-for="sw in dat['image_product']"
                                :key="sw.id"
                            >
                                <a
       
        :href="sw.image_path"
        class="lg-item"
        :data-src="sw.image_path"
        :key="sw.id"
      >

        <img
          :src="sw.image_path"
          class="w-full h-48 object-cover hovse"
          :alt="sw.alt"
        />
      </a>
    
                            </swiper-slide>
                            
                        </swiper>

                        <div class="card-body p-4">
                            <div Class=" relative">
                                <p
                                    class="absolute-center text-[35px] z-20 bg-slate-50 text-center border-2 border-black py-1 px-4 w-60 rounded-lg"
                                >
                                    انتهى المزاد
                                </p>
                            </div>
                            <div
                                class="card-h mb-3 mt-2 text-green-700 flex justify-center flex-col"
                            >
                                <h5 class="card-titl font-semibold">
                                    {{ dat.name_arabic }}
                                </h5>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    disabled
                                    type="text"
                                    :value="dat.auction_award_amount ?? 0"
                                    class="card-input"
                                />
                                <p class="w-32 font-semibold">
                                    مبلغ ترسية المزاد
                                </p>
                            </div>
                            <div class="card-b mb-3 flex justify-end">
                                <input
                                    type="text"
                                    class="card-input rounded-lg"
                                />
                                <p class="w-32 font-semibold">المزاود</p>
                            </div>

                            <div class="card-h mb-3 flex justify-between">
                                <Link :href="route('Controlthree', dat.id)">
                                    <button
                                        class="btn card-btn-info rounded-lg"
                                    >
                                        لوحة المزايدة
                                    </button>
                                </Link>
                            </div>
                            <div
                                class="flex justify-between flex-1 items-center"
                            >
                                <div class="flex flex-col text-[22px]">
                                    <p class="text-center font-semibold mb-3">
                                        شارك المنتج
                                    </p>
                                    <div class="flex gap-3 cursor-pointer">
                                        <i
                                            class="fa-brands fa-whatsapp"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-twitter"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-solid fa-share-nodes"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-facebook-f"
                                            style="color: #63e6be"
                                        ></i>
                                        <i
                                            class="fa-brands fa-snapchat"
                                            style="color: #63e6be"
                                        ></i>
                                    </div>
                                </div>
                                <div class="flex gap-3 ms-20 flex-wrap">
                                    <!-- <button
                                        class="bg-green-600 px-4 h-7 text-white rounded-md"
                                    >
                                        اضف تقيمك
                                    </button> -->
                                    <p class="text-[25px] text-gray-600">
                                        التقييمات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //pageing// -->
            <!-- <nav>
                <ul class="flex justify-center mb-4">
                    <template v-for="(link, key) in data.links">
                        <template v-if="key > 0 && key < data.last_page + 1">
                            <li>
                                <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                                    href="#">
                                    1
                                </a>
                            </li>

                        </template>
</template>
</ul>
</nav> -->
            <nav>
                <div
                    v-if="data.links.length > 3"
                    role="navigation"
                    aria-label="Pagination Navigation"
                    class="flex items-center justify-between"
                >
                    <div class="flex justify-between flex-1 sm:hidden">
                        <span
                            v-if="data.current_page <= 1"
                            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md"
                        >
                            Previous
                        </span>
                        <Link
                            v-else
                            :href="data.prev_page_url"
                            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                        >
                            Previous
                        </Link>

                        <Link
                            v-if="data.current_page < data.last_page"
                            :href="data.next_page_url"
                            class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                        >
                            Next
                        </Link>
                        <span
                            v-else
                            class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md"
                        >
                            Next
                        </span>
                    </div>

                    <div
                        class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
                    >
                        <div>
                            <p class="text-sm text-gray-700 leading-5">
                                Showing
                                <span class="font-medium">{{ data.from }}</span>
                                to
                                <span class="font-medium">{{ data.to }}</span>
                                of
                                <span class="font-medium">{{
                                    data.total
                                }}</span>
                                results
                            </p>
                        </div>

                        <div>
                            <span
                                class="relative z-0 inline-flex shadow-sm rounded-md"
                            >
                                <span
                                    v-if="data.current_page <= 1"
                                    aria-disabled="true"
                                    aria-label="Previous"
                                >
                                    <span
                                        class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </span>
                                <Link
                                    v-else
                                    :href="data.prev_page_url"
                                    rel="prev"
                                    class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                                    aria-label="Previous"
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Link>

                                <template v-for="(link, key) in data.links">
                                    <template
                                        v-if="
                                            key > 0 && key < data.last_page + 1
                                        "
                                    >
                                        <span
                                            v-if="
                                                !link.active &&
                                                link.url === null
                                            "
                                            :key="key"
                                            aria-disabled="true"
                                        >
                                            <span
                                                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5"
                                                >{{ link.label }}</span
                                            >
                                        </span>

                                        <span
                                            v-else-if="link.active"
                                            :key="`current-${key}`"
                                            aria-current="page"
                                        >
                                            <span
                                                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5"
                                                >{{ link.label }}</span
                                            >
                                        </span>

                                        <Link
                                            v-else
                                            :key="`link-${key}`"
                                            :href="link.url"
                                            v-html="link.label"
                                            class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                            aria-label="`Go to page ${link.label}`"
                                        />
                                    </template>
                                </template>

                                <Link
                                    v-if="data.current_page < data.last_page"
                                    :href="data.next_page_url"
                                    rel="next"
                                    class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                                    aria-label="Next"
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <span
                                    v-else
                                    aria-disabled="true"
                                    aria-label="Next"
                                >
                                    <span
                                        class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-r-md leading-5"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="m-5 flex justify-end flex-col text-end">
                <p class="text-3xl font-semibold my-1">زاود : وكن الفائز</p>
                <p class="text-xl font-semibold mb-4 text-right text-secondary">
                    خطوات المشاركة والفوز
                </p>

                <ul
                    class="list-unstyled flex flex-wrap justify-around w-100 py-5 text-center"
                >
                    <li class="">
                        <div class="w-32">
                            <img
                                class="img-fluid"
                                src="https://mzaodin.com/website/log-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <a
                            class="nav-link text-secondary text-[25px] font-semibold"
                            href="#"
                        >
                            المزايدة والفوز
                        </a>
                    </li>
                    <li class="">
                        <div class="w-32">
                            <img
                                class="img-fluid"
                                src="https://mzaodin.com/website/log-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <a
                            class="nav-link text-secondary text-[25px] font-semibold"
                            href="#"
                        >
                            الاشتراك
                        </a>
                    </li>
                    <li class=" ">
                        <div class="w-32">
                            <img
                                class="img-fluid"
                                src="https://mzaodin.com/website/log-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="nav-link text-secondary text-[25px] font-semibold"
                        >
                            التسجيل
                        </Link>
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
                <ul
                    class="list-unstyled flex flex-wrap justify-between ms-3 min-w-full my-5"
                >
                    <li class="">
                        <a
                            class="nav-link text-black text-[25px] font-semibold"
                            href="#"
                        >
                            التواصل</a
                        >
                        <p class="text-[16px] text-pink-600 font-semibold">
                            الرياض -المملكة العربية السعودية
                        </p>
                        <p class="text-[16px] text-pink-600 font-semibold">
                            تواصل معنا
                        </p>
                        <sapn class="text-[13px] text-pink-600 font-semibold"
                            >info@mazaodin.com</sapn
                        >
                    </li>
                    <li class="text-center">
                        <a
                            class="nav-link text-black text-[25px] font-semibold"
                            href="#"
                        >
                            <a
                                class="nav-link text-black text-[25px] font-semibold ms-6"
                                href="#"
                            >
                                الروابط</a
                            >
                            <ul>
                                <li>
                                    <Link
                                        :href="route('termsAndConditions')"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >الشروط والاحكام</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        :href="route('privacyPolicy')"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >سياسة الخصوصية</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        :href="route('returnConditions')"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >سياسة الاسترجاع</Link
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >الاسئلة الشائعة</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-[16px] text-pink-600 font-semibold"
                                        >التقييمات</a
                                    >
                                </li>
                            </ul>
                        </a>
                    </li>
                    <li class="phon-who">
                        <a
                            class="nav-link text-black text-[25px] font-semibold"
                            href="#"
                        >
                            من نحن
                            <p class="text-[30px] text-pink-600 font-semibold">
                                منصة سعودية للمزادات
                            </p>
                            <p class="text-[16px] text-pink-600 font-semibold">
                                منصة تفاعلية رائدة فى تقديم المزادات الرقمية<br />
                                للعديد من من الاصول والمتنجات
                            </p>
                        </a>
                    </li>
                    <li class="text-center">
                        <img
                            :src="'https://mzaodin.com/website/log-removebg-preview.png'"
                            class="d-inline-block m-0 p-0 logo img-phon"
                            alt=""
                        />
                    </li>
                </ul>

                <div
                    class="icons flex justify-between items-center flex-wrap cursor-pointer"
                >
                    <div class="flex gap-3 text-[25px] diticon">
                        <i class="fa-brands fa-paypal"></i>
                        <i class="fa-solid fa-money-check-dollar"></i>
                        <i class="fa-brands fa-cc-amazon-pay"></i>
                        <i
                            class="fa-regular fa-credit-card"
                            style="color: #74c0fc"
                        ></i>
                        <i class="fa-brands fa-alipay"></i>
                    </div>
                    <div class="flex gap-3 text-[25px] cursor-pointer">
                        <div class="relative iconwhat">
                            <i
                                class="fa-brands fa-whatsapp absolute"
                                style="color: #dd9127"
                            ></i>
                        </div>
                        <a
                            target="blank"
                            href="https://twitter.com/home?lang=ar"
                        >
                            <i class="fa-brands fa-x-twitter text-gray-500"></i>
                        </a>
                        <a target="blank" href="https://www.youtube.com/">
                            <i class="fa-brands fa-youtube text-gray-500"></i>
                        </a>
                        <a target="blank" href="https://www.linkedin.com/feed/">
                            <i
                                class="fa-brands fa-linkedin-in text-gray-500"
                            ></i>
                        </a>
                        <a target="blank" href="https://www.snapchat.com/ar">
                            <i
                                class="fa-brands fa-square-snapchat"
                                style="color: #ffd43b"
                            ></i>
                        </a>
                        <a target="blank" href="https://www.instagram.com/">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a target="blank" href="https://www.facebook.com/">
                            <i
                                class="fa-brands fa-facebook"
                                style="color: #74c0fc"
                            ></i>
                        </a>
                    </div>
                </div>
                <div class="footer-icons flex justify-between">
                    <div class="payment">
                        <iconify-icon
                            icon="simple-icons:applepay"
                        ></iconify-icon>
                        <iconify-icon icon="logos:visa"></iconify-icon>
                        <iconify-icon icon="logos:mastercard"></iconify-icon>
                    </div>

                    <div class="social">
                        <iconify-icon
                            icon="akar-icons:linkedin-fill"
                        ></iconify-icon>
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
<style scoped>
/* .hovse:hover{
width:500px;
height: 500px;
transition: 0.3s;
position: relative;
z-index: 30;
} */



/* Additional styling for image overlay */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}
.iconwhat i {
    display: none;
}

@media (max-width: 477px) {
    .inputs {
        flex-direction: column;
    }

    .puls {
        flex-direction: column;
        gap: 10px;
    }

    .icons {
        justify-content: center;
        gap: 10px;
        padding-bottom: 5px;
        border-bottom: 3px solid rgb(162, 9, 147);
    }

    .iconwhat i {
        color: rgb(221, 145, 39);
        left: -44px;
        display: block;
        font-size: 36px;
        top: -8px;
    }

    .diticon {
        padding-bottom: 5px;
        width: 100%;
        border-bottom: 3px solid rgb(162, 9, 147);
    }

    .diticon i {
        margin: auto;
    }

    .phon-who {
        margin-left: 77px;
    }

    .img-phon {
        display: none;
    }
}

.card-img-info {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    z-index: 1000;
}

.active {
    border-bottom: 2px #c23381 solid;
}

.absolute-center {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
