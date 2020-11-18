// TODO: Import api

const state = {
  clinicSignedIn: false,
  dashboardView: null,
}

const getters = {
  clinicSignedIn: state => {
    return state.clinicSignedIn
  },
  dashboardView: state => {
    return state.dashboardView
  },
}

const mutations = {
  SET_CLINICSIGNEDIN: (state, bool /*, dentalClinic*/) => {
    state.clinicSignedIn = bool /*dentalClinic*/
  },
  SET_DASHBOARDVIEW: (state, viewContent) => {
    state.dashboardView = viewContent
  },
}

const actions = {
  setSignedIn: ({ commit, state }, bool) => {
    commit('SET_CLINICSIGNEDIN', bool)
    return state.clinicSignedIn
  },
  setDashboardview: ({ commit, state }, viewContent) => {
    commit('SET_DASHBOARDVIEW', viewContent)
    return state.dashboardView
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
