<template>
    <div class="container text-center">
        <div class="row">
            <div class="col first">
                <div class="sidebar overflow-auto">
                    <button class="dropdown-item">Home</button>
                    <button class="dropdown-item">Questions</button>
                    <button class="dropdown-item">Tags</button>
                    <button class="dropdown-item">Saves</button>
                </div>
            </div>

            <div class="col second">
                Second column
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown-item {
    height: 33px;
    border-radius: 6px 0 0 6px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
    text-align: left;
    padding-left: 24px;
}

.dropdown-item:hover {
    background-color: hsl(210, 7.7%, 94.9%);
    border-radius: 4px 0 0 4px;
    color: black;
}

.dropdown-item:active {
    background-color: hsl(0, 0%, 97%);
    border-right: 3px solid hsl(27, 90%, 55%);
    border-radius: 4px 0 0 4px;
    font-weight: bold;
}

.row {
    width: 1264px;
    margin: 0 0px;
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