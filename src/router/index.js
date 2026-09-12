import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Questions from "../pages/questions.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", component: Home },
		{ path: "/questions", component: Questions },
	],
});

export default router;