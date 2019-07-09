<template>
    <start-menu :theme="theme" :util="util"></start-menu>
</template>

<script>
import startMenu from "./components/startMenu.vue"
export default {
    components: {
        startMenu
    },
    data() {
        return {
            test: "hej",
            theme: {
                res: function (resourceName) {
                    var name = resourceName.substr(0,resourceName.lastIndexOf("."));
                    var type = resourceName.substr(resourceName.lastIndexOf(".")+1);
                    console.log(this);
                    return this.themeBasePath+"/"+this.themeName+"_"+this.themeVariant+"_"+name+"_"+type.toUpperCase()+"."+type;
                },
                themeName: 'theme1',
                themeVariant: 'blue',
                themeBasePath: '/src/resources/theme-one/',

            },
            util: {
                css: {
                    url: function (url) {
                        return "url("+url+")";
                    }
                }
            }
        }
    },
    created: function () {
    }
}
</script>