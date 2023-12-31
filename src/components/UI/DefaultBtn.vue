<template>
    <a href="{{ link }}" type="button" v-if=link>
        {{ text }}
    </a>

    <button :type="buttonType || 'button'" v-else>
        {{ text }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DefaultBtn",
    props: {
        text: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: false,
        },
        isButton: {
            type: Boolean,
            required: false,
        },
        buttonType: {
            type: String,
            required: false,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
