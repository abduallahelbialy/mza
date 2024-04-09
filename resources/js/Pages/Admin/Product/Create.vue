<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3"
import {
    mdiAccountKey,
    mdiArrowLeftBoldOutline
} from "@mdi/js"
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import SectionMain from "@/Components/SectionMain.vue"
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue"
import CardBox from "@/Components/CardBox.vue"
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseButton from '@/Components/BaseButton.vue'
import BaseButtons from '@/Components/BaseButtons.vue'
import { ref } from 'vue'

// let image = ref(null)


let imageUrl = ref(null)

let form = useForm({
    name_arabic: '',
    name_english: '',
    sku: '',
    weight: '',
    payment_deadline_minutes: '',
    cost_price: '',
    estimated_market_price: '',
    auction_duration_minutes: '',
    registration_amount: '',
    required_bidders: '',
    opening_bid_amount: '',
    product_details: '',
    auction_start: '',
    auction_end: '',
    image: null,
    alt: null,

})

function submit() {
    form.post(route('admin.product.store'))
}

function previewImage(event) {
    const file = event.target.files[0]
    form.image = file
    imageUrl.value = URL.createObjectURL(file)
}
</script>

<template>
    <LayoutAuthenticated>

        <Head title="Create product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="Add product" main>
                <BaseButton :route-name="route('admin.product.index')" :icon="mdiArrowLeftBoldOutline" label="Back"
                    color="white" rounded-full small />
            </SectionTitleLineWithButton>
            <CardBox form @submit.prevent="submit">
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
                <FormField label="payment deadline minutes"
                    :class="{ 'text-red-400': form.errors.payment_deadline_minutes }">
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
                <FormField label="estimated market price" :class="{ 'text-red-400': form.errors.estimated_market_price }">
                    <FormControl v-model="form.estimated_market_price" type="number" step="0.01"
                        placeholder="Enter estimated market price" :error="form.errors.estimated_market_price">
                        <div class="text-red-400 text-sm" v-if="form.errors.estimated_market_price">
                            {{ form.errors.estimated_market_price }}
                        </div>
                    </FormControl>
                </FormField>

                <FormField label="auction duration minutes"
                    :class="{ 'text-red-400': form.errors.auction_duration_minutes }">
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

                <FormField label="Image" :class="{ 'text-red-400': form.errors.image }">
                    <input type="file" @change="previewImage" class="
                        w-full
                        px-4
                        py-2
                        mt-2
                        border
                        rounded-md
                        focus:outline-none
                        focus:ring-1
                        focus:ring-blue-600
                    "
                    accept=".jpg, .jpeg, .png, .gif, .svg"
                     />
                    <img v-if="imageUrl" :src="imageUrl" class="w-full mt-4 h-80" />
                    <div class="text-red-400 text-sm" v-if="form.errors.image">
                        {{ form.errors.image }}
                    </div>
                </FormField>
                <FormField label="text for image" :class="{ 'text-red-400': form.errors.alt }">
                    <FormControl v-model="form.alt" type="text" step="0.01"
                        placeholder="Enter opening bid amount" :error="form.errors.alt">
                        <div class="text-red-400 text-sm" v-if="form.errors.alt">
                            {{ form.errors.alt }}
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
