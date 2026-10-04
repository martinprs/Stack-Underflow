<template>
    <div class="col">
        <div class="card mb-12">
            <div class="card-body">
                <div class="d-flex justify-content-start mb-12">
                    <button class="btn post_tag">javascript</button>
                </div>
                <p class="card-text mb-12">
                    For questions about programming in ECMAScript (JavaScript/JS) and its different
                    dialects/implementations (except for ActionScript). Note that...
                </p>
                <div class="row">
                    <div class="col">
                        <p class="tag_stat_text">2511301 questions</p>
                    </div>
                    <div class="col">
                        <p class="tag_stat_text">325 asked today</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mb-12 {
    margin-bottom: 12px;
}

.tag_stat_text {
    font-size: 12px;
    color: hsl(210, 8%, 75%);
    text-align: left;
}

.card {
    width: 253px;
    height: 177px;
    border-radius: 4px;
}

.card-body {
    padding: 12px;
}

.card-text {
    color: hsl(210,8%,25%);
    text-align: left;
    font-size: 13px;
    margin-bottom: 12px;
}

.post_tag {
    color: hsl(205, 47%, 42%);
    background-color: hsl(205, 46%, 92%);
    font-size: 12px;
    height: 23px;
    padding: .4em .5em;
    border-radius: 4px;
    line-height: 1;
}

.post_tag:hover {
    color: hsl(205, 46%, 32%);
    background-color: hsl(205, 53%, 88%);
}

.btn.post_tag.active,
.btn.post_tag:active {
    color: hsl(205, 46%, 32%);
    background-color: hsl(205, 53%, 88%);
    border-color: transparent;
}
</style>