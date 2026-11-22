import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Questions from "../pages/questions.vue";
import Tags from "../pages/tags.vue";
import Saves from "../pages/saves.vue";
import Profile from "../pages/profile.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", component: Home },
		{ path: "/questions", component: Questions },
		{ path: "/tags", component: Tags },
		{ path: "/saves", component: Saves},
		{ path: "/profile", component: Profile},
	],
});

export default router;