<template>
    <div class="container text-center">
        <div class="row">
            <div class="col first">
                <div class="sidebar overflow-auto">
                    <button class="dropdown-item active">
                        <svg aria-hidden="true" class="svg-icon iconHome" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M15 10v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5H0l9-9 9 9zm-8 1v6h4v-6z"></path>
                        </svg>
                        <span class="span_gap">Home</span>
                    </button>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconQuestion" width="18" height="18"
                            viewBox="0 0 18 18">
                            <path
                                d="m4 15-3 3V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v9c0 1.09-.91 2-2 2zm7.75-3.97c.72-.83.98-1.86.98-2.94 0-1.65-.7-3.22-2.3-3.83a4.4 4.4 0 0 0-3.02 0 3.8 3.8 0 0 0-2.32 3.83q0 1.93 1.03 3a3.8 3.8 0 0 0 2.85 1.07q.94 0 1.71-.34.97.66 1.06.7.34.2.7.3l.59-1.13a5 5 0 0 1-1.28-.66m-1.27-.9a5 5 0 0 0-1.5-.8l-.45.9q.5.18.98.5-.3.1-.65.11-.92 0-1.52-.68c-.86-1-.86-3.12 0-4.11.8-.9 2.35-.9 3.15 0 .9 1.01.86 3.03-.01 4.08">
                            </path>
                        </svg>
                        <span class="span_gap">Questions</span>
                    </button>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconTags" width="18" height="18" viewBox="0 0 18 18">
                            <path
                                d="M9.24 1a3 3 0 0 0-2.12.88l-5.7 5.7a2 2 0 0 0-.38 2.31 3 3 0 0 1 .67-1.01l6-6A3 3 0 0 1 9.83 2H14a3 3 0 0 1 .79.1A2 2 0 0 0 13 1z"
                                opacity=".4"></path>
                            <path
                                d="M9.83 3a2 2 0 0 0-1.42.59l-6 6a2 2 0 0 0 0 2.82L6.6 16.6a2 2 0 0 0 2.82 0l6-6A2 2 0 0 0 16 9.17V5a2 2 0 0 0-2-2zM12 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4">
                            </path>
                        </svg>
                        <span class="span_gap">Tags</span>
                    </button>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconBookmark" width="18" height="18"
                            viewBox="0 0 18 18">
                            <path d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4z"></path>
                        </svg>
                        <span class="span_gap">Saves</span>
                    </button>
                    <li class="sidebar_gap"></li>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconDocumentAlt" width="18" height="18"
                            viewBox="0 0 18 18">
                            <path
                                d="M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m.5 1.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1M5 14.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5">
                            </path>
                            <path
                                d="M5.9 2h6.35A2.75 2.75 0 0 1 15 4.75v9.35c.62-.6 1-1.43 1-2.35v-7.5C16 2.45 14.54 1 12.75 1h-4.5c-.92 0-1.75.38-2.35 1"
                                opacity=".4"></path>
                        </svg>
                        <span class="span_gap">Articles</span>
                    </button>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconPeople" width="18" height="18" viewBox="0 0 18 18">
                            <path
                                d="M17 14c0 .44-.45 1-1 1H9a1 1 0 0 1-1-1H2c-.54 0-1-.56-1-1 0-2.63 3-4 3-4s.23-.4 0-1c-.84-.62-1.06-.59-1-3s1.37-3 2.5-3 2.44.58 2.5 3-.16 2.38-1 3c-.23.59 0 1 0 1s1.55.71 2.42 2.09c.78-.72 1.58-1.1 1.58-1.1s.23-.4 0-1c-.84-.61-1.06-.58-1-3s1.37-3 2.5-3 2.44.59 2.5 3c.05 2.42-.16 2.39-1 3-.23.6 0 1 0 1s3 1.38 3 4">
                            </path>
                        </svg>
                        <span class="span_gap">Users</span>
                    </button>
                    <li class="sidebar_gap"></li>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconIndustry" width="18" height="18"
                            viewBox="0 0 18 18">
                            <path
                                d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6c1.09 0 2 .91 2 2v2h2c1.09 0 2 .91 2 2v8zM4 4v2h2V4zm0 4v2h2V8zm4-4v2h2V4zm0 4v2h2V8zm-4 4v2h2v-2zm8 0v2h2v-2zm0-4v2h2V8z">
                            </path>
                        </svg>
                        <span class="span_gap">Companies</span>
                    </button>
                    <button class="dropdown-item">
                        <svg aria-hidden="true" class="svg-icon iconDocumentAlt" width="18" height="18"
                            viewBox="0 0 18 18">
                            <path
                                d="M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m.5 1.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1M5 14.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5">
                            </path>
                            <path
                                d="M5.9 2h6.35A2.75 2.75 0 0 1 15 4.75v9.35c.62-.6 1-1.43 1-2.35v-7.5C16 2.45 14.54 1 12.75 1h-4.5c-.92 0-1.75.38-2.35 1"
                                opacity=".4"></path>
                        </svg>
                        <span class="span_gap">Developer Story</span>
                    </button>
                </div>
            </div>

            <div class="col second">
                Second column
            </div>
        </div>
    </div>
</template>

<style scoped>
.span_gap {
    margin-left: 8px;
}

.sidebar {
    margin-top: 24px;
}

.sidebar_gap {
    height: 24px;
}

.dropdown-item {
    height: 33px;
    border-radius: 10px 0 0 10px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
    text-align: left;
    padding-left: 8px;
}

.dropdown-item:hover {
    background-color: hsl(210, 7.7%, 97%);
    border-radius: 4px 0 0 4px;
    color: black;
}

.svg-icon {
    fill: hsl(210, 7.8%, 25.1%);
    vertical-align: bottom;
}

.dropdown-item:hover .svg-icon {
    fill: black;
}

.dropdown-item.active {
    background-color: hsl(0, 0%, 94%);
    border-right: 3px solid hsl(27, 90%, 55%);
    border-radius: 4px 0 0 4px;
    font-weight: bold;
}

.dropdown-item.active .svg-icon {
    fill: black;
}

.row {
    width: 1264px;
    margin: 0 0px;
    height: 100vh;
}

.col.first {
    border-right: 1px solid hsl(210, 8%, 85%);
    flex: 0 0 164px;
    width: 164px;
    padding: 0px;
}

.col.second {
    width: 1100px;
    padding: 0px;
}
</style>