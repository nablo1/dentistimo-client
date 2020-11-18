// TODO: Import api

const state = {
  clinicSignedIn: false,
}

const getters = {
  clinicSignedIn: state => {
    return state.clinicSignedIn
  },
}

const mutations = {
  SET_CLINICSIGNEDIN: (state, bool /*, dentalClinic*/) => {
    state.clinicSignedIn = bool /*dentalClinic*/
  },
}

const actions = {
  setSignedIn: ({ commit, state }, bool) => {
    commit('SET_CLINICSIGNEDIN', bool)
    return state.clinicSignedIn
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
