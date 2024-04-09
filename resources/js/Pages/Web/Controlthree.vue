<template>
    <Layout>
        <div class="contrdash px-8 py-24">
            <div class="container mx-auto">
                <div
                    class="bg-white cardas relative rounded-md overflow-hidden shadow-md border-2 border-black p-2 w-[50%] m-auto"
                >
                    <div
                        class="border-2 border-black text-center w-full rounded-lg text-black p-2"
                    >
                        <p class="font-semibold">لوحة سجل المزايدات</p>
                    </div>
                    <div
                        class="btns flex justify-between gap-2 items-center mt-2 flex-wrap-reverse eidt-lg"
                        v-for="plu in inputs"
                        :key="plu.id"
                    >
                        <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                الوقت
                            </p>
                            <input
                                type="number"
                                placeholder="11:22:28"
                                class="rounded-lg text-center"
                            />
                        </div>
                        <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                المبلغ
                            </p>
                            <input
                                type="number"
                                placeholder="370"
                                class="rounded-lg text-center"
                            />
                        </div>
                        <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                المزاود
                            </p>
                            <input
                                type="text"
                                placeholder="ادخل الاسم"
                                class="rounded-lg text-center"
                            />
                        </div>
                    </div>

                    <div
                        class="phone-ca mt-2 border-black text-center flex items-center justify-between"
                    >
                        <p
                            class="text-white font-semibold rounded-lg mb-1 p-1 text-center"
                        >
                            الوقت
                        </p>
                        <p
                            class="text-white font-semibold rounded-lg mb-1 p-1 text-center"
                        >
                            المبلغ
                        </p>
                        <p
                            class="text-white font-semibold rounded-lg mb-1 p-1 text-center"
                        >
                            المزاود
                        </p>
                    </div>
                    <div
                        class="name flex justify-between"
                        v-for="name in names"
                        :key="name.id"
                    >
                        <p>{{ name.time }}</p>
                        <p>{{ name.num }}</p>
                        <p>{{ name.title }}</p>
                    </div>
                    <div class="flex justify-center">
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
                    <div class="flex justify-center">
                        <div class="flex mt-1 gap-[33px] text-teal-700">
                            <p>يوم</p>
                            <p>ساعه</p>
                            <p>دقيقة</p>
                            <p>ثانية</p>
                        </div>
                    </div>
                    <div class="btn-colse text-center mt-2">
                        <button type="submit"
                            class="bg-red-500 rounded-xl px-4 py-2 text-white w-44"
                        >
                            غلاق
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Layout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import time from "../Web/fakers/pepople";
export default {
    components: { Layout },
    data() {
        return {
            inputs: time,
            names: [
                { id: 1, title: "ابوطارق", num: "330", time: "11:22:48" },
                { id: 3, title: "ابوطارق", num: "330", time: "11:22:48" },
                { id: 4, title: "ابوطارق", num: "330", time: "11:22:48" },
                { id: 2, title: "محمد 2024", num: "320", time: "11:20:48" },
            ],
        };
    },
};
</script>

<style scoped>
.phone-ca {
    display: none;
}
.name {
    display: none;
}
@media (max-width: 477px) {
    .btns {
        justify-content: center;
    }
    .cardas {
        width: 100%;
    }
    .eidt-lg {
        display: none;
    }
    .phone-ca {
        display: flex;
        background-color: #ff0000bd;
        border: 2px solid black;
        border-radius: 4px;
    }
    .name {
        display: flex;
        border: 2px solid black;
        padding: 5px;
    }
}
</style>
