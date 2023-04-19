import { defineStore } from "pinia";

export const useReservaStore = defineStore("reservas", {
  state: () => ({
    reservas:[
      {id:1, casa: 'Casa 25', data: '2023-01-01', dateCreated: '1681045116755', pay: true, authorized: false},
      {id:2, casa: 'Casa 05', data: '2023-02-01', dateCreated: '1681045116755', pay: true, authorized: false},
      {id:3, casa: 'Casa 03', data: '2023-03-01', dateCreated: '1681045116755', pay: false, authorized: false},
      {id:4, casa: 'Casa 02', data: '2023-04-01', dateCreated: '1681045116755', pay: false, authorized: false},
    ],

  }),
  getters: {
    readReservas(){
      return this.reservas
    }
  },
  actions: {
    addReservas(item){
      let reserva = {
        id: item.id,
        casa: item.casa,
        data: item.data,
        dateCreated: item.dateCreated,
        pay: item.pay,
        obs: item.obs
      }
      this.reservas.push(reserva)
    }
  },
});
