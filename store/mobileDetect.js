const state = () => {
  return {
    mobile: null,
    phone: null,
    tablet: null,
    os: null,
    userAgent: null,
    mq: null,
  }
}
const getters = {
  isMobile(state) {
    return state.mobile !== null
  },
  isPhone(state) {
    return state.phone !== null
  },
  isTablet(state) {
    return state.tablet !== null
  },
  mq(state) {
    return state.mq
  },
  isUnderBulmaNavLimit(state) {
    return (
      state.mq === 'mobile' ||
      state.mq === 'tablet' ||
      state.mq === 'bulmaNavLimit'
    )
  },
}
const actions = {}
const mutations = {
  register(state, payload) {
    for (let key in state) {
      state[key] = payload[key] || null
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
