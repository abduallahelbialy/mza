<script setup>
import Checkbox from '@/Components/Checkbox.vue';
// import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm ,usePage , router} from '@inertiajs/vue3';
import { reactive, computed } from 'vue'
import WebSite from '@/Layouts/WebSite.vue'
import Navbar from '@/Components/Landing/Navbar.vue';
import Layout from "@/Layouts/Layout.vue"
const user = computed(() => usePage().props.auth.user)
console.log('mmmmm,',user)

</script>

<template>

    <Head title="Settings" />
    <Layout>

        <div class="container mx-auto">
            <div class=" mt-5 main">

                <div class="flex flex-wrap text-end">
                    <div class="w-full  p-4">
                        <div class="bg-white relative rounded-md overflow-hidden shadow-md">
                            <div class="card-img-info flex justify-end p-2 w-100">


                            </div>
                            <div class="md:w-1/2 lg:w-1/3 m-auto rounded">
                                <figure>
                                    <img :src="user.image_path"
                                        class="rounded-full w-full h-48 object-cover" alt="Card Image">
                                </figure>
                            </div>

                            <div class="card-body p-4">
                                <div class="card-h mb-3 flex justify-center">
                                    <h5 class="card-title text-success">{{ user.name }}</h5>
                                </div>
                                <div class="card-b mb-3 flex justify-end">
                                    <input type="text" class="  rounded" :value="user.name">
                                    <p class="w-48">الاسم</p>
                                </div>
                                <div class="card-b mb-3 flex justify-end">
                                    <input type="text" class="rounded" :value="user.email">
                                    <p class="w-48">الايميل</p>
                                </div>
                                <div class="card-h mb-3 flex justify-between">
                                    <!-- <button class="btn card-btn-info">لوحة المزايدة</button> -->
                                    <button class="btn card-btn-info">تعديل</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- Repeat similar structure for other columns -->

                </div>

            </div>

        </div>



    </Layout>

    <!-- </WebSite> -->
</template>
