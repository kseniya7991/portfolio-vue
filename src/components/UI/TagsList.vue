<template>
    <ul class="tags">
        <li class="tags__item" v-for="item in tags">
            {{ item }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TagsList",
    props: {
        tags: {
            type: Array,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
.tags {


    @include flex(row, flex-start, center, 15px);
    flex-wrap: wrap;

    opacity: 0.9;

    &__item {
        padding: 8px 15px;
        border-radius: 30px;

        @extend %text-s;
        @include color($white);

        border: 1px solid $white;
    }
}
</style>
