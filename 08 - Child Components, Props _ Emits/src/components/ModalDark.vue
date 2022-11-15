<template>
    <div>
        <teleport to=".modals-container">
            <div v-if="modelValue" class="modal-dark">
                <h1>{{ props.title }}</h1>
                <slot></slot>
                <button @click="$emit('update:modelValue', false)">Hide Modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>

// const props = defineProps(['title'])

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    }
})

const emit = defineEmits(['update:modelValue'])

</script>

<style scoped>
.modal-dark {
    background-color: #333;
    color: white;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>