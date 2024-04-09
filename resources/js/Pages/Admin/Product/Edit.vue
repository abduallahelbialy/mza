<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import {
    mdiAccountKey,
    mdiArrowLeftBoldOutline,
    mdiArrowBottomRightThick,
    mdiAccountBoxPlusOutline,
    mdiAppleKeyboardCaps,
    mdiCogTransferOutline,
} from "@mdi/js";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/pagination";
const modules = [Autoplay, Pagination, Navigation];
import time from '../../Web/fakers/pepople'

import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import SectionMain from "@/Components/SectionMain.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import CardBox from "@/Components/CardBox.vue";
import FormField from "@/Components/FormField.vue";
import FormControl from "@/Components/FormControl.vue";
import BaseButton from "@/Components/BaseButton.vue";
import BaseButtons from "@/Components/BaseButtons.vue";
import NotificationBar from "@/Components/NotificationBar.vue";

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
// let images = props.product.image_product;

const form = useForm({
    _method: "put",
    //   name: props.product.name,
    name_arabic: props.product.name_arabic,
    name_english: props.product.name_english,
    sku: props.product.sku,
    weight: props.product.weight,
    payment_deadline_minutes: props.product.payment_deadline_minutes,
    cost_price: props.product.cost_price,
    estimated_market_price: props.product.estimated_market_price,
    auction_duration_minutes: props.product.auction_duration_minutes,
    registration_amount: props.product.registration_amount,
    required_bidders: props.product.required_bidders,
    opening_bid_amount: props.product.opening_bid_amount,
    product_details: props.product.product_details,
    auction_start: convertToDate(props.product.auction_start),
    auction_end: convertToDate(props.product.auction_end),
});
function convertToDate(dateString) {
    if (!dateString) return null;

    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    let day = date.getDate();
    if (day < 10) day = "0" + day;

    return `${year}-${month}-${day}`;
}
const formDelete = useForm({});

function destroyImage(id, rank) {
    if (confirm(`Are you sure you want to delete image ${rank} ? `)) {
        formDelete.delete(route("admin.product.destroyImage", id));
    }
}

// console.log('immmm',props.product.image_product);
</script>

<template>
    <LayoutAuthenticated>

        <Head title="Update product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="Update product" main>
                <BaseButton :route-name="route('admin.product.index')" :icon="mdiArrowLeftBoldOutline" label="Back"
                    color="white" rounded-full small />
            </SectionTitleLineWithButton>
            <NotificationBar :key="Date.now()" v-if="$page.props.flash.message" color="success"
                :icon="mdiAlertBoxOutline">
                {{ $page.props.flash.message }}
            </NotificationBar>
            <CardBox form @submit.prevent="
                form.post(route('admin.product.update', props.product.id))
                ">
                <FormField class="image-container">
                    <div class="flex">
                        <BaseButton label="Image Upload" class="w-32 h-10 inline-block" :route-name="route('admin.product.image', props.product.id)
                " :icon="mdiAppleKeyboardCaps" />
                        <BaseButton label="Image Edit" class="w-32 h-10 inline-block ml-4" :route-name="route(
                'admin.product.editImageProductMultible',
                props.product.id
            )
                " :icon="mdiCogTransferOutline" />
                    </div>
                </FormField>
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

                <!-- <swiper :spaceBetween="30" :centeredSlides="true"
                    :autoplay="{ delay: 2000, disableOnInteraction: false }" :pagination="{ clickable: true }"
                    :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="plu in time" :key="plu.id">
                        <div class="grid grid-cols-3 gap-4 my-4 swiper-draggable">
                            <div v-for="(image, index) in props.product.image_product" :key="image.id"
                                class="max-w-full focus:ring focus:outline-none rounded">
                                <div class="relative">
                                    <span
                                        class="absolute inset-x-1/2 text-gray-800 font-semibold bg-white bg-opacity-75 px-4 text-center py-1 rounded">{{
                image.rank }}</span>
                                    <img class="image block w-full" :src="image.image_path" :alt="image.alt" />
                                    <div class="absolute top-2 right-2">
                                        <div @click="destroyImage(image.id, image.rank)"
                                            class="px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none">
                                            <i class="fas fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper> -->
                <FormField label="Name Arabic" :class="{ 'text-red-400': form.errors.name_arabic }">
                    <FormControl v-model="form.name_arabic" type="text" placeholder="Enter Name Arabic"
                        :error="form.errors.name_arabic">
                        <div class="text-red-400 text-sm" v-if="form.errors.name_arabic">
                            {{ form.errors.name_arabic }}
                        </div>
                    </FormControl>
                </FormField>

                <FormField label="Name English" :class="{ 'text-red-400': form.errors.name_english }">
                    <FormControl v-model="form.name_english" type="text" placeholder="Enter Name English"
                        :error="form.errors.name">
                        <div class="text-red-400 text-sm" v-if="form.errors.name_english">
                            {{ form.errors.name_english }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="sku" :class="{ 'text-red-400': form.errors.sku }">
                    <FormControl v-model="form.sku" type="text" placeholder="Enter sku" :error="form.errors.sku">
                        <div class="text-red-400 text-sm" v-if="form.errors.sku">
                            {{ form.errors.sku }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="Weight" :class="{ 'text-red-400': form.errors.weight }">
                    <FormControl v-model="form.weight" type="number" step="0.01" placeholder="Enter Weight"
                        :error="form.errors.weight">
                        <div class="text-red-400 text-sm" v-if="form.errors.weight">
                            {{ form.errors.weight }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="payment deadline minutes" :class="{
                'text-red-400': form.errors.payment_deadline_minutes,
            }">
                    <FormControl v-model="form.payment_deadline_minutes" type="number" step="0.01"
                        placeholder="Enter payment deadline minutes" :error="form.errors.payment_deadline_minutes">
                        <div class="text-red-400 text-sm" v-if="form.errors.payment_deadline_minutes">
                            {{ form.errors.payment_deadline_minutes }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="cost price" :class="{ 'text-red-400': form.errors.cost_price }">
                    <FormControl v-model="form.cost_price" type="number" step="0.01" placeholder="Enter cost price"
                        :error="form.errors.cost_price">
                        <div class="text-red-400 text-sm" v-if="form.errors.cost_price">
                            {{ form.errors.cost_price }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="estimated market price" :class="{
                'text-red-400': form.errors.estimated_market_price,
            }">
                    <FormControl v-model="form.estimated_market_price" type="number" step="0.01"
                        placeholder="Enter estimated market price" :error="form.errors.estimated_market_price">
                        <div class="text-red-400 text-sm" v-if="form.errors.estimated_market_price">
                            {{ form.errors.estimated_market_price }}
                        </div>
                    </FormControl>
                </FormField>

                <FormField label="auction duration minutes" :class="{
                'text-red-400': form.errors.auction_duration_minutes,
            }">
                    <FormControl v-model="form.auction_duration_minutes" type="number"
                        placeholder="Enter auction  duration minutes" :error="form.errors.auction_duration_minutes">
                        <div class="text-red-400 text-sm" v-if="form.errors.auction_duration_minutes">
                            {{ form.errors.weight }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="registration amount" :class="{ 'text-red-400': form.errors.registration_amount }">
                    <FormControl v-model="form.registration_amount" type="number" step="0.01"
                        placeholder="Enter registration amount" :error="form.errors.registration_amount">
                        <div class="text-red-400 text-sm" v-if="form.errors.registration_amount">
                            {{ form.errors.registration_amount }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="required bidders" :class="{ 'text-red-400': form.errors.required_bidders }">
                    <FormControl v-model="form.required_bidders" type="number" step="0.01"
                        placeholder="Enter required bidders" :error="form.errors.required_bidders">
                        <div class="text-red-400 text-sm" v-if="form.errors.required_bidders">
                            {{ form.errors.required_bidders }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="opening bid amount" :class="{ 'text-red-400': form.errors.opening_bid_amount }">
                    <FormControl v-model="form.opening_bid_amount" type="number" step="0.01"
                        placeholder="Enter opening bid amount" :error="form.errors.opening_bid_amount">
                        <div class="text-red-400 text-sm" v-if="form.errors.opening_bid_amount">
                            {{ form.errors.opening_bid_amount }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="Details" :class="{ 'text-red-400': form.errors.product_details }">
                    <FormControl v-model="form.product_details" type="textarea" placeholder="Enter  Details"
                        :error="form.errors.product_details">
                        <div class="text-red-400 text-sm" v-if="form.errors.product_details">
                            {{ form.errors.product_details }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="auction start" :class="{ 'text-red-400': form.errors.auction_start }">
                    <FormControl v-model="form.auction_start" type="date" step="0.01" placeholder="Enter auction start"
                        :error="form.errors.auction_start">
                        <div class="text-red-400 text-sm" v-if="form.errors.auction_start">
                            {{ form.errors.auction_start }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="auction end" :class="{ 'text-red-400': form.errors.auction_end }">
                    <FormControl v-model="form.auction_end" type="date" step="0.01" placeholder="Enter auction end"
                        :error="form.errors.auction_end">
                        <div class="text-red-400 text-sm" v-if="form.errors.auction_end">
                            {{ form.errors.auction_end }}
                        </div>
                    </FormControl>
                </FormField>
                <template #footer>
                    <BaseButtons>
                        <BaseButton type="submit" color="info" label="Submit" :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing" />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
