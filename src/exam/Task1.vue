<template>
    <div class="w-full">
        <!-- Header section -->
        <header class="container w-[1150px] py-4 mx-auto flex justify-between items-center">
            <img src="../../public/Images/logo (2).svg" alt="">
            <nav>
                <ul class="flex gap-10">
                    <router-link to="#" class="curssor-pointer"><li>Home</li></router-link>
                    <router-link to="#" class="curssor-pointer"><li>Advertize</li></router-link>
                    <router-link to="#" class="curssor-pointer"><li>Supports</li></router-link>
                    <router-link to="#" class="curssor-pointer"><li>Contact</li></router-link>
                </ul>
            </nav>
            <button class="w-[150px] h-[50px] border-solid border-2 border-red-400 rounded-full text-red-400">Get Started</button>
        </header>
        <!-- Body section -->
        <div class="w-full">
            <section class="body-section  h-auto flex flex-col items-center gap-6">
                <h1 class="text-[70px] font-semibold w-[814px] text-center">Top Quality Digital Products To Explore</h1>
                <p class="text-lg w-[500px] text-center leading-10">Get your blood tests delivered at let home collect sample from the victory of the managments that supplies 
                    best design system guidelines ever.</p>
                <button class="w-[150px] h-[50px] border-none border-2 rounded-full bg-red-500 text-white">Explore</button>
                <img src="../../public/Images/Browser-mockup.svg" alt="#" class="">
            </section>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
.body-section{
    background-image: url(../../public/Images/shape.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>