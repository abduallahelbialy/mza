<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3"
import {
    mdiAccountKey,
    mdiPlus,
    mdiSquareEditOutline,
    mdiTrashCan,
    mdiAlertBoxOutline,
    mdiAccessPointOff,
    mdiAccessPoint,
    mdiEyeSettings,
    mdiEyeOff
} from "@mdi/js"
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import SectionMain from "@/Components/SectionMain.vue"
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue"
import BaseButton from "@/Components/BaseButton.vue"
import CardBox from "@/Components/CardBox.vue"
import BaseButtons from "@/Components/BaseButtons.vue"
import NotificationBar from "@/Components/NotificationBar.vue"
import Pagination from "@/Components/Admin/Pagination.vue"
import Sort from "@/Components/Admin/Sort.vue"
import CardBoxModal from '@/Components/CardBoxModal.vue'
import { computed, ref } from 'vue'

const props = defineProps({
    products: {
        type: Object,
        default: () => ({}),
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
    can: {
        type: Object,
        default: () => ({}),
    },
})

const form = useForm({
    search: props.filters.search,
})

const formDelete = useForm({})
const destroyisModalDangerActive = ref(false)
const product_id = ref(null)

function destroy(id) {
        formDelete.delete(route("admin.product.destroy", id))
    }

function visible(id) {
    if (confirm("Are you sure you want to change visible?")) {
        formDelete.put(route("admin.product.visible", id))
    }
}
function active(id) {
    if (confirm("Are you sure you want to change active?")) {
        formDelete.put(route("admin.product.active", id))
    }
}
</script>

<template>
    <LayoutAuthenticated>
        <CardBoxModal @confirm="destroy(product_id)" v-model="destroyisModalDangerActive" large-title="Please confirm" button="danger" has-cancel>
            <p>Are you sure you want to delete <b>{{ product_id }}</b>?</p>
            <!-- <p>This is sample modal</p> -->
        </CardBoxModal>

        <Head title="Product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="Product" main>
                <BaseButton v-if="can.delete" :route-name="route('admin.product.create')" :icon="mdiPlus" label="Add"
                    color="info" rounded-full small />
            </SectionTitleLineWithButton>
            <NotificationBar :key="Date.now()" v-if="$page.props.flash.message" color="success"
                :icon="mdiAlertBoxOutline">
                {{ $page.props.flash.message }}
            </NotificationBar>
            <CardBox class="mb-6" has-table>
                <form @submit.prevent="form.get(route('admin.product.index'))">
                    <div class="py-2 flex">
                        <div class="flex pl-4">
                            <input type="search" v-model="form.search" class="
                  rounded-md
                  shadow-sm
                  border-gray-300
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                  text-black
                " placeholder="Search" />
                            <BaseButton label="Search" type="submit" color="info"
                                class="ml-4 inline-flex items-center px-4 py-2" />
                        </div>
                    </div>
                </form>
            </CardBox>
            <CardBox class="mb-6" has-table>
                <table>
                    <thead>
                        <tr>

                            <th>sku</th>

                            <th>
                                <Sort label="Name English" attribute="name" />
                            </th>
                            <th>
                                <Sort label="Name Arabic" attribute="name" />
                            </th>
                            <th>cost price</th>
                            <th>required bidders</th>
                            <th>is visible</th>
                            <th>is active</th>

                            <th v-if="can.edit || can.delete">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="product in products.data" :key="product.id">
                            <td>{{ product.sku }}</td>
                            <td data-label="Name English">
                                <Link :href="route('admin.product.show', product.id)" class="
                    no-underline
                    hover:underline
                    text-cyan-600
                    dark:text-cyan-400
                  ">
                                {{ product.name_english }}
                                </Link>
                            </td>
                            <td data-label="Name Arabic">
                                <Link :href="route('admin.product.show', product.id)" class="
                    no-underline
                    hover:underline
                    text-cyan-600
                    dark:text-cyan-400
                  ">
                                {{ product.name_arabic }}
                                </Link>
                            </td>
                            <td>{{ product.cost_price }}</td>
                            <td>{{ product.required_bidders }}</td>
                            <!-- <td>{{ product.is_visible }}</td> -->
                            <td>
                                <BaseButton v-if="!product.is_visible" color="danger" :icon="mdiEyeOff" small
                                    @click="visible(product.id)" />
                                <BaseButton v-if="product.is_visible" color="success" :icon="mdiEyeSettings" small
                                    @click="visible(product.id)" />
                            </td>
                            <td>
                                <BaseButton v-if="!product.is_active" color="danger" :icon="mdiAccessPointOff" small
                                    @click="active(product.id)" />
                                <BaseButton v-if="product.is_active" color="success" :icon="mdiAccessPoint" small
                                    @click="active(product.id)" />
                            </td>
                            <td v-if="can.edit || can.delete" class="before:hidden lg:w-1 whitespace-nowrap">
                                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                    <BaseButton v-if="can.edit" :route-name="route('admin.product.edit', product.id)"
                                        color="info" :icon="mdiSquareEditOutline" small />
                                    <BaseButton v-if="can.delete" color="danger" :icon="mdiTrashCan" small
                                        @click="destroyisModalDangerActive = true; product_id = product.id" />
                                </BaseButtons>
                            </td>


                        </tr>
                    </tbody>
                </table>
                <div class="py-4">
                    <Pagination :data="products" />
                </div>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
