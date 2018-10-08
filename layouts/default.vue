<template>
	<v-app dark>
		<v-navigation-drawer app clipped v-model="drawer"></v-navigation-drawer>
		<v-toolbar app clipped-left>
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
		</v-toolbar>
		<v-content>
			<v-container fluid>
				<nuxt></nuxt>
			</v-container>
		</v-content>
		<v-footer app></v-footer>
	</v-app>
</template>

<script>
export default {
    data() {
      	return {
        	drawer: true,
      	}
    }
};
</script>
