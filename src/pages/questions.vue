<script setup>
import { ref } from 'vue'

import post from "../components/post.vue";

const filterActive = ref(false)
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col first">
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

                <div class="border-bottom" style="margin-left: -24px;"></div>

                <div class="questions list-group list-group-flush" style="margin-left: -24px;">
                    <post />
                    <post />
                </div>

                <div class="pagination">
                    <div class="row">
                        <div class="col first_pagi">
                            <button class="btn next">Previous</button>
                            <button class="btn pagi">1</button>
                            <button class="btn pagi">2</button>
                            <button class="btn pagi">3</button>
                            <button class="btn pagi">4</button>
                            <button class="btn pagi">5</button>
                            <p class="pagi_text">...</p>
                            <button class="btn pagi">477928</button>
                            <button class="btn next">Next</button>
                        </div>
                        <div class="col second_pagi">
                            <button class="btn pagi">15</button>
                            <button class="btn pagi">30</button>
                            <button class="btn pagi">50</button>
                            <p class="pagi_text">per page</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col second">
                <ul class="list-group">
                    <li class="list-group-item title" style="border-radius: 4px 4px 0 0;">
                        The Overflow Blog
                    </li>
                    <li class="list-group-item content">
                        <a href="#" class="sidebar_link">
                            What it’s like being a professional workplace bestie (Ep. 603)
                        </a>
                        <a href="#" class="sidebar_link ">
                            Journey to the cloud part I: Migrating Stack Overflow Teams to Azure
                        </a>
                    </li>
                    <li class="list-group-item title">
                        Featured on Meta
                    </li>
                    <li class="list-group-item content" style="border-radius: 0 0 4px 4px;">
                        <a href="#" class="sidebar_link">
                            Moderation strike: Results of negotiations
                        </a>
                        <a href="#" class="sidebar_link">
                            Our Design Vision for Stack Overflow and the Stack Exchange network
                        </a>
                        <a href="#" class="sidebar_link">
                            Temporary policy: Generative AI (e.g., ChatGPT) is banned
                        </a>
                        <a href="#" class="sidebar_link">
                            Discussions experiment launching on NLP Collective
                        </a>
                        <a href="#" class="sidebar_link">
                            Call for volunteer reviewers for an updated search experience:
                            OverflowAI Search
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Pagination */
.btn.pagi {
    min-width: 25px;
    height: 27px;
    font-size: 13px;
    padding: 5px;
    border-radius: 4px;
    margin-right: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-color: hsl(210, 8%, 75%);
    color: hsl(210, 8%, 15%);
}

.btn.pagi:hover {
    background-color: hsl(210, 8%, 85%);
}

.btn.pagi.active,
.btn.pagi:active {
    background-color: hsl(27, 90%, 55%);
    color: white;
    border-color: transparent;
}

.btn.next {
    height: 27px;
    font-size: 13px;
    border-radius: 4px;
    margin-right: 4px;
    display: inline-flex;
    align-items: center;
    border-color: hsl(210, 8%, 75%);
    color: hsl(210, 8%, 15%);
}

.btn.next:hover {
    background-color: hsl(210, 8%, 85%);
}

.btn.next.active,
.btn.next:active {
    border-color: hsl(210, 8%, 75%);
}

/* Second column */
.list-group-item.title {
    background-color: hsl(47.4, 82.6%, 91%);
    border-color: hsl(47, 65%, 84%);
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 12px;
    height: 41px;
    font-weight: bold;
    color: hsl(210, 8%, 35%);
}

.list-group-item.content {
    background-color: hsl(46.7, 87.1%, 93.9%);
    border-color: hsl(47, 65%, 84%);
    flex-direction: column;
    display: flex;
}


.sidebar_link {
    align-self: stretch;
    color: hsl(210, 8%, 25%);
    text-align: left;
    text-decoration: none;
    font-size: 13px;
    margin-bottom: 10px;
}

.sidebar_link:hover {
    color: hsl(210, 8%, 35%);
}

/* First column */
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

.filter_btn.active,
.filter_btn:active {
    color: hsl(204.5, 39.2%, 46.5%) !important;
    background-color: hsl(205.1, 56.7%, 81%) !important;
    border-color: transparent;
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

.btn.ask.active,
.btn.ask:active {
    color: white;
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
    margin-left: 24px;
}
</style>