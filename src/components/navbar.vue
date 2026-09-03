<script setup>
import { ref } from 'vue';
import Favicon from '../../public/Favicon.ico'

const isActive = ref(false);
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <span><img :src="Favicon" alt="Favicon"></span>
                <span style="margin-right: 3px;">stack</span>
                <span style="font-weight: bold;">underflow</span>
            </a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link navbtn" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <button class="nav-link navbtn" :class="{ active: isActive }" @click="isActive = !isActive"
                                type="button" data-bs-toggle="dropdown">
                                Products
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Stack Internal</p>
                                        <p class="dropdown_caption">Implement a knowledge platform layer to power your
                                            enterprise and AI tools.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Stack Data Licensing</p>
                                        <p class="dropdown_caption">Get access to top-class technical expertise with
                                            trusted & attributed content.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <p class="dropdown_title">Stack Ads</p>
                                        <p class="dropdown_caption">Connect your brand to the world's most trusted
                                            technologist communities.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item border-top" href="#">
                                        <p class="dropdown_title">Releases</p>
                                        <p class="dropdown_caption">Keep up to-date on features we add to Stack
                                            Underflow and Stack Internal.</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item border-top" href="#">
                                        <p class="dropdown_title">About the company</p>
                                        <p class="dropdown_title">Visit the blog</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbtn" href="#">For Teams</a>
                    </li>
                    <li class="nav-item">
                        <div class="searchbar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search search-icon" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>

                            <input class="form-control" placeholder="Search..." aria-label="Search" />
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="buttons">
                            <button class="btn log">Log in</button>
                            <button class="btn sign">Sign up</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar {
    border-top: 2px solid hsl(27.2, 89.3%, 47.8%);
    border-bottom: 1px solid hsl(210, 8%, 85%);
    height: 56px;
}

.nav-item {
    display: flex;
    align-items: center;
}

.nav-link.navbtn {
    font-size: 13px;
    font-weight: 400;
    height: 29px;
    display: flex;
    align-items: center;
    border-radius: 360px;
}

.nav-link.navbtn:hover {
    background-color: #e3e6e8;
}

.dropdown-menu {
    width: 210px;
}

.dropdown-item p {
    margin: 0;
}

.dropdown_title {
    font-size: 13px;
    color: black;
}

.dropdown_caption {
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    white-space: normal;
}

.nav-link.navbtn.active {
    font-size: 13px;
    font-weight: 400;
    height: 29px;
    display: flex;
    align-items: center;
    background-color: hsl(27, 90.4%, 55.1%);
    color: white !important;
    border-radius: 360px;
}

.searchbar {
    position: relative;
    width: 717px;
}

.searchbar input {
    width: 100%;
    height: 32px;
    padding-left: 36px;
    border-color: hsl(210, 7.8%, 74.9%);
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    color: hsl(210, 8%, 45%);
}

.searchbar input::placeholder {
    font-size: 13px;
    color: hsl(210, 8%, 25%);
}

.searchbar input {
    font-size: 13px;
}

.navbar-brand {
    font-family: sans-serif;
    display: flex;
    align-items: center;
}

.buttons {
    margin-left: 5px;
}

.btn {
    font-size: 13px !important;
    height: 32px;
    display: flex;
    align-items: center;
    margin: 0px 2px;
}

.btn.log {
    background-color: hsl(205.3, 46.3%, 92%);
    color: hsl(205, 46%, 32%);
}

.btn.log:hover {
    background-color: hsl(205, 57%, 81%);
    color: hsl(205, 46%, 32%);
}

.btn.sign {
    background-color: hsl(206, 100%, 52%);
    color: white;
}

.btn.sign:hover {
    background-color: hsl(206, 100%, 40%);
    color: white;
}
</style>