<template>
    <a :href="link" type="button" v-if="link" :class="['btn', style ? `btn--${style}` : 'btn--grad']">
        {{ text }}
    </a>

    <button :type="getTypeAttribute(buttonType)" v-else :class="['btn', style ? `btn--${style}` : 'btn--grad']">
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
            default: "button",
        },
        style: {
            type: String,
            required: false,
        },
    },

    setup() {
        return {};
    },

    methods: {
        getTypeAttribute(buttonType: any) {
            let type = "button";
            if (["button", "submit", "reset"].includes(buttonType)) {
                return buttonType;
            } 

            console.log(type);
            return type;
        },
    },
});
</script>

<style scoped lang="scss">
.btn {
    @include size(null, 48px);
    padding: 10px 30px;
    border-radius: 60px;

    @include flex(row, center, center);
    @include text-align(center);

    background-size: 300% 100%;

    @include transition(background-position);

    white-space: nowrap;


    &--grad {
        @include color($white);
        background-image: linear-gradient(90deg, $color-secondary 0%, $color-primary 40%, $color-secondary 100%);

        @include hover {
            background-position: 100% 0;
        }
    }
}
</style>
