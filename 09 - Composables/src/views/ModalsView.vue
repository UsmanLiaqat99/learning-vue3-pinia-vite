<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input v-model="showDarkModals" type="checkbox">
            </label>
        </div>
        <button @click="showModal = true">Show Modal</button>
        <component :is="showDarkModals ? ModalDark : Modal" v-model="showModal" title="my modal title (via prop)">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos ipsa
                sapiente neque autem. Eveniet, deleniti quae? Dolor fugit facere
                blanditiis excepturi repellat adipisci officiis voluptate et autem
                consectetur! A?
            </p>
        </component>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Modal from "../components/Modal.vue";
import ModalDark from "../components/ModalDark.vue";

const showDarkModals = ref(false)
const showModal = ref(false);
</script>

