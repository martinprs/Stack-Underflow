<template>
    <div class="card list-group-item">
        <div class="row">
            <div class="col first text-end">
                <p class="stat_text" style="color: black; margin-top: 4px;">0 votes</p>
                <p class="stat_text">0 answers</p>
                <p class="stat_text">2 views</p>
            </div>
            <div class="col second">
                <a href="#" class="post_title d-block">
                    DotCMS or Tinymce: Remove the "Edit Image" option in a Binary field
                </a>
                <p class="post_summary">
                    We have a binary field that accepts only images (accept=image/*)? Is there a way
                    to remove the "Edit Image" option? Note: I can also use tinymce. Thanks a lot!
                </p>
                <div class="post_meta row">
                    <div class="col d-flex align-items-start">
                        <button class="btn post_tag">tinymce</button>
                        <button class="btn post_tag">tinymce-4</button>
                        <button class="btn post_tag">tinymce-5</button>
                        <button class="btn post_tag">dotcms</button>
                    </div>
                    <div class="col d-flex justify-content-end align-items-center">
                        <a href="#" class="user_card">
                            <img src="https://web.archive.org/web/20230901021322im_/https://www.gravatar.com/avatar/ecde56d63d638efa00dbd7808c54d055?s=32&d=identicon&r=PG&f=y&so-version=2"
                                class="avatar">
                            hotchoco
                        </a>
                        <p class="stat_text mb-0" style="font-size: 12px;">
                            <span style="font-weight: bold;">77</span>
                            asked
                            <span>1 min ago</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.avatar {
    width: 16px;
    height: 16px;
    border-radius: 4px;
}

.user_card {
    font-size: 12px;
    text-decoration: none;
    margin-right: 4px;

}

.user_card:hover {
    color: hsl(206, 100%, 52%);
}

.post_meta .col {
    padding: 0;
}

.post_tag {
    color: hsl(205, 47%, 42%);
    background-color: hsl(205, 46%, 92%);
    font-size: 12px;
    height: 23px;
    padding: .4em .5em;
    margin-right: 4px;
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

.post_title {
    overflow-wrap: break-word !important;
    text-decoration: none;
    text-align: left;
    margin: 0;
}

.post_title:hover {
    color: hsl(206, 100%, 52%);
}

.post_summary {
    overflow-wrap: break-word !important;
    text-align: left;
    font-size: 13px;
    margin-bottom: 8px;
    color: hsl(210, 8%, 25%);
}

.stat_text {
    font-size: 13px;
    color: hsl(210, 8%, 45%);
    margin-bottom: 4px;
    padding: 0;
}

.card {
    min-height: 90px;
    padding: 16px;
    border-radius: 0px;
}

.row {
    width: 100%;
    margin: 0;
}

.col.first {
    flex: 0 0 108px;
    padding: 0;
    margin-right: 16px;
}

.col.second {
    flex: 0 0 595px;
    padding: 0;
}
</style>