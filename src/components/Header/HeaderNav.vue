<template>
    <nav class="mav">
        <ul class="nav__list">
            <li class="nav__item" v-for="item in navigation">
                <a href="{{ item.link }}" class="nav__link"> {{ item.name }} </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'HeaderNav',
    data() {
        return {
            navigation: [
                {
                    name: "Projects",
                    link: "#projects"
                },
                {
                    name: "Technologies",
                    link: "#technologies"
                },
                {
                    name: "Projects",
                    link: "#projects"
                },
            ],
        };
    },

    setup() {
        return {};
    },
});
</script>

<style scoped></style>
