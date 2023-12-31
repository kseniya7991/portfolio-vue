const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    //Иморт миксинов
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "./src/assets/scss/mixins/index.scss";
                                 @import "./src/assets/scss/vars/index.scss";
                                 @import "./src/assets/scss/placeholders/index.scss";`,
            },
        },
    },
});
