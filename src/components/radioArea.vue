<template>
    <span class="radio">
        <input
            type="radio"
            :name="props.radioName"
            :id="props.radioId"
            :checked="checked"
            :disabled="disabled"
            @change="$emit('onChangeEvt')" />
        <label :for="props.radioId">
            {{ props.label }}
            <slot name="body" />
        </label>
    </span>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    radioId: {
        type: String,
        default: "",
    },
    radioName: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    checked: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
