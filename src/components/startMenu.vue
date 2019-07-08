<template>
    <div class="start-menu-container">
        <div class="start-menu" v-if="open">
            <div class="top">
                <div>[LOGO]</div>
                User
            </div>
            <ul class="list-left-upper">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <ul class="list-left-lower">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <ul class="list-left-upper">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div class="bottom">

            </div>
        </div>
        <button type="button" class="start-button" @click="open = !open">Start</button>
    </div>
</template>

<script>
export default {
    name: "start-menu",
    data() {
        return {
            open: false
        }
    }
}
</script>

<style scoped>

</style>