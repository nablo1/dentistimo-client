// TODO: Import api

const state = {
  clinics: [ // Placeholders for dental clinic cards
     {
      id: 1,
      name: "First Dental Clinic",
      location: "Gothenburg"
     },
     {
      id: 2,
      name: "Second Dental Clinic",
      location: "Gothenburg"
     },
     {
      id: 3,
      name: "Third Dental Clinic",
      location:"Gothenburg"
     },
     {
      id: 4,
      name: "Fourth Dental Clinic",
      location: "Gothenburg"
     },
     {
      id: 5,
      name: "Fifth Dental Clinic",
      location: "Gothenburg"
     },
     {
      id: 6,
      name: "Sixth Dental Clinic",
      location: "Gothenburg"
     }

  ]
}

const getters = {
  allClinics: (state) => state.clinics
}

const actions = {
  // TODO: Create an action for sending an API request to GET dental clinic data
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
