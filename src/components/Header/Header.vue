<template>
    <header>
        <HeaderLogo />
        <HeaderNav />
        <DefaultBtn text="Contact me" link="#contacts"/>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Header",
    props: {
        msg: String,
    },
});
</script>

<style lang="scss" scoped></style>
