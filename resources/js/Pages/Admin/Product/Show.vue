<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import {
    mdiAccountKey,
    mdiArrowLeftBoldOutline,
    mdiAccessPointOff,
    mdiAccessPoint,
    mdiEyeOff,
    mdiEyeSettings,
} from "@mdi/js";
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import SectionMain from "@/Components/SectionMain.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import CardBox from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Autoplay, Pagination, Navigation];

const props = defineProps({
    product: {
        type: Object,
        default: () => ({}),
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
const form = useForm({});

function destroy(id) {
    if (confirm("Are you sure you want to delete?")) {
        form.delete(route("admin.permission.destroy", id));
    }
}
function visible(id) {
    if (confirm("Are you sure you want to change visible?")) {
        form.put(route("admin.product.visible", id));
    }
}
function active(id) {
    if (confirm("Are you sure you want to change active?")) {
        form.put(route("admin.product.active", id));
    }
}
console.log(props.product)
</script>

<template>
    <LayoutAuthenticated>

        <Head title="View product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="View product" main>
                <BaseButton :route-name="route('admin.product.index')" :icon="mdiArrowLeftBoldOutline" label="Back"
                    color="white" rounded-full small />
            </SectionTitleLineWithButton>

            <CardBox class="mb-6">
                <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                delay: 1500,
                disableOnInteraction: true,
            }" :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="sw in props.product['image_product']" :key="sw.id"><img :src="sw.image_path"
                            class="w-full h-48 object-cover" :alt="sw.alt" />
                    </swiper-slide>
                </swiper>

                <table>
                    <tbody>

                        <tr>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                Name Arabic
                            </td>

                            <td data-label="Name Arabic">
                                {{ product.name_arabic }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                Name English
                            </td>

                            <td data-label="Name English">
                                {{ product.name_english }}
                            </td>

                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                Product Details
                            </td>

                            <td data-label="Product Details">
                                {{ product.product_details }}
                            </td>
                            <!-- // -->
                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                sku
                            </td>

                            <td data-label="sku">
                                {{ product.sku }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                weight
                            </td>

                            <td data-label="weight">
                                {{ product.weight }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                estimated market price
                            </td>

                            <td data-label="estimated market price">
                                {{ product.estimated_market_price }}
                            </td>
                            <!-- // -->
                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                cost price
                            </td>

                            <td data-label="cost price">
                                {{ product.cost_price }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                required bidders
                            </td>

                            <td data-label="required bidders">
                                {{ product.required_bidders }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                registration amount
                            </td>

                            <td data-label="registration amount">
                                {{ product.registration_amount }}
                            </td>
                            <!-- // -->
                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                auction duration minutes
                            </td>

                            <td data-label="auction duration minutes">
                                {{ product.auction_duration_minutes }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                opening bid amount
                            </td>

                            <td data-label="opening bid amount">
                                {{ product.opening_bid_amount }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                payment deadline minutes
                            </td>

                            <td data-label="payment deadline minutes">
                                {{ product.payment_deadline_minutes }}
                            </td>
                            <!-- // -->
                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                is active
                            </td>

                            <td data-label="is active">
                                <BaseButton v-if="!product.is_active" color="danger" :icon="mdiAccessPointOff" small
                                    @click="active(product.id)" />
                                <BaseButton v-if="product.is_active" color="success" :icon="mdiAccessPoint" small
                                    @click="active(product.id)" />
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                is visible
                            </td>

                            <td data-label="is visible">
                                <BaseButton v-if="!product.is_visible" color="danger" :icon="mdiEyeOff" small
                                    @click="visible(product.id)" />
                                <BaseButton v-if="product.is_visible" color="success" :icon="mdiEyeSettings" small
                                    @click="visible(product.id)" />
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                Created
                            </td>
                            <td data-label="Created">
                                {{
                new Date(
                    product.created_at
                ).toLocaleString()
            }}
                            </td>
                            <!-- // -->
                        </tr>
                        <tr>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                auction start
                            </td>

                            <td data-label="auction start">
                                {{ product.auction_start }}
                            </td>
                            <!-- // -->
                            <td class="p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block">
                                auction end
                            </td>

                            <td data-label="auction end">
                                {{ product.auction_end }}
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>

                </table>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
