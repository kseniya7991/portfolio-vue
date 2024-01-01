<template>
    <span class="header__logo">Kseniya<br />Stoychykava</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "HeaderLogo",
    setup() {
        return {};
    },
});
</script>

<style scoped lang="scss">

.header {
    &__logo {
        @include font(20px, 1.2,500);
        @include color($white);
        text-transform: uppercase;
    }
}
</style>
