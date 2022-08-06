import { getTeste } from '../../services/api/teste1';
export const actions = {
  async fetchList(state) {
    try {
      //const dataUsers = await listUsersByStatus(status);
      /* eslint-disable no-console */
      /*let list = state.getters.getList;
      list.push({...payload, id: Number.parseInt(Math.random()*1000)})*/
      const list = await getTeste()
      state.commit('setList', list.data);
    } catch (error) {
      state.dispatch(
        'modal/showModal',
        {
          title: 'Erro ao processar a requisição!',
          message: 'Se o problema persistir, favor contatar o suporte.',
          buttonText: 'VOLTAR',
        },
        {
          root: true,
        }
      );
    }
  },

  async update(state, payload){
    let list = state.getters.getList;
    list = list.filter((curso)=> curso.id !== payload.id);
    list.push(payload);
    state.commit('setList', list);
  }
};
