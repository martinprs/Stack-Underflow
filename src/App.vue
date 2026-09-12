<script setup>
import navbar from "./components/navbar.vue";
import sidebar from "./components/sidebar.vue";
</script>

<template>
    <main>
        <navbar />
        <div class="container text-center">
            <div class="row">
                <div class="col first">
                    <sidebar />
                </div>

                <div class="col second">
                    <RouterView />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
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