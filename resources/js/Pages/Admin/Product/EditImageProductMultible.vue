<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3"
import {
    mdiAccountKey,
    mdiArrowLeftBoldOutline,
    mdiArrowBottomRightThick,
    mdiAccountBoxPlusOutline,
    mdiAppleKeyboardCaps,
    mdiCogTransferOutline
} from "@mdi/js"
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import SectionMain from "@/Components/SectionMain.vue"
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue"
import CardBox from "@/Components/CardBox.vue"
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseButton from '@/Components/BaseButton.vue'
import BaseButtons from '@/Components/BaseButtons.vue'
import NotificationBar from "@/Components/NotificationBar.vue"

const props = defineProps({
    product: {
        type: Object,
        default: () => ({}),
    },
})
// let images = props.product.image_product;

// const form = useForm({
//     _method: 'put',
//     //   name: props.product.name,
//     name_arabic: props.product.name_arabic,
//     name_english: props.product.name_english,
//     sku: props.product.sku,
//     weight: props.product.weight,
//     payment_deadline_minutes: props.product.payment_deadline_minutes,
//     cost_price: props.product.cost_price,
//     estimated_market_price: props.product.estimated_market_price,
//     auction_duration_minutes: props.product.auction_duration_minutes,
//     registration_amount: props.product.registration_amount,
//     required_bidders: props.product.required_bidders,
//     opening_bid_amount: props.product.opening_bid_amount,
//     product_details: props.product.product_details,
//     auction_start: convertToDate(props.product.auction_start),
//     auction_end: convertToDate(props.product.auction_end),
// })
// function convertToDate(dateString) {
//     if (!dateString) return null;

//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     if (month < 10) month = '0' + month;
//     let day = date.getDate();
//     if (day < 10) day = '0' + day;

//     return `${year}-${month}-${day}`;
// }
const formDelete = useForm({})

function destroyImage(id, rank) {
    if (confirm(`Are you sure you want to delete image ${rank} ? `)) {
        formDelete.delete(route("admin.product.destroyImage", id))
    }
}
function removeAllImage(id) {
    if (confirm(`هل انت متأكد من حذف جميع الصور  ? `)) {
        if (confirm(`التأكييد الاخير للحذف  ? `)) {

            formDelete.delete(route("admin.product.destroyAllImageForProduct", id))
        }
    }
};

// console.log('immmm',props.product.image_product);
</script>

<template>
    <LayoutAuthenticated>

        <Head title="Update product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="Update product" main>
                <BaseButton :route-name="route('admin.product.edit',props.product.id)" :icon="mdiArrowLeftBoldOutline" label="Back"
                    color="white" rounded-full small />
            </SectionTitleLineWithButton>
            <NotificationBar :key="Date.now()" v-if="$page.props.flash.message" color="success" :icon="mdiAlertBoxOutline">
                {{ $page.props.flash.message }}
            </NotificationBar>
            <CardBox dev>

                <FormField class="image-container">
                    <div class="flex">

                        <button type="button" @click="removeAllImage(props.product.id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <i class="fas fa-trash"></i>

                            حذف جميع الصور</button>

                    </div>



                </FormField>
                <div class="grid grid-cols-3 gap-4 my-4">
                    <div v-for="(image, index) in props.product.image_product" :key="image.id"
                        class="max-w-full focus:ring focus:outline-none rounded">
                        <div class="relative">
                            <span
                                class="absolute inset-x-1/2 text-gray-800 font-semibold bg-white bg-opacity-75 px-4 text-center py-1 rounded">{{
                                    image.rank }}</span>
                            <img class="image block w-full" :src="image.image_path" :alt="image.alt">
                            <div class="absolute top-2 right-2">
                                <div @click="destroyImage(image.id, image.rank)"
                                    class="px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none">
                                    <i class="fas fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
