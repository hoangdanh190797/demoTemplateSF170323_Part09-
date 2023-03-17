<script setup>
// reactive state
// functions that mutate state and trigger updates
// lifecycle hooks
import IconLogoV from './icons/IconLogoV.vue';
import IconFacebookV from './icons/IconFacebookV.vue';
import IconTwitterV from './icons/IconTwitterV.vue';
import IconPinterestV from './icons/IconPinterestV.vue';
import IconInstagramV from './icons/IconInstagramV.vue';
</script>

<template>
    <div class="flex flex-col bg-verydarkblue">
        <br>
        <div class="m-auto">
            <img src="../assets/images/logo.svg" alt="" width="100">
            <IconLogoV />
        </div>
        <br>
        <div class="m-auto text-center text-white">
            <div>
                <h1 class="font-bold">Features</h1>
                <br>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <br>
            <div>
                <h1 class="font-bold">Resources</h1>
                <br>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <br>
            <div>
                <h1 class="font-bold">Company</h1>
                <br>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div class="flex m-auto p-5">
            <IconFacebookV class="mr-3" />
            <IconTwitterV class="mr-3" />
            <IconPinterestV class="mr-3" />
            <IconInstagramV />
        </div>
    </div>
</template>