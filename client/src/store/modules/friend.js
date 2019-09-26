import * as types from '../mutation_types'

// state
const state = {
  nickname: '',
  socketId: '',
  userId: '',
  avatar: '',
  loginStatus: false
}

const getters = {
  friendInfo: (state) => {
    return {
      nickname: state.nickname,
      socketId: state.socketId,
      userId: state.userId,
      avatar: state.avatar,
      loginStatus: state.loginStatus
    }
  }
}

// mutations
const mutations = {
  [types.SAVE_FRIEND_INFO] (state, data) {
    state.nickname = data.nickname
    state.socketId = data.socketId
    state.userId = data._id
    state.avatar = data.avatar
    state.loginStatus = state.loginStatus
  }
}

export default {
  state,
  mutations,
  getters
}