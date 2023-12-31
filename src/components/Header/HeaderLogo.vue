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
        font-size: 50px;
        @include font(15px, 1.2,700);
    }
}
</style>
