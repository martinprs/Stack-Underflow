<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
    <div class="container">
        <div class="info">
            <img src="../../src/assets/temp/26nJXbOM.png" class="avatar" alt="User avatar">
            <div class="profile_details">
                <h1>Username</h1>

                <div class="profile_meta">
                    <svg aria-hidden="true" class="meta_icon" width="18" height="18" viewBox="0 0 18 18">
                        <path
                            d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23q-.22.33-.22.77c0 .83.68 1.5 1.5 1.5m3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76M13.75 7H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6q.43.43 1.03.43c.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7">
                        </path>
                    </svg>
                    <span>
                        <p class="meta_text">Member for 1 year, 8 months</p>
                    </span>
                </div>

                <a class="github_link" href="https://github.com/martinprs" title="GitHub profile">
                    <svg aria-hidden="true" class="svg_icon" width="18" height="18" viewBox="0 0 18 18">
                        <path fill="#969ea6"
                            d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1">
                        </path>
                    </svg>
                </a>
            </div>
        </div>

        <div class="profile_tab">
            <button class="tab btn" :class="{ active: isActive }" @click="isActive = !isActive">Profile</button>
            <button class="tab btn">Activity</button>
            <button class="tab btn">Saves</button>
            <button class="tab btn">Settings</button>
        </div>
    </div>
</template>

<style scoped>
/* Global */
.container {
    max-width: none;
    padding: 24px;
    text-align: left;
}

/* Info div */
.info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.avatar {
    width: 128px;
    height: 128px;
    border-radius: 5px;
}

h1 {
    font-size: 34px;
}

.profile_meta {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0 0 8px;
    padding: 0;
    list-style: none;
    color: hsl(210, 8%, 45%);
    font-size: 15px;
    line-height: 18px;
}

.profile_meta>span,
.profile_meta p {
    display: inline;
    margin: 0;
}

.meta_icon {
    flex: 0 0 auto;
    fill: hsl(210, 8%, 62%);
}

.meta_text {
    font-size: 13px;
}

.github_link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    margin-left: -4px;
    color: hsl(210, 8%, 45%);
}

/* Profile_tab div */
.tab.btn {
    font-size: 13px !important;
    font-weight: 400;
    height: 29px;
    height: 32px;
    display: flex;
    align-items: center;
    margin: 0px 2px;
}

.tab.btn.active {
    height: 29px;
    background-color: hsl(27, 90.4%, 55.1%);
    color: white !important;
    border-radius: 360px;
}

.tab.btn:hover {
    background-color: #e3e6e8;
}

.tab.btn.active:hover {
    background-color: hsl(27, 90%, calc(55% - 10%));
}

</style>