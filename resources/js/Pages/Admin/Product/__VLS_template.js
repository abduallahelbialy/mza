import { Head } from "@inertiajs/vue3";
import {
mdiAccountKey,
mdiArrowLeftBoldOutline
} from "@mdi/js";
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import SectionMain from "@/Components/SectionMain.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import CardBox from "@/Components/CardBox.vue";
import FormField from '@/Components/FormField.vue';
import FormControl from '@/Components/FormControl.vue';
import BaseButton from '@/Components/BaseButton.vue';
import BaseButtons from '@/Components/BaseButtons.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, form } from "./Create.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'LayoutAuthenticated', typeof __VLS_localComponents, "LayoutAuthenticated", "LayoutAuthenticated", "LayoutAuthenticated"> &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'SectionMain', typeof __VLS_localComponents, "SectionMain", "SectionMain", "SectionMain"> &
__VLS_WithComponent<'SectionTitleLineWithButton', typeof __VLS_localComponents, "SectionTitleLineWithButton", "SectionTitleLineWithButton", "SectionTitleLineWithButton"> &
__VLS_WithComponent<'BaseButton', typeof __VLS_localComponents, "BaseButton", "BaseButton", "BaseButton"> &
__VLS_WithComponent<'CardBox', typeof __VLS_localComponents, "CardBox", "CardBox", "CardBox"> &
__VLS_WithComponent<'FormField', typeof __VLS_localComponents, "FormField", "FormField", "FormField"> &
__VLS_WithComponent<'FormControl', typeof __VLS_localComponents, "FormControl", "FormControl", "FormControl"> &
__VLS_WithComponent<'BaseButtons', typeof __VLS_localComponents, "BaseButtons", "BaseButtons", "BaseButtons">;
__VLS_components.LayoutAuthenticated; __VLS_components.LayoutAuthenticated;
// @ts-ignore
[LayoutAuthenticated, LayoutAuthenticated,];
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_components.SectionMain; __VLS_components.SectionMain;
// @ts-ignore
[SectionMain, SectionMain,];
__VLS_components.SectionTitleLineWithButton; __VLS_components.SectionTitleLineWithButton;
// @ts-ignore
[SectionTitleLineWithButton, SectionTitleLineWithButton,];
__VLS_components.BaseButton; __VLS_components.BaseButton;
// @ts-ignore
[BaseButton, BaseButton,];
__VLS_components.CardBox; __VLS_components.CardBox;
// @ts-ignore
[CardBox, CardBox,];
__VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField; __VLS_components.FormField;
// @ts-ignore
[FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField, FormField,];
__VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl; __VLS_components.FormControl;
// @ts-ignore
[FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl, FormControl,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_components.BaseButtons; __VLS_components.BaseButtons;
// @ts-ignore
[BaseButtons, BaseButtons,];
{
const __VLS_0 = ({} as 'LayoutAuthenticated' extends keyof typeof __VLS_ctx ? { 'LayoutAuthenticated': typeof __VLS_ctx.LayoutAuthenticated; } : typeof __VLS_resolvedLocalAndGlobalComponents).LayoutAuthenticated;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { LayoutAuthenticated: typeof __VLS_0; }).LayoutAuthenticated;
({} as { LayoutAuthenticated: typeof __VLS_0; }).LayoutAuthenticated;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'Head' extends keyof typeof __VLS_ctx ? { 'Head': typeof __VLS_ctx.Head; } : typeof __VLS_resolvedLocalAndGlobalComponents).Head;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, title: ("Create product"), }));
({} as { Head: typeof __VLS_5; }).Head;
const __VLS_7 = __VLS_6({ ...{}, title: ("Create product"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, title: ("Create product"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as 'SectionMain' extends keyof typeof __VLS_ctx ? { 'SectionMain': typeof __VLS_ctx.SectionMain; } : typeof __VLS_resolvedLocalAndGlobalComponents).SectionMain;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { SectionMain: typeof __VLS_10; }).SectionMain;
({} as { SectionMain: typeof __VLS_10; }).SectionMain;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'SectionTitleLineWithButton' extends keyof typeof __VLS_ctx ? { 'SectionTitleLineWithButton': typeof __VLS_ctx.SectionTitleLineWithButton; } : typeof __VLS_resolvedLocalAndGlobalComponents).SectionTitleLineWithButton;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, icon: ((__VLS_ctx.mdiAccountKey)), title: ("Add product"), main: (true), }));
({} as { SectionTitleLineWithButton: typeof __VLS_15; }).SectionTitleLineWithButton;
({} as { SectionTitleLineWithButton: typeof __VLS_15; }).SectionTitleLineWithButton;
const __VLS_17 = __VLS_16({ ...{}, icon: ((__VLS_ctx.mdiAccountKey)), title: ("Add product"), main: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, icon: ((__VLS_ctx.mdiAccountKey)), title: ("Add product"), main: (true), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as 'BaseButton' extends keyof typeof __VLS_ctx ? { 'BaseButton': typeof __VLS_ctx.BaseButton; } : typeof __VLS_resolvedLocalAndGlobalComponents).BaseButton;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, routeName: ((__VLS_ctx.route('admin.product.index'))), icon: ((__VLS_ctx.mdiArrowLeftBoldOutline)), label: ("Back"), color: ("white"), roundedFull: (true), small: (true), }));
({} as { BaseButton: typeof __VLS_20; }).BaseButton;
const __VLS_22 = __VLS_21({ ...{}, routeName: ((__VLS_ctx.route('admin.product.index'))), icon: ((__VLS_ctx.mdiArrowLeftBoldOutline)), label: ("Back"), color: ("white"), roundedFull: (true), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, routeName: ((__VLS_ctx.route('admin.product.index'))), icon: ((__VLS_ctx.mdiArrowLeftBoldOutline)), label: ("Back"), color: ("white"), roundedFull: (true), small: (true), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
{
const __VLS_25 = ({} as 'CardBox' extends keyof typeof __VLS_ctx ? { 'CardBox': typeof __VLS_ctx.CardBox; } : typeof __VLS_resolvedLocalAndGlobalComponents).CardBox;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ onSubmit: {} as any, }, form: (true), enctype: ("multipart/form-data"), }));
({} as { CardBox: typeof __VLS_25; }).CardBox;
({} as { CardBox: typeof __VLS_25; }).CardBox;
const __VLS_27 = __VLS_26({ ...{ onSubmit: {} as any, }, form: (true), enctype: ("multipart/form-data"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, form: (true), enctype: ("multipart/form-data"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
let __VLS_30 = { 'submit': __VLS_pickEvent(__VLS_29['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_27>).onSubmit) };
__VLS_30 = {
submit: $event => {
__VLS_ctx.form.post(__VLS_ctx.route('admin.product.store'));
// @ts-ignore
[mdiAccountKey, mdiAccountKey, mdiAccountKey, route, mdiArrowLeftBoldOutline, route, mdiArrowLeftBoldOutline, route, mdiArrowLeftBoldOutline, form, route,];
}
};
{
const __VLS_31 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, label: ("Name Arabic"), class: (({ 'text-red-400': __VLS_ctx.form.errors.name_arabic })), }));
({} as { FormField: typeof __VLS_31; }).FormField;
({} as { FormField: typeof __VLS_31; }).FormField;
const __VLS_33 = __VLS_32({ ...{}, label: ("Name Arabic"), class: (({ 'text-red-400': __VLS_ctx.form.errors.name_arabic })), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, label: ("Name Arabic"), class: (({ 'text-red-400': __VLS_ctx.form.errors.name_arabic })), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, modelValue: ((__VLS_ctx.form.name_arabic)), type: ("text"), placeholder: ("Enter Name Arabic"), error: ((__VLS_ctx.form.errors.name_arabic)), }));
({} as { FormControl: typeof __VLS_36; }).FormControl;
({} as { FormControl: typeof __VLS_36; }).FormControl;
const __VLS_38 = __VLS_37({ ...{}, modelValue: ((__VLS_ctx.form.name_arabic)), type: ("text"), placeholder: ("Enter Name Arabic"), error: ((__VLS_ctx.form.errors.name_arabic)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.name_arabic)), type: ("text"), placeholder: ("Enter Name Arabic"), error: ((__VLS_ctx.form.errors.name_arabic)), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
if (__VLS_ctx.form.errors.name_arabic) {
{
const __VLS_41 = __VLS_intrinsicElements["div"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
(__VLS_ctx.form.errors.name_arabic);
(__VLS_44.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_39.slots!).default;
}
(__VLS_34.slots!).default;
}
{
const __VLS_46 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, label: ("Name English"), class: (({ 'text-red-400': __VLS_ctx.form.errors.name_english })), }));
({} as { FormField: typeof __VLS_46; }).FormField;
({} as { FormField: typeof __VLS_46; }).FormField;
const __VLS_48 = __VLS_47({ ...{}, label: ("Name English"), class: (({ 'text-red-400': __VLS_ctx.form.errors.name_english })), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, label: ("Name English"), class: (({ 'text-red-400': __VLS_ctx.form.errors.name_english })), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
{
const __VLS_51 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, modelValue: ((__VLS_ctx.form.name_english)), type: ("text"), placeholder: ("Enter Name English"), error: ((__VLS_ctx.form.errors.name)), }));
({} as { FormControl: typeof __VLS_51; }).FormControl;
({} as { FormControl: typeof __VLS_51; }).FormControl;
const __VLS_53 = __VLS_52({ ...{}, modelValue: ((__VLS_ctx.form.name_english)), type: ("text"), placeholder: ("Enter Name English"), error: ((__VLS_ctx.form.errors.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.name_english)), type: ("text"), placeholder: ("Enter Name English"), error: ((__VLS_ctx.form.errors.name)), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
if (__VLS_ctx.form.errors.name_english) {
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
(__VLS_ctx.form.errors.name_english);
(__VLS_59.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_54.slots!).default;
}
(__VLS_49.slots!).default;
}
{
const __VLS_61 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, label: ("sku"), class: (({ 'text-red-400': __VLS_ctx.form.errors.sku })), }));
({} as { FormField: typeof __VLS_61; }).FormField;
({} as { FormField: typeof __VLS_61; }).FormField;
const __VLS_63 = __VLS_62({ ...{}, label: ("sku"), class: (({ 'text-red-400': __VLS_ctx.form.errors.sku })), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, label: ("sku"), class: (({ 'text-red-400': __VLS_ctx.form.errors.sku })), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
{
const __VLS_66 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{}, modelValue: ((__VLS_ctx.form.sku)), type: ("text"), placeholder: ("Enter sku"), error: ((__VLS_ctx.form.errors.sku)), }));
({} as { FormControl: typeof __VLS_66; }).FormControl;
({} as { FormControl: typeof __VLS_66; }).FormControl;
const __VLS_68 = __VLS_67({ ...{}, modelValue: ((__VLS_ctx.form.sku)), type: ("text"), placeholder: ("Enter sku"), error: ((__VLS_ctx.form.errors.sku)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.sku)), type: ("text"), placeholder: ("Enter sku"), error: ((__VLS_ctx.form.errors.sku)), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
if (__VLS_ctx.form.errors.sku) {
{
const __VLS_71 = __VLS_intrinsicElements["div"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
(__VLS_ctx.form.errors.sku);
(__VLS_74.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_69.slots!).default;
}
(__VLS_64.slots!).default;
}
{
const __VLS_76 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{}, label: ("Weight"), class: (({ 'text-red-400': __VLS_ctx.form.errors.weight })), }));
({} as { FormField: typeof __VLS_76; }).FormField;
({} as { FormField: typeof __VLS_76; }).FormField;
const __VLS_78 = __VLS_77({ ...{}, label: ("Weight"), class: (({ 'text-red-400': __VLS_ctx.form.errors.weight })), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, label: ("Weight"), class: (({ 'text-red-400': __VLS_ctx.form.errors.weight })), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
{
const __VLS_81 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, modelValue: ((__VLS_ctx.form.weight)), type: ("number"), step: ("0.01"), placeholder: ("Enter Weight"), error: ((__VLS_ctx.form.errors.weight)), }));
({} as { FormControl: typeof __VLS_81; }).FormControl;
({} as { FormControl: typeof __VLS_81; }).FormControl;
const __VLS_83 = __VLS_82({ ...{}, modelValue: ((__VLS_ctx.form.weight)), type: ("number"), step: ("0.01"), placeholder: ("Enter Weight"), error: ((__VLS_ctx.form.errors.weight)), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.weight)), type: ("number"), step: ("0.01"), placeholder: ("Enter Weight"), error: ((__VLS_ctx.form.errors.weight)), });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
if (__VLS_ctx.form.errors.weight) {
{
const __VLS_86 = __VLS_intrinsicElements["div"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
(__VLS_ctx.form.errors.weight);
(__VLS_89.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_84.slots!).default;
}
(__VLS_79.slots!).default;
}
{
const __VLS_91 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, label: ("payment deadline minutes"), class: (({ 'text-red-400': __VLS_ctx.form.errors.payment_deadline_minutes })), }));
({} as { FormField: typeof __VLS_91; }).FormField;
({} as { FormField: typeof __VLS_91; }).FormField;
const __VLS_93 = __VLS_92({ ...{}, label: ("payment deadline minutes"), class: (({ 'text-red-400': __VLS_ctx.form.errors.payment_deadline_minutes })), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, label: ("payment deadline minutes"), class: (({ 'text-red-400': __VLS_ctx.form.errors.payment_deadline_minutes })), });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
{
const __VLS_96 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{}, modelValue: ((__VLS_ctx.form.payment_deadline_minutes)), type: ("number"), step: ("0.01"), placeholder: ("Enter payment deadline minutes"), error: ((__VLS_ctx.form.errors.payment_deadline_minutes)), }));
({} as { FormControl: typeof __VLS_96; }).FormControl;
({} as { FormControl: typeof __VLS_96; }).FormControl;
const __VLS_98 = __VLS_97({ ...{}, modelValue: ((__VLS_ctx.form.payment_deadline_minutes)), type: ("number"), step: ("0.01"), placeholder: ("Enter payment deadline minutes"), error: ((__VLS_ctx.form.errors.payment_deadline_minutes)), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_96, typeof __VLS_98> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.payment_deadline_minutes)), type: ("number"), step: ("0.01"), placeholder: ("Enter payment deadline minutes"), error: ((__VLS_ctx.form.errors.payment_deadline_minutes)), });
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
let __VLS_100!: __VLS_NormalizeEmits<typeof __VLS_99.emit>;
if (__VLS_ctx.form.errors.payment_deadline_minutes) {
{
const __VLS_101 = __VLS_intrinsicElements["div"];
const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
const __VLS_103 = __VLS_102({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
let __VLS_105!: __VLS_NormalizeEmits<typeof __VLS_104.emit>;
(__VLS_ctx.form.errors.payment_deadline_minutes);
(__VLS_104.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_99.slots!).default;
}
(__VLS_94.slots!).default;
}
{
const __VLS_106 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{}, label: ("cost price"), class: (({ 'text-red-400': __VLS_ctx.form.errors.cost_price })), }));
({} as { FormField: typeof __VLS_106; }).FormField;
({} as { FormField: typeof __VLS_106; }).FormField;
const __VLS_108 = __VLS_107({ ...{}, label: ("cost price"), class: (({ 'text-red-400': __VLS_ctx.form.errors.cost_price })), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{}, label: ("cost price"), class: (({ 'text-red-400': __VLS_ctx.form.errors.cost_price })), });
const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
let __VLS_110!: __VLS_NormalizeEmits<typeof __VLS_109.emit>;
{
const __VLS_111 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{}, modelValue: ((__VLS_ctx.form.cost_price)), type: ("number"), step: ("0.01"), placeholder: ("Enter cost price"), error: ((__VLS_ctx.form.errors.cost_price)), }));
({} as { FormControl: typeof __VLS_111; }).FormControl;
({} as { FormControl: typeof __VLS_111; }).FormControl;
const __VLS_113 = __VLS_112({ ...{}, modelValue: ((__VLS_ctx.form.cost_price)), type: ("number"), step: ("0.01"), placeholder: ("Enter cost price"), error: ((__VLS_ctx.form.errors.cost_price)), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_111, typeof __VLS_113> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.cost_price)), type: ("number"), step: ("0.01"), placeholder: ("Enter cost price"), error: ((__VLS_ctx.form.errors.cost_price)), });
const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113)!;
let __VLS_115!: __VLS_NormalizeEmits<typeof __VLS_114.emit>;
if (__VLS_ctx.form.errors.cost_price) {
{
const __VLS_116 = __VLS_intrinsicElements["div"];
const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
const __VLS_118 = __VLS_117({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_116, typeof __VLS_118> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118)!;
let __VLS_120!: __VLS_NormalizeEmits<typeof __VLS_119.emit>;
(__VLS_ctx.form.errors.cost_price);
(__VLS_119.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_114.slots!).default;
}
(__VLS_109.slots!).default;
}
{
const __VLS_121 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ ...{}, label: ("estimated market price"), class: (({ 'text-red-400': __VLS_ctx.form.errors.estimated_market_price })), }));
({} as { FormField: typeof __VLS_121; }).FormField;
({} as { FormField: typeof __VLS_121; }).FormField;
const __VLS_123 = __VLS_122({ ...{}, label: ("estimated market price"), class: (({ 'text-red-400': __VLS_ctx.form.errors.estimated_market_price })), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_121, typeof __VLS_123> & Record<string, unknown>) => void)({ ...{}, label: ("estimated market price"), class: (({ 'text-red-400': __VLS_ctx.form.errors.estimated_market_price })), });
const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123)!;
let __VLS_125!: __VLS_NormalizeEmits<typeof __VLS_124.emit>;
{
const __VLS_126 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{}, modelValue: ((__VLS_ctx.form.estimated_market_price)), type: ("number"), step: ("0.01"), placeholder: ("Enter estimated market price"), error: ((__VLS_ctx.form.errors.estimated_market_price)), }));
({} as { FormControl: typeof __VLS_126; }).FormControl;
({} as { FormControl: typeof __VLS_126; }).FormControl;
const __VLS_128 = __VLS_127({ ...{}, modelValue: ((__VLS_ctx.form.estimated_market_price)), type: ("number"), step: ("0.01"), placeholder: ("Enter estimated market price"), error: ((__VLS_ctx.form.errors.estimated_market_price)), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_126, typeof __VLS_128> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.estimated_market_price)), type: ("number"), step: ("0.01"), placeholder: ("Enter estimated market price"), error: ((__VLS_ctx.form.errors.estimated_market_price)), });
const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128)!;
let __VLS_130!: __VLS_NormalizeEmits<typeof __VLS_129.emit>;
if (__VLS_ctx.form.errors.estimated_market_price) {
{
const __VLS_131 = __VLS_intrinsicElements["div"];
const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
const __VLS_133 = __VLS_132({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_131, typeof __VLS_133> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133)!;
let __VLS_135!: __VLS_NormalizeEmits<typeof __VLS_134.emit>;
(__VLS_ctx.form.errors.estimated_market_price);
(__VLS_134.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_129.slots!).default;
}
(__VLS_124.slots!).default;
}
{
const __VLS_136 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ ...{}, label: ("auction duration minutes"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_duration_minutes })), }));
({} as { FormField: typeof __VLS_136; }).FormField;
({} as { FormField: typeof __VLS_136; }).FormField;
const __VLS_138 = __VLS_137({ ...{}, label: ("auction duration minutes"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_duration_minutes })), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_136, typeof __VLS_138> & Record<string, unknown>) => void)({ ...{}, label: ("auction duration minutes"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_duration_minutes })), });
const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138)!;
let __VLS_140!: __VLS_NormalizeEmits<typeof __VLS_139.emit>;
{
const __VLS_141 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{}, modelValue: ((__VLS_ctx.form.auction_duration_minutes)), type: ("number"), placeholder: ("Enter auction  duration minutes"), error: ((__VLS_ctx.form.errors.auction_duration_minutes)), }));
({} as { FormControl: typeof __VLS_141; }).FormControl;
({} as { FormControl: typeof __VLS_141; }).FormControl;
const __VLS_143 = __VLS_142({ ...{}, modelValue: ((__VLS_ctx.form.auction_duration_minutes)), type: ("number"), placeholder: ("Enter auction  duration minutes"), error: ((__VLS_ctx.form.errors.auction_duration_minutes)), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_141, typeof __VLS_143> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.auction_duration_minutes)), type: ("number"), placeholder: ("Enter auction  duration minutes"), error: ((__VLS_ctx.form.errors.auction_duration_minutes)), });
const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143)!;
let __VLS_145!: __VLS_NormalizeEmits<typeof __VLS_144.emit>;
if (__VLS_ctx.form.errors.auction_duration_minutes) {
{
const __VLS_146 = __VLS_intrinsicElements["div"];
const __VLS_147 = __VLS_elementAsFunctionalComponent(__VLS_146);
const __VLS_148 = __VLS_147({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_146, typeof __VLS_148> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148)!;
let __VLS_150!: __VLS_NormalizeEmits<typeof __VLS_149.emit>;
(__VLS_ctx.form.errors.weight);
(__VLS_149.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_144.slots!).default;
}
(__VLS_139.slots!).default;
}
{
const __VLS_151 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ ...{}, label: ("registration amount"), class: (({ 'text-red-400': __VLS_ctx.form.errors.registration_amount })), }));
({} as { FormField: typeof __VLS_151; }).FormField;
({} as { FormField: typeof __VLS_151; }).FormField;
const __VLS_153 = __VLS_152({ ...{}, label: ("registration amount"), class: (({ 'text-red-400': __VLS_ctx.form.errors.registration_amount })), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_153> & Record<string, unknown>) => void)({ ...{}, label: ("registration amount"), class: (({ 'text-red-400': __VLS_ctx.form.errors.registration_amount })), });
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
let __VLS_155!: __VLS_NormalizeEmits<typeof __VLS_154.emit>;
{
const __VLS_156 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ ...{}, modelValue: ((__VLS_ctx.form.registration_amount)), type: ("number"), step: ("0.01"), placeholder: ("Enter registration amount"), error: ((__VLS_ctx.form.errors.registration_amount)), }));
({} as { FormControl: typeof __VLS_156; }).FormControl;
({} as { FormControl: typeof __VLS_156; }).FormControl;
const __VLS_158 = __VLS_157({ ...{}, modelValue: ((__VLS_ctx.form.registration_amount)), type: ("number"), step: ("0.01"), placeholder: ("Enter registration amount"), error: ((__VLS_ctx.form.errors.registration_amount)), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_156, typeof __VLS_158> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.registration_amount)), type: ("number"), step: ("0.01"), placeholder: ("Enter registration amount"), error: ((__VLS_ctx.form.errors.registration_amount)), });
const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158)!;
let __VLS_160!: __VLS_NormalizeEmits<typeof __VLS_159.emit>;
if (__VLS_ctx.form.errors.registration_amount) {
{
const __VLS_161 = __VLS_intrinsicElements["div"];
const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
const __VLS_163 = __VLS_162({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_161, typeof __VLS_163> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163)!;
let __VLS_165!: __VLS_NormalizeEmits<typeof __VLS_164.emit>;
(__VLS_ctx.form.errors.registration_amount);
(__VLS_164.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_159.slots!).default;
}
(__VLS_154.slots!).default;
}
{
const __VLS_166 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ ...{}, label: ("required bidders"), class: (({ 'text-red-400': __VLS_ctx.form.errors.required_bidders })), }));
({} as { FormField: typeof __VLS_166; }).FormField;
({} as { FormField: typeof __VLS_166; }).FormField;
const __VLS_168 = __VLS_167({ ...{}, label: ("required bidders"), class: (({ 'text-red-400': __VLS_ctx.form.errors.required_bidders })), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_166, typeof __VLS_168> & Record<string, unknown>) => void)({ ...{}, label: ("required bidders"), class: (({ 'text-red-400': __VLS_ctx.form.errors.required_bidders })), });
const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168)!;
let __VLS_170!: __VLS_NormalizeEmits<typeof __VLS_169.emit>;
{
const __VLS_171 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ ...{}, modelValue: ((__VLS_ctx.form.required_bidders)), type: ("number"), step: ("0.01"), placeholder: ("Enter required bidders"), error: ((__VLS_ctx.form.errors.required_bidders)), }));
({} as { FormControl: typeof __VLS_171; }).FormControl;
({} as { FormControl: typeof __VLS_171; }).FormControl;
const __VLS_173 = __VLS_172({ ...{}, modelValue: ((__VLS_ctx.form.required_bidders)), type: ("number"), step: ("0.01"), placeholder: ("Enter required bidders"), error: ((__VLS_ctx.form.errors.required_bidders)), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_171, typeof __VLS_173> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.required_bidders)), type: ("number"), step: ("0.01"), placeholder: ("Enter required bidders"), error: ((__VLS_ctx.form.errors.required_bidders)), });
const __VLS_174 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173)!;
let __VLS_175!: __VLS_NormalizeEmits<typeof __VLS_174.emit>;
if (__VLS_ctx.form.errors.required_bidders) {
{
const __VLS_176 = __VLS_intrinsicElements["div"];
const __VLS_177 = __VLS_elementAsFunctionalComponent(__VLS_176);
const __VLS_178 = __VLS_177({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_176, typeof __VLS_178> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178)!;
let __VLS_180!: __VLS_NormalizeEmits<typeof __VLS_179.emit>;
(__VLS_ctx.form.errors.required_bidders);
(__VLS_179.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_174.slots!).default;
}
(__VLS_169.slots!).default;
}
{
const __VLS_181 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({ ...{}, label: ("opening bid amount"), class: (({ 'text-red-400': __VLS_ctx.form.errors.opening_bid_amount })), }));
({} as { FormField: typeof __VLS_181; }).FormField;
({} as { FormField: typeof __VLS_181; }).FormField;
const __VLS_183 = __VLS_182({ ...{}, label: ("opening bid amount"), class: (({ 'text-red-400': __VLS_ctx.form.errors.opening_bid_amount })), }, ...__VLS_functionalComponentArgsRest(__VLS_182));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_181, typeof __VLS_183> & Record<string, unknown>) => void)({ ...{}, label: ("opening bid amount"), class: (({ 'text-red-400': __VLS_ctx.form.errors.opening_bid_amount })), });
const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183)!;
let __VLS_185!: __VLS_NormalizeEmits<typeof __VLS_184.emit>;
{
const __VLS_186 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ ...{}, modelValue: ((__VLS_ctx.form.opening_bid_amount)), type: ("number"), step: ("0.01"), placeholder: ("Enter opening bid amount"), error: ((__VLS_ctx.form.errors.opening_bid_amount)), }));
({} as { FormControl: typeof __VLS_186; }).FormControl;
({} as { FormControl: typeof __VLS_186; }).FormControl;
const __VLS_188 = __VLS_187({ ...{}, modelValue: ((__VLS_ctx.form.opening_bid_amount)), type: ("number"), step: ("0.01"), placeholder: ("Enter opening bid amount"), error: ((__VLS_ctx.form.errors.opening_bid_amount)), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_186, typeof __VLS_188> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.opening_bid_amount)), type: ("number"), step: ("0.01"), placeholder: ("Enter opening bid amount"), error: ((__VLS_ctx.form.errors.opening_bid_amount)), });
const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188)!;
let __VLS_190!: __VLS_NormalizeEmits<typeof __VLS_189.emit>;
if (__VLS_ctx.form.errors.opening_bid_amount) {
{
const __VLS_191 = __VLS_intrinsicElements["div"];
const __VLS_192 = __VLS_elementAsFunctionalComponent(__VLS_191);
const __VLS_193 = __VLS_192({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_191, typeof __VLS_193> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193)!;
let __VLS_195!: __VLS_NormalizeEmits<typeof __VLS_194.emit>;
(__VLS_ctx.form.errors.opening_bid_amount);
(__VLS_194.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_189.slots!).default;
}
(__VLS_184.slots!).default;
}
{
const __VLS_196 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({ ...{}, label: ("Details"), class: (({ 'text-red-400': __VLS_ctx.form.errors.product_details })), }));
({} as { FormField: typeof __VLS_196; }).FormField;
({} as { FormField: typeof __VLS_196; }).FormField;
const __VLS_198 = __VLS_197({ ...{}, label: ("Details"), class: (({ 'text-red-400': __VLS_ctx.form.errors.product_details })), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_196, typeof __VLS_198> & Record<string, unknown>) => void)({ ...{}, label: ("Details"), class: (({ 'text-red-400': __VLS_ctx.form.errors.product_details })), });
const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198)!;
let __VLS_200!: __VLS_NormalizeEmits<typeof __VLS_199.emit>;
{
const __VLS_201 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_202 = __VLS_asFunctionalComponent(__VLS_201, new __VLS_201({ ...{}, modelValue: ((__VLS_ctx.form.product_details)), type: ("textarea"), placeholder: ("Enter  Details"), error: ((__VLS_ctx.form.errors.product_details)), }));
({} as { FormControl: typeof __VLS_201; }).FormControl;
({} as { FormControl: typeof __VLS_201; }).FormControl;
const __VLS_203 = __VLS_202({ ...{}, modelValue: ((__VLS_ctx.form.product_details)), type: ("textarea"), placeholder: ("Enter  Details"), error: ((__VLS_ctx.form.errors.product_details)), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_201, typeof __VLS_203> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.product_details)), type: ("textarea"), placeholder: ("Enter  Details"), error: ((__VLS_ctx.form.errors.product_details)), });
const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203)!;
let __VLS_205!: __VLS_NormalizeEmits<typeof __VLS_204.emit>;
if (__VLS_ctx.form.errors.product_details) {
{
const __VLS_206 = __VLS_intrinsicElements["div"];
const __VLS_207 = __VLS_elementAsFunctionalComponent(__VLS_206);
const __VLS_208 = __VLS_207({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_206, typeof __VLS_208> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_209 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208)!;
let __VLS_210!: __VLS_NormalizeEmits<typeof __VLS_209.emit>;
(__VLS_ctx.form.errors.product_details);
(__VLS_209.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_204.slots!).default;
}
(__VLS_199.slots!).default;
}
{
const __VLS_211 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, new __VLS_211({ ...{}, label: ("auction start"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_start })), }));
({} as { FormField: typeof __VLS_211; }).FormField;
({} as { FormField: typeof __VLS_211; }).FormField;
const __VLS_213 = __VLS_212({ ...{}, label: ("auction start"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_start })), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_211, typeof __VLS_213> & Record<string, unknown>) => void)({ ...{}, label: ("auction start"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_start })), });
const __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213)!;
let __VLS_215!: __VLS_NormalizeEmits<typeof __VLS_214.emit>;
{
const __VLS_216 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ ...{}, modelValue: ((__VLS_ctx.form.auction_start)), type: ("date"), step: ("0.01"), placeholder: ("Enter auction start"), error: ((__VLS_ctx.form.errors.auction_start)), }));
({} as { FormControl: typeof __VLS_216; }).FormControl;
({} as { FormControl: typeof __VLS_216; }).FormControl;
const __VLS_218 = __VLS_217({ ...{}, modelValue: ((__VLS_ctx.form.auction_start)), type: ("date"), step: ("0.01"), placeholder: ("Enter auction start"), error: ((__VLS_ctx.form.errors.auction_start)), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_216, typeof __VLS_218> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.auction_start)), type: ("date"), step: ("0.01"), placeholder: ("Enter auction start"), error: ((__VLS_ctx.form.errors.auction_start)), });
const __VLS_219 = __VLS_pickFunctionalComponentCtx(__VLS_216, __VLS_218)!;
let __VLS_220!: __VLS_NormalizeEmits<typeof __VLS_219.emit>;
if (__VLS_ctx.form.errors.auction_start) {
{
const __VLS_221 = __VLS_intrinsicElements["div"];
const __VLS_222 = __VLS_elementAsFunctionalComponent(__VLS_221);
const __VLS_223 = __VLS_222({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_221, typeof __VLS_223> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223)!;
let __VLS_225!: __VLS_NormalizeEmits<typeof __VLS_224.emit>;
(__VLS_ctx.form.errors.auction_start);
(__VLS_224.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_219.slots!).default;
}
(__VLS_214.slots!).default;
}
{
const __VLS_226 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_227 = __VLS_asFunctionalComponent(__VLS_226, new __VLS_226({ ...{}, label: ("auction end"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_end })), }));
({} as { FormField: typeof __VLS_226; }).FormField;
({} as { FormField: typeof __VLS_226; }).FormField;
const __VLS_228 = __VLS_227({ ...{}, label: ("auction end"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_end })), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_226, typeof __VLS_228> & Record<string, unknown>) => void)({ ...{}, label: ("auction end"), class: (({ 'text-red-400': __VLS_ctx.form.errors.auction_end })), });
const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228)!;
let __VLS_230!: __VLS_NormalizeEmits<typeof __VLS_229.emit>;
{
const __VLS_231 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_232 = __VLS_asFunctionalComponent(__VLS_231, new __VLS_231({ ...{}, modelValue: ((__VLS_ctx.form.auction_end)), type: ("date"), step: ("0.01"), placeholder: ("Enter auction end"), error: ((__VLS_ctx.form.errors.auction_end)), }));
({} as { FormControl: typeof __VLS_231; }).FormControl;
({} as { FormControl: typeof __VLS_231; }).FormControl;
const __VLS_233 = __VLS_232({ ...{}, modelValue: ((__VLS_ctx.form.auction_end)), type: ("date"), step: ("0.01"), placeholder: ("Enter auction end"), error: ((__VLS_ctx.form.errors.auction_end)), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_231, typeof __VLS_233> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.form.auction_end)), type: ("date"), step: ("0.01"), placeholder: ("Enter auction end"), error: ((__VLS_ctx.form.errors.auction_end)), });
const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233)!;
let __VLS_235!: __VLS_NormalizeEmits<typeof __VLS_234.emit>;
if (__VLS_ctx.form.errors.auction_end) {
{
const __VLS_236 = __VLS_intrinsicElements["div"];
const __VLS_237 = __VLS_elementAsFunctionalComponent(__VLS_236);
const __VLS_238 = __VLS_237({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_236, typeof __VLS_238> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238)!;
let __VLS_240!: __VLS_NormalizeEmits<typeof __VLS_239.emit>;
(__VLS_ctx.form.errors.auction_end);
(__VLS_239.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, form, form, form, form, form,];
}
(__VLS_234.slots!).default;
}
(__VLS_229.slots!).default;
}
{
const __VLS_241 = ({} as 'FormField' extends keyof typeof __VLS_ctx ? { 'FormField': typeof __VLS_ctx.FormField; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormField;
const __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({ ...{}, label: ("Image"), class: (({ 'text-red-400': __VLS_ctx.form.errors.image })), }));
({} as { FormField: typeof __VLS_241; }).FormField;
({} as { FormField: typeof __VLS_241; }).FormField;
const __VLS_243 = __VLS_242({ ...{}, label: ("Image"), class: (({ 'text-red-400': __VLS_ctx.form.errors.image })), }, ...__VLS_functionalComponentArgsRest(__VLS_242));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_241, typeof __VLS_243> & Record<string, unknown>) => void)({ ...{}, label: ("Image"), class: (({ 'text-red-400': __VLS_ctx.form.errors.image })), });
const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243)!;
let __VLS_245!: __VLS_NormalizeEmits<typeof __VLS_244.emit>;
{
const __VLS_246 = ({} as 'FormControl' extends keyof typeof __VLS_ctx ? { 'FormControl': typeof __VLS_ctx.FormControl; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormControl;
const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, new __VLS_246({ ...{ onChange: {} as any, }, multible: (true), ref: ("fileInput"), accept: ("image/*"), error: ((__VLS_ctx.form.errors.image)), }));
({} as { FormControl: typeof __VLS_246; }).FormControl;
const __VLS_248 = __VLS_247({ ...{ onChange: {} as any, }, multible: (true), ref: ("fileInput"), accept: ("image/*"), error: ((__VLS_ctx.form.errors.image)), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_246, typeof __VLS_248> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, multible: (true), ref: ("fileInput"), accept: ("image/*"), error: ((__VLS_ctx.form.errors.image)), });
const __VLS_249 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248)!;
let __VLS_250!: __VLS_NormalizeEmits<typeof __VLS_249.emit>;
// @ts-ignore
(__VLS_ctx.fileInput);
let __VLS_251 = { 'change': __VLS_pickEvent(__VLS_250['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_247, typeof __VLS_248>).onChange) };
__VLS_251 = { change: (__VLS_ctx.onFileChange) };
}
{
const __VLS_252 = __VLS_intrinsicElements["input"];
const __VLS_253 = __VLS_elementAsFunctionalComponent(__VLS_252);
const __VLS_254 = __VLS_253({ ...{}, type: ("file"), id: ((__VLS_ctx.id)), ref: ("inputEl"), name: ("name"), inputmode: ((__VLS_ctx.inputmode)), autocomplete: ((__VLS_ctx.autocomplete)), required: ((__VLS_ctx.required)), placeholder: ((__VLS_ctx.placeholder)), class: ((__VLS_ctx.inputElClass)), step: ((__VLS_ctx.step)), }, ...__VLS_functionalComponentArgsRest(__VLS_253));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_252, typeof __VLS_254> & Record<string, unknown>) => void)({ ...{}, type: ("file"), id: ((__VLS_ctx.id)), ref: ("inputEl"), name: ("name"), inputmode: ((__VLS_ctx.inputmode)), autocomplete: ((__VLS_ctx.autocomplete)), required: ((__VLS_ctx.required)), placeholder: ((__VLS_ctx.placeholder)), class: ((__VLS_ctx.inputElClass)), step: ((__VLS_ctx.step)), });
const __VLS_255 = __VLS_pickFunctionalComponentCtx(__VLS_252, __VLS_254)!;
let __VLS_256!: __VLS_NormalizeEmits<typeof __VLS_255.emit>;
(__VLS_ctx.form.image);
// @ts-ignore
(__VLS_ctx.inputEl);
}
if (__VLS_ctx.form.errors.image) {
{
const __VLS_257 = __VLS_intrinsicElements["div"];
const __VLS_258 = __VLS_elementAsFunctionalComponent(__VLS_257);
const __VLS_259 = __VLS_258({ ...{}, class: ("text-red-400 text-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_258));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_257, typeof __VLS_259> & Record<string, unknown>) => void)({ ...{}, class: ("text-red-400 text-sm"), });
const __VLS_260 = __VLS_pickFunctionalComponentCtx(__VLS_257, __VLS_259)!;
let __VLS_261!: __VLS_NormalizeEmits<typeof __VLS_260.emit>;
(__VLS_ctx.form.errors.image);
(__VLS_260.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form, fileInput, onFileChange, id, inputmode, autocomplete, required, placeholder, inputElClass, step, id, inputmode, autocomplete, required, placeholder, inputElClass, step, form, inputEl, form, form,];
}
(__VLS_244.slots!).default;
}
{
const __VLS_262 = __VLS_intrinsicElements["template"];
const __VLS_263 = __VLS_elementAsFunctionalComponent(__VLS_262);
const __VLS_264 = __VLS_263({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_263));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_262, typeof __VLS_264> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_28.slots!).footer;
{
const __VLS_265 = ({} as 'BaseButtons' extends keyof typeof __VLS_ctx ? { 'BaseButtons': typeof __VLS_ctx.BaseButtons; } : typeof __VLS_resolvedLocalAndGlobalComponents).BaseButtons;
const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, new __VLS_265({ ...{}, }));
({} as { BaseButtons: typeof __VLS_265; }).BaseButtons;
({} as { BaseButtons: typeof __VLS_265; }).BaseButtons;
const __VLS_267 = __VLS_266({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_266));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_265, typeof __VLS_267> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
let __VLS_269!: __VLS_NormalizeEmits<typeof __VLS_268.emit>;
{
const __VLS_270 = ({} as 'BaseButton' extends keyof typeof __VLS_ctx ? { 'BaseButton': typeof __VLS_ctx.BaseButton; } : typeof __VLS_resolvedLocalAndGlobalComponents).BaseButton;
const __VLS_271 = __VLS_asFunctionalComponent(__VLS_270, new __VLS_270({ ...{}, type: ("submit"), color: ("info"), label: ("Submit"), class: (({ 'opacity-25': __VLS_ctx.form.processing })), disabled: ((__VLS_ctx.form.processing)), }));
({} as { BaseButton: typeof __VLS_270; }).BaseButton;
const __VLS_272 = __VLS_271({ ...{}, type: ("submit"), color: ("info"), label: ("Submit"), class: (({ 'opacity-25': __VLS_ctx.form.processing })), disabled: ((__VLS_ctx.form.processing)), }, ...__VLS_functionalComponentArgsRest(__VLS_271));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_270, typeof __VLS_272> & Record<string, unknown>) => void)({ ...{}, type: ("submit"), color: ("info"), label: ("Submit"), class: (({ 'opacity-25': __VLS_ctx.form.processing })), disabled: ((__VLS_ctx.form.processing)), });
const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272)!;
let __VLS_274!: __VLS_NormalizeEmits<typeof __VLS_273.emit>;
}
(__VLS_268.slots!).default;
}
// @ts-ignore
[form, form, form, form, form, form,];
}
}
}
(__VLS_13.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
