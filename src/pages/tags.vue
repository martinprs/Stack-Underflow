<script setup>
import tagsCard from "../components/tags/tagsCard.vue";
</script>

<template>
    <div class="container">
        <h1 class="w-100 text-start mb-16">Tags</h1>
        <p class="description text-start mb-16">
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right
            tags makes it easier for others to find and answer your question.
        </p>

        <div class="filter d-flex mb-16">
            <div class="searchbar">
                <svg class="search-icon" width="18" height="18" viewBox="0 0 18 18">
                    <path
                        d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z">
                    </path>
                </svg>
                <input class="form-control" placeholder="Filter by tag name" />
            </div>

            <div class="btn-group ms-auto">
                <button class="btn">Popular</button>
                <button class="btn">Name</button>
                <button class="btn">New</button>
            </div>
        </div>

        <div class="row row-cols-4">
            <tagsCard />
            <tagsCard />
            <tagsCard />
            <tagsCard />
            <tagsCard />
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 24px;
}

h1 {
    font-size: 1.61538462rem;
}

.description {
    width: 632px;
    font-size: 15px;
    color: hsl(210, 8%, 15%);
}

.mb-16 {
    margin-bottom: 16px;
}

.searchbar {
    position: relative;
    width: 193px;
}

.searchbar input {
    width: 100%;
    padding-left: 36px;
    height: 36px;
    border-color: hsl(210, 7.8%, 74.9%);
    font-size: 13px;
}

.searchbar input::placeholder {
    font-size: 13px;
    color: hsl(210, 8%, 75%);
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    fill: hsl(210, 8%, 55%);
}

.btn-group .btn {
    font-size: 14px;
    color: hsl(210, 8%, 25%);
    height: 36px;
    border: 1px solid hsl(210, 7.8%, 74.9%);
}

.btn-group .btn:active {
    border-color: hsl(210, 7.8%, 74.9%);
    background-color: hsl(204, 9.8%, 90%);
}
</style>