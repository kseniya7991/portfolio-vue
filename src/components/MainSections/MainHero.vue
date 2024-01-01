<template>
    <section class="section section-hero">
        <div class="container">
            <div class="hero">
                <div class="hero__wrap">
                    <div class="hero__text">
                        <h1 class="hero__title">
                            <span class="hero__title__main">Hi, I'm Kseniya </span>
                            <br />
                            frontend developer
                        </h1>
                        <p class="hero__descr">
                            1.5+ years of commercial experience. Striving for the synthesis of aesthetics and
                            functionality, love animations and studying THREE.js. I bring my creativity and technical
                            skills to every project.
                        </p>
                        <TagsList :tags="tagsList" />
                    </div>
                    <div class="hero__img__wrap" ref="trigger">
                        <div class="triangle triangle-1" data-depth="0.5">
                            <div class="triangle__inner"></div>
                        </div>
                        <div class="triangle triangle-2" data-depth="0.2">
                            <div class="triangle__inner"></div>
                        </div>
                        <div class="triangle triangle-3" data-depth="1">
                            <div class="triangle__inner"></div>
                        </div>
                        <div class="hero__img" ref="parallaxElement">
                            <img src="../../assets/img/portfolio-img-1.jpg" alt="photo" />
                        </div>
                    </div>
                </div>
                <DefaultBtn text="Download CV" link="/" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Parallax from "parallax-js";

export default defineComponent({
    name: "MainHero",
    data() {
        return {
            tagsList: ["JS/TS", "Vue.js", "SCSS", "REST API", "THREE.js"],
        };
    },
    mounted() {
        let parallax = new Parallax(this.$refs.trigger);

        console.log(parallax);
    },
});
</script>

<style scoped lang="scss">
.section-hero {
    padding-block: 0;
    @include size(100%, calc(100vh - 88px));
    @include min-size(null, 500px);

    .container {
        @include flex(row, center, center);
    }

    .hero {
        @include flex(column, flex-start, flex-start);
        @include size(100%);
        @include max-size(1000px);
        margin: 0 auto;

        &__wrap {
            @include size(100%);
            @include flex(row, space-between, center, 80px);
        }

        &__text {
            @include max-size(600px);
        }

        &__img {
            @include position(relative);
            @include image-wrap(250px, 350px, cover);
            border-radius: 5px;
            overflow: hidden;

            z-index: 1;

            &__wrap {
                @include size(250px, 350px);
                @include position(relative);
            }

            img {
                object-position: top;
                position: relative;
            }
        }

        .tags {
            margin-top: 40px;
        }

        &__title {
            @include color($white);
            @include font(42px, 1.6, 500);

            &__main {
                background: linear-gradient(320deg, $color-primary, $color-secondary);
                background-clip: text;
                -webkit-text-fill-color: transparent;

                @include font(42px, 1.6, 700);
            }
        }

        &__descr {
            margin-top: 50px;
            @include color($white);

            @include font(14px, 1.5, 300);
            opacity: 0.9;
        }

        .btn {
            margin-top: 40px;
        }

        .triangle {
            @include position(absolute);
            &__inner {
                transform-origin: 50% 50%;
            }

            &-1 {
                z-index: 10;
                @include position($top: -80px !important, $left: -150px !important);
                filter: blur(3px);

                .triangle__inner {
                    transform: rotate(50deg);

                    @include bg-color(#2aa8f1);

                    clip-path: polygon(53% 39%, 0% 100%, 81% 100%);
                    @include size(120px, 120px);

                    animation: animTriangle1 5s infinite;

                    @keyframes animTriangle1 {
                        0%,
                        100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(-5px, 10px);
                        }
                    }
                }
            }

            &-2 {
                z-index: 1;
                @include position($top: -30px !important, $right: 50px !important, $left: unset !important);
                filter: blur(1px);

                .triangle__inner {
                    @include bg-color($color-secondary);

                    @include size(30px, 30px);
                    clip-path: polygon(50% 0, 100% 100%, 0 100%);

                    animation: animTriangle2 30s infinite linear;

                    @keyframes animTriangle2 {
                        0% {
                            transform: rotate(75deg);
                        }
                        100% {
                            transform: rotate(435deg);
                        }
                    }
                }
            }

            &-3 {
                z-index: 20;
                @include position(
                    $top: unset !important,
                    $bottom: -10px !important,
                    $right: -50px !important,
                    $left: unset !important
                );

                filter: blur(5px);

                .triangle__inner {
                    transform: rotate(-30deg);
                    background-image: linear-gradient($color-primary, $color-secondary);

                    clip-path: polygon(51% 32%, 0% 100%, 100% 100%);
                    @include size(150px, 150px);

                    animation: animTriangle3 120s infinite linear;
                    transform-origin: 50% 90%;

                    @keyframes animTriangle3 {
                        0% {
                            transform: rotate(-30deg);
                        }
                        100% {
                            transform: rotate(330deg);
                        }
                    }
                }
            }
        }
    }
}
</style>
