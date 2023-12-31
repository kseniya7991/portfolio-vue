const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    //Иморт миксинов
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "./src/assets/scss/mixins/index.scss";`,
            },
        },
    },
});
