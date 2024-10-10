<template>
    <span class="checkbox">
        <input 
            type="checkbox" 
            :id="props.checkId" 
            :checked="checked"
            :disabled="disabled" />
        <label :for="props.checkId">
            {{ props.label }}
        </label>
    </span>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    checkId: {
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
