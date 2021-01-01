import axios from 'axios'

const state = {
  dentalClinics: [],
}

const getters = {
  allDentalClinics: state => state.dentalClinics,
}

const actions = {
  getAllClinics() {
    axios
      .get('http://localhost:3000/api/dentalClinics')
      .then(response => {
        this.dentalClinics = response.data
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.dentalClinics = []
        // TODO: display error message
      })
  },
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
