import { defineStore } from "pinia";

export const useReadStore = defineStore("read", {
  state: () => ({
    listRead: [5],
    listComunicados : [
      {id: 1, title: "Título do Comunicado 1", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/03/2023", show:true, programado:false, userCreate: 1},
      {id: 2, title: "Título do Comunicado 2", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/02/2023", show:true, programado:false, userCreate: 1},
      {id: 3, title: "Título do Comunicado 3", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "10/01/2023", show:true, programado:false, userCreate: 1},
      {id: 4, title: "Título do Comunicado 4", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "11/01/2023", show:true, programado:false, userCreate: 2},
      {id: 5, title: "Título do Comunicado 5", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "31/01/2023", show:true, programado:false, userCreate: 1},
      {id: 6, title: "Título do Comunicado 6", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/05/2023", show:true, programado:false, userCreate: 2},
      {id: 7, title: "Título do Comunicado 7", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/06/2023", show:true, programado:false, userCreate: 1},
      {id: 8, title: "Título do Comunicado 8", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/07/2023", show:true, programado:false, userCreate: 1},
      {id: 9, title: "Título do Comunicado 9", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/08/2023", show:false, programado:true, userCreate: 1},
      {id: 10, title: "Título do Comunicado 10", text: "Nihil, mollitiaqui mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo, maiores!", dateCreate: "01/09/2023", show:false, programado:false, userCreate: 2},
    ]
  }),
  getters: {
    readAllAvisos(){
      return this.listComunicados
    },
    readListRead(){
      return this.listRead
    },
    readListComunicados(){
      return this.listComunicados.filter(x => x.show)
    },
    leftReadCount(){
      return this.readListComunicados.length - this.listRead.length
    }
  },
  actions: {
    addReadList(item){
      this.listRead.push(item)
    },
    pusblish(item){
      let aviso = this.listComunicados.filter( x => x.id == item.id)
      aviso[0].show = true
    }
  },
});
