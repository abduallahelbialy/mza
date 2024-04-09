<template>
    <div>
        <Head title="Dashboard" />
        <LayoutAuthenticated>
            <template #header>
                <h2 class="text-xl font-semibold leading-tight text-gray-800">
                    Image Upload
                </h2>
            </template>

            <div class="py-52">
                <div
                    class="bg-white p-7 w-9/12 mx-auto h-auto border-2 border-gray-500 rounded-lg"
                >
                    <div
                        ref="dnd"
                        class="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded"
                        @drop.prevent="drop($event)"
                        @dragover.prevent="
                            $event.dataTransfer.dropEffect = 'move'
                        "
                    >
                        <div
                            class="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
                            @dragover="dragOverHandler"
                            @dragleave="dragLeaveHandler"
                        >
                            <input
                                accept="*"
                                type="file"
                                multiple
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                @change="addFiles($event)"
                                title=""
                            />
                        </div>

                        <template v-if="files.length > 0">
                            <div
                                class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-6"
                            >
                                <template
                                    v-for="(file, index) in files"
                                    :key="index"
                                >
                                    <div
                                        class="relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none"
                                        style="padding-top: 100%"
                                        @dragstart="dragstart($event, index)"
                                        @dragend="fileDragging = null"
                                        :class="{
                                            'border-blue-600':
                                                fileDragging == index,
                                        }"
                                        draggable="true"
                                        :data-index="index"
                                    >
                                        <button
                                            class="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                                            type="button"
                                            @click="remove(index)"
                                        >
                                            <svg
                                                class="w-4 h-4 text-red-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                        <template
                                            v-if="file.type.includes('audio/')"
                                        >
                                            <svg
                                                class="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                />
                                            </svg>
                                        </template>
                                        <template
                                            v-else-if="
                                                file.type.includes(
                                                    'application/'
                                                ) || file.type === ''
                                            "
                                        >
                                            <svg
                                                class="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </template>
                                        <template
                                            v-else-if="
                                                file.type.includes('image/')
                                            "
                                        >
                                            <img
                                                class="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white preview"
                                                :src="loadFile(file)"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                file.type.includes('video/')
                                            "
                                        >
                                            <video
                                                class="absolute inset-0 object-cover w-full h-full border-4 border-white pointer-events-none preview"
                                            >
                                                <source
                                                    :src="loadFile(file)"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </template>
                                        <div
                                            class="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50"
                                        >
                                            <span
                                                class="w-full font-bold text-gray-900 truncate"
                                                >{{ file.name }}</span
                                            >
                                            <span
                                                class="text-xs text-gray-900"
                                                >{{
                                                    humanFileSize(file.size)
                                                }}</span
                                            >
                                        </div>
                                        <div
                                            class="absolute inset-0 z-40 transition-colors duration-300"
                                            @dragenter="dragenter($event)"
                                            @dragleave="fileDropping = null"
                                            :class="{
                                                'bg-blue-200 bg-opacity-80':
                                                    fileDropping == index &&
                                                    fileDragging != index,
                                            }"
                                        ></div>
                                    </div>
                                </template>
                            </div>
                        </template>
                    </div>
                    <div class="flex justify-center mt-24">
                        <button
                        @click="submit()"
                            type="submit"
                            class="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800 focus:outline-none"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </LayoutAuthenticated>

        <!-- Image Modal Component -->
        <ModalImage />
    </div>
</template>

<script>
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ref } from "vue"; // Import ref from vue

export default {
    components: {
        LayoutAuthenticated,
        Head,
        useForm,
        ref
    },
    props: {
        errors: Object,
        productId: {
            type: String, // تحديد نوع الـ prop ليكون String
        },
    },
    data() {
        return {
            files: [],
            fileDragging: null,
            fileDropping: null,
            form:useForm({
            image: [],
        })
        };
    },

    methods: {
        humanFileSize(size) {
            const i = Math.floor(Math.log(size) / Math.log(1024));
            return (
                (size / Math.pow(1024, i)).toFixed(2) * 1 +
                " " +
                ["B", "kB", "MB", "GB", "TB"][i]
            );
        },
        remove(index) {
            let files = [...this.files];
            files.splice(index, 1);
            this.files = this.createFileList(files);
        },
        drop(e) {
            let removed, add;
            let files = [...this.files];
            removed = files.splice(this.fileDragging, 1);
            files.splice(this.fileDropping, 0, ...removed);
            this.files = this.createFileList(files);
            this.fileDropping = null;
            this.fileDragging = null;
        },
        dragenter(e) {
            let targetElem = e.target.closest("[draggable]");
            this.fileDropping = targetElem.getAttribute("data-index");
        },
        dragstart(e, index) {
            this.fileDragging = e.target
                .closest("[draggable]")
                .getAttribute("data-index");
            e.dataTransfer.effectAllowed = "move";
        },
        loadFile(file) {
            const blobUrl = URL.createObjectURL(file);
            return blobUrl;
        },
        addFiles(e) {
            const files = this.createFileList(
                [...this.files],
                [...e.target.files]
            );
            this.files = files;
        },
        createFileList(existingFiles, newFiles = []) {
            let fileList = existingFiles.slice();
            for (let i = 0; i < newFiles.length; i++) {
                fileList.push(newFiles[i]);
            }
            return fileList;
        },
         submit ()  {
            const new_files = Array.from(this.files);

            new_files.forEach((file) => {
                this.form.image.push(file);
            });

            this.form.post(route("admin.image.store", this.productId));
        }
    },
};
</script>
