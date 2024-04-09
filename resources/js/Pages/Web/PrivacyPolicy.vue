<script setup>
// إستيراد الحزم والوحدات الضرورية
import { Head, Link } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
</script>

<template>
    <div class="container mx-auto">

        <Head title="Terms And Conditions" />
        <Layout>
            <main>
                <h1>سياسة الخصوصية</h1>
                <p>نحن في Mzaodin نلتزم بحماية خصوصية مستخدمينا وجمع المعلومات بموجب هذه السياسة. يرجى قراءة الشروط
                    التالية بعناية:</p>
                <h2>المعلومات التي نجمعها:</h2>
                <ul>
                    <li>نجمع معلومات شخصية مثل الاسم وعنوان البريد الإلكتروني فقط عندما تُقدم لنا طوعًا من قبل المستخدم.
                    </li>
                    <li>نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتخصيص المحتوى والإعلانات.</li>
                </ul>
                <h2>استخدام المعلومات:</h2>
                <ul>
                    <li>نستخدم المعلومات المجمعة لتحليل الاتجاهات وتحسين خدماتنا.</li>
                    <li>نحترم خصوصية معلومات المستخدم ولا نشاركها مع أطراف ثالثة بدون موافقتهم.</li>
                </ul>
                <h2>حقوق المستخدمين:</h2>
                <ul>
                    <li>يحق للمستخدمين طلب نسخة من المعلومات التي نحتفظ بها عنهم.</li>
                    <li>يحق للمستخدمين طلب تصحيح أو حذف المعلومات الشخصية التي نحتفظ بها عنهم.</li>
                </ul>
                <p>باستخدامك لخدماتنا، فإنك توافق على هذه السياسة وجمع واستخدام المعلومات وفقًا لها.</p>
                <p>تاريخ آخر تحديث: يناير 2024.</p>
            </main>
        </Layout>
    </div>
</template>

<style scoped>
/* أسلوب التنسيق CSS */
main {
    line-height: 1.6;
    direction: rtl;
    text-align: right;
    padding: 20px;
}

main h1 {
    text-align: center;
}

main ul {
    list-style-type: none;
    padding: 0;
}

main ul li {
    margin-bottom: 10px;
}
</style>
