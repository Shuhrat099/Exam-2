<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/"> Home</router-link>
                    <router-link to="/about"> About</router-link>
                    <router-link to="/blog"> Blog</router-link>
                    <RouterView />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

</style>