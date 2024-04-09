<template>
    <Layout>
        <div class="contrdash px-8 py-32">
            <div class="container mx-auto">
                <div
                    class="bg-white cardas relative rounded-md overflow-hidden shadow-md border-2 border-black p-2 w-[50%] m-auto"
                >
                    <div
                        class="border-2 border-black text-center w-full rounded-lg text-black p-2"
                    >
                        <p class="font-semibold">لوحة زواد للمشتركين فقط</p>
                    </div>
                    <div
                        class="btns flex justify-between gap-2 items-center mt-2 flex-wrap-reverse"
                        v-for="plu in inputs"
                        :key="plu.id"
                    >
                        <div class="flex gap-4">
                            <button
                                class="bg-red-500 text-white font-semibold rounded-xl px-2 py-2 text-center w-24"
                            >
                                ارسال الامر
                            </button>
                            <button
                                class="px-2 py-2 rounded-xl  border-2 text-white font-semibold w-24 bg-red-500"
                            >
                                اغلاق
                            </button>
                        </div>
                        <div class="flex justify-center eidt-lg">
                            <div class="flex mt-1 gap-[33px] text-teal-700">
                                <p>يوم</p>
                                <p>ساعه</p>
                                <p>دقيقة</p>
                                <p>ثانية</p>
                            </div>
                        </div>
                        <div class="flex justify-center eidt-lg">
                            <div class="flex mt-2 gap-[2px] cursor-pointer">
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    0
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    1
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    0
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    0
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    4
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    8
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    5
                                </p>
                                <p
                                    class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                                >
                                    2
                                </p>
                            </div>
                        </div>

                        <div class="eidt-phone">
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center one"
                            >
                                الدخل المبلغ
                            </p>
                            <input
                                type="number"
                                placeholder="370"
                                class="rounded-lg text-center two"
                            />
                        </div>
                        <div class="eidt-phone">
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center one"
                            >
                                اعلى مبلغ مزاودة
                            </p>
                            <input
                                type="number"
                                placeholder="330"
                                class="rounded-lg text-center two"
                            />
                        </div>
                    </div>
                    <div class="flex justify-center eidt-sm">
                        <div class="flex mt-2 gap-[2px] cursor-pointer">
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                0
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                1
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                0
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                0
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                4
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                8
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                5
                            </p>
                            <p
                                class="w-6 h-8 text-center bg-teal-700 text-white rounded-md p-2"
                            >
                                2
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center eidt-sm">
                        <div class="flex mt-1 gap-[33px] text-teal-700">
                            <p>يوم</p>
                            <p>ساعه</p>
                            <p>دقيقة</p>
                            <p>ثانية</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Layout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import time from "../Web/fakers/time";
export default {
    components: { Layout },
    data() {
        return {
            inputs: time,
        };
    },
};
</script>

<style scoped>
.eidt-lg {
    display: none;
}
@media (max-width: 477px) {
    .btns {
        justify-content: center;
    }
    .cardas {
        width: 100%;
    }
    .eidt-phone {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        align-items: center;
        flex-direction: row-reverse;
    }
    .eidt-lg {
        display: block;
    }
    .eidt-phone .one {
        width: 50%;
    }
    .eidt-phone .two {
        width: 50%;
        padding: 4px;
    }
    .eidt-sm {
        display: none;
    }
}
@media (max-width:799px) {
     .eidt-phone {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        align-items: center;
        flex-direction: row-reverse;
    }
    .eidt-lg {
        display: block;
        margin: auto;
    }
    .eidt-phone .one {
        width: 52%;
    }
    .eidt-phone .two {
        width: 48%;
        padding: 4px;
    }
    .eidt-sm {
        display: none;
    }
}
@media (max-width:992px) {
     .eidt-phone {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        align-items: center;
        flex-direction: row-reverse;
    }
    .eidt-lg {
        display: block;
        margin: auto;
    }
    .eidt-phone .one {
        width: 52%;
    }
    .eidt-phone .two {
        width: 48%;
        padding: 4px;
    }
    .eidt-sm {
        display: none;
    }
}
</style>
