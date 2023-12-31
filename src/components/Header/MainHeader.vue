<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap">
                <HeaderLogo />
                <HeaderNav />
                <DefaultBtn text="Contact me" link="#contacts" />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MainHeader",
    props: {
        msg: String,
    },
});
</script>

<style lang="scss" scoped>
.header {
    &__wrap {
        @include flex(row, flex-start, center);
        padding-block: 20px;
        @include color($color-white);
    }
}
</style>
