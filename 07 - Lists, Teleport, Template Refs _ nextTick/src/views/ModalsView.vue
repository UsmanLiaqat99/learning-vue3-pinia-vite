<template>
    <div class="modals">
        <h1>Modals</h1>

        <button @click="showModal = true">Show Modal</button>

        <teleport to=".modals-container">
            <div class="modal" v-if="showModal">
                <h1>This is a Modal</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos ipsa
                    sapiente neque autem. Eveniet, deleniti quae? Dolor fugit facere
                    blanditiis excepturi repellat adipisci officiis voluptate et autem
                    consectetur! A?
                </p>
                <button @click="showModal = false">Hide Modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const showModal = ref(false);
</script>

<style>
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
