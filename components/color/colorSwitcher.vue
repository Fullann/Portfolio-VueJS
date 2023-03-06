<template>
    <div class="min-h-screen w-full justify-center flex flex-row items-center">
        <div class="flex flex-row justify-between toggle">
            <label for="dark-toggle" class="flex items-center cursor-pointer">
                <div class="relative">
                    <input type="checkbox" name="dark-mode" id="dark-toggle" class="checkbox hidden" @click="changeMode" />
                    <div class="block border-[1px] border-white dark:border-gray-900 w-14 h-8 rounded-full"></div>
                    <div class="dot absolute left-1 top-1 bg-white dark:bg-gray-800 w-6 h-6 rounded-full transition"></div>
                </div>
            </label>
        </div>
    </div>
</template>
    
<script>
export default {
    computed: {
        btnLabel() {
            return this.$colorMode.preference === "light" ? "dark" : "light";
        },
    },
    methods: {
        changeMode() {
            this.$colorMode.preference =
                this.$colorMode.preference === "light" ? "dark" : "light";
        },
    },
};
</script>
    
<style scoped>
input:checked~.dot {
    transform: translateX(100%);
    background-color: #132b50;
}
</style>