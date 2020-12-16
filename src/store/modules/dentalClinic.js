import axios from 'axios';

const state = {
  dentalClinics: []
}

const getters = {
  allDentalClinics: (state) => state.dentalClinics
}

const actions = {
  async getAllClinics({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/api/dentalClinics'
    );
    commit('setClinics', response.data);
    console.log(response.data)
  }
}

const mutations = {
  // TODO: Add dental clinic data to the state
}

export default {
  state,
  getters,
  mutations,
  actions,
}
