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
                        <p class="font-semibold">لوحة التسجيل فى المزاد</p>
                    </div>
                    <div
                        class="flex justify-between items-center mt-1 mb-1 flex-wrap btns"
                    >
                        <div class="eidt-phone">
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center one"
                            >
                                مبلغ التسجيل الفردى
                            </p>
                            <input
                                type="number"
                                placeholder="15"
                                class="rounded-lg text-center two"
                            />
                        </div>
                        <div class="eidt-phone">
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 mt-1 p-1 text-center one  "
                            >الباقى من المشتركين  للبدء
                            </p>
                            <input
                                type="number"
                                placeholder="15"
                                class="rounded-lg text-center two"
                            />
                        </div>
                    </div>
                    <div
                        class="flex justify-between gap-4 items-center mt-3 flex-wrap-reverse btns"
                    >
                        <div class="eidt-phone flex gap-4">
                            <button
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 px-7 text-center btnone "
                            >
                        اشتراك
                            </button>
                            <button
                                                               class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 px-7 text-center btnone "

                            >
                              اغلاق  
                            </button>
                        </div>
                        <div class="eidt-phone">
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center one"
                            >
                                بعدد اشتراكات
                            </p>
                            <input
                                type="number"
                                placeholder="2"
                                class="rounded-lg text-center two"
                            />
                        </div>
                        <div class="eidt-phone">
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center one"
                            >
                                مجموعة القيمة
                            </p>
                            <input
                                type="number"
                                placeholder="200"
                                class="rounded-lg text-center two"
                            />
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

export default {
    components: { Layout },
};
</script>

<style scoped>
@media (max-width: 477px) {
    .cardas {
        width: 100%;
    }
    .btns {
        justify-content: center;
    }
    .eidt-phone {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        gap: 3px;
        flex-direction: row-reverse;
    }
    .eidt-phone .one {
        width: 50%;
        padding: 4px !important;
    }
   
    .eidt-phone .two {
        width: 50%;
        padding: 4px;
    }
}
</style>
