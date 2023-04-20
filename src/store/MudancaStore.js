import { defineStore } from "pinia";

export const useMudancaStore = defineStore("mudanca", {
  state: () => ({
    solicitacoesEntrada:[
      {id:1, casa: 'Casa 25', name: 'Joao', cpf: 11122233344, data: '2023-01-01', dateCreated: '1681045116755', authorized: false},
      {id:2, casa: 'Casa 05', name: 'Maria', cpf: 11122233344455, data: '2023-02-01', dateCreated: '1681045116755', authorized: false},
      {id:3, casa: 'Casa 03', name: 'Jose', cpf: 11122233344455, data: '2023-03-01', dateCreated: '1681045116755', authorized: false},
      {id:4, casa: 'Casa 02', name: 'Ana', cpf: 11122233344455, data: '2023-04-01', dateCreated: '1681045116755', authorized: false},
    ],
    solicitacoesSaida:[
      {id:1, idUser: 'Casa 25', data: '2023-01-01', dateCreated: '1681045116755', authorized: false},
      {id:2, idUser: 'Casa 05', data: '2023-02-01', dateCreated: '1681045116755', authorized: false},
      {id:3, idUser: 'Casa 03', data: '2023-03-01', dateCreated: '1681045116755', authorized: false},
      {id:4, idUser: 'Casa 02', data: '2023-04-01', dateCreated: '1681045116755', authorized: false},
    ],
    searchSolicitacao:[]
  }),
  getters: {
    readSolicitacoesEntrada(){
      return this.solicitacoesEntrada
    },
    readSolicitacoesSaida(){
      return this.solicitacoesSaida
    },
    readSearchSolicitacao(){
      return this.searchSolicitacao
    }
  },
  actions: {
    addSolicitacoes(item){
      let solicitacao = {
        id: 5,
        data: item.data,
        dateCreated: item.dateCreate,
        authorized: false,
        obs: item.obs
      }
      if(item.type) {
        solicitacao.idUser = item.idUser,
        this.solicitacoesEntrada.push(solicitacao)
      } else {3
        solicitacao.name = item.name
        solicitacao.cpf = item.cpf
        this.solicitacoesSaida.push(solicitacao)
      }
    },
    searchUserEntrada(cpf){
      this.searchSolicitacao = []
      this.searchSolicitacao = this.readSolicitacoesEntrada.filter( x => x.cpf == cpf)
      if(this.searchSolicitacao.length == 0){
        const vazio = {
          id: 999999, casa: 'vazio', name: 'vazio', cpf: 11122233344, data: '2023-01-01', dateCreated: '1681045116755', authorized: false
        }
        this.searchSolicitacao.push(vazio)
      }
    }
  },
});
