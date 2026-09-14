<script setup>
import { ref } from 'vue'

const filterActive = ref(false)
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col first border-bottom">
                <div class="header d-flex">
                    <h1 class="w-100 text-start">All Questions</h1>
                    <button class="btn ask">Ask Question</button>
                </div>
                <div class="filter d-flex">
                    <p class="w-100 text-start question_count">23,896,382 questions</p>
                    <div class="btn-group" style="margin-right: 16px;">
                        <button class="btn">Newest</button>
                        <button class="btn">Active</button>
                        <button class="btn">Bountied</button>
                        <button class="btn">Unanswered</button>
                        <div class="btn-group dropdown-center">
                            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,10">
                                More
                            </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item">Frequent</button></li>
                                <li><button class="dropdown-item">Score</button></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <span class="dropdown-item" style="color: hsl(210,8%,60%);">
                                        Unanswered (my tags)
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn filter_btn" :class="{ active: filterActive }"
                        @click="filterActive = !filterActive">
                        <svg aria-hidden="true" class="svg-icon iconFilter" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z"></path>
                        </svg>
                        <span style="margin-left: 2px;">Filter</span>
                    </button>
                </div>
            </div>
            <div class="col second">
                Second col
            </div>
        </div>
    </div>
</template>

<style scoped>
.filter_btn {
    height: 35px;
    width: 68px;
    background-color: hsl(205.3, 46.3%, 92%);
    font-size: 12px;
    color: hsl(204.5, 39.2%, 46.5%);
    fill: hsl(205.2, 46.7%, 42%);
    white-space: nowrap;
}

.filter_btn:hover {
    color: hsl(204.5, 39.2%, 46.5%);
    background-color: hsl(205.1, 56.7%, 81%);
}

.filter_btn svg {
    position: relative;
    top: -2px;
}

.dropdown-menu {
    width: 210px;
}

.dropdown-item {
    color: hsl(210, 8%, 35%);
    font-size: 13px;
}

.dropdown-item:hover {
    background-color: transparent;
    color: hsl(210, 8%, 15%);
}

.btn-group .btn {
    font-size: 12px;
    color: hsl(210, 8%, 25%);
    height: 35px;
    border: 1px solid hsl(210, 7.8%, 74.9%);
}

.btn-group .btn:active {
    border-color: hsl(210, 7.8%, 74.9%);
    background-color: hsl(204, 9.8%, 90%);
}

.filter {
    height: 35px;
    align-items: center;
    margin-bottom: 12px;
}

.filter .question_count {
    flex: 1 1 auto;
    min-width: 0;
    width: auto !important;
}

.question_count {
    font-size: 17px;
    margin: 0;
}

.btn.ask {
    background-color: hsl(206, 100%, 52%);
    color: white;
    font-size: 13px;
    height: 37px;
    white-space: nowrap;
}

.btn.ask:hover {
    background-color: hsl(206, 91%, 44%);
}

h1 {
    font-size: 1.61538462rem;
}

.row {
    padding: 24px;
}

.header {
    height: 49px;
    margin-bottom: 12px;
}

.col.first {
    flex: 0 0 727px;
    padding: 0;
}

.col.second {
    flex: 0 0 300px;
    padding: 0;
}
</style>