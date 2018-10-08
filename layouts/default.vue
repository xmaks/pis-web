<template>
	<v-app>
		<v-toolbar dark app dense color="primary">
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
		</v-toolbar>
		<v-navigation-drawer app v-model="drawer" fixed></v-navigation-drawer>
		<v-content>
			<nuxt></nuxt>
		</v-content>
		<v-footer app></v-footer>
	</v-app>
</template>

<script>
export default {
    data() {
      	return {
        	drawer: false,
      	}
    }
};
</script>
