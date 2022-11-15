<template>
    <div>
        <teleport to=".modals-container">
            <div v-if="modelValue" class="modal">
                <h1>{{ props.title }}</h1>
                <slot></slot>
                <button @click="$emit('update:modelValue', false)">Hide Modal</button>
                <div>
                    Username is: {{ userData.username }}
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>

import { inject } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    },
})

const emit = defineEmits(['update:modelValue'])

const userData = inject('userData')

</script>

<style scoped>
.modal {
    background-color: beige;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>