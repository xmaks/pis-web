export const mutations = {
	setEnv(state, env) {
		state.env = env;
	},
};

export const actions = {
	nuxtServerInit ({ commit }) {
		// eslint-disable-next-line no-undef
		commit('setEnv', Object.assign({}, process.env));
	},
};

export const state = () => ({
	env: null,
});
