import * as api from '../api'

export const loadAll = async ({commit}) => {
  const groups = await api.getGroups()
  commit('removeAll')
  commit('add', groups)
}
