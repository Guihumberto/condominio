import { defineStore } from "pinia";

export const useUserStore = defineStore("users", {
  state: () => ({
    users:[
      {id:1, nome: 'Joao Fulano Admin', email: 'exemple@exemple.com', dateCreated: '1681045116755', nivel: 1, idCasa: 1},
      {id:2, nome: 'Antonio Fulano Admin', email: 'exemple@exemple.com', dateCreated: '1681045116755', nivel: 1, idCasa: 2},
      {id:3, nome: 'Jose Fulano Porteiro', email: 'exemple@exemple.com', dateCreated: '1681045116755', nivel: 2, idCasa: 0},
      {id:4, nome: 'Humberto Joao Morador', email: 'exemple@exemple.com', dateCreated: '1681045116755', nivel: 3, idCasa: 5},
    ],
    casas:[
      {id: 1, casa: 1, rua: 1},
      {id: 2, casa: 1, rua: 1},
      {id: 3, casa: 1, rua: 1},
      {id: 4, casa: 1, rua: 1},
      {id: 5, casa: 1, rua: 1},
      {id: 6, casa: 1, rua: 1},
      {id: 7, casa: 1, rua: 2},
      {id: 8, casa: 1, rua: 2},
      {id: 9, casa: 1, rua: 2},
      {id: 10, casa: 1, rua:21},
      {id: 11, casa: 1, rua: 21},
      {id: 12, casa: 1, rua: 2},
      {id: 13, casa: 1, rua: 1},
      {id: 14, casa: 1, rua: 1},
      {id: 15, casa: 1, rua: 31},
      {id: 16, casa: 1, rua: 3},
      {id: 17, casa: 1, rua: 3},
      {id: 18, casa: 1, rua: 3},
      {id: 19, casa: 1, rua: 3},
      {id: 20, casa: 1, rua: 3},
      {id: 21, casa: 1, rua: 4},
      {id: 22, casa: 1, rua: 4},
      {id: 23, casa: 1, rua: 4},
      {id: 24, casa: 1, rua: 4},
      {id: 25, casa: 1, rua: 4},
      {id: 26, casa: 1, rua: 5},
      {id: 27, casa: 1, rua: 5},
      {id: 28, casa: 1, rua: 5},
      {id: 29, casa: 1, rua: 6},
      {id: 30, casa: 1, rua: 6},
    ]

  }),
  getters: {
    readUsers(){
      let usersList = this.users
      let casasList = this.readCasas

      usersList.forEach(x => {
        casasList.forEach(y => {
          if(x.casa == y.id){
            x.rua = y.rua
          }
        })
      })

      return usersList
    },
    readCasas(){
      return this.casas
    }
  },
  actions: {

  },
});
