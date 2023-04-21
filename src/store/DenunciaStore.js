import { defineStore } from "pinia";

export const useDenunciaStore = defineStore("denuncias", {
  state: () => ({
    denuncias:[
      {id:1, idUser: 'Casa 25', title:'Denuncia 01', text:'texto da denuncia',  dateCreated:'1682079329088', answer: false, textAnswer: '', feedBack: ''},
      {id:2, idUser: 'Casa 25', title:'Denuncia 02', text:'texto da denuncia',  dateCreated:'1682079329088', answer: false, textAnswer: '', feedBack: ''},
      {id:3, idUser: 'Casa 25', title:'Denuncia 03', text:'texto da denuncia',  dateCreated:'1682079329088', answer: false, textAnswer: '', feedBack: ''},
      {id:4, idUser: 'Casa 25', title:'Denuncia 04', text:'texto da denuncia',  dateCreated:'1682079329088', answer: true, textAnswer: '', feedBack: ''},
    ],
    denuncia: {}
  }),
  getters: {
    readDenuncias(){
      return this.denuncias
    },
    readDenunciaSearch(){
      return this.denuncia
    }
  },
  actions: {
    addDenuncias(item){
      let denuncia = {
        id: 5,
        idUser: item.idUser,
        title: item.title,
        text: item.text,
        dateCreated: item.dateCreated,
        answer:false
      }
      this.denuncias.push(denuncia)
    },
    searchDenuncia(item){
      this.denuncia = this.denuncias.filter(x => x.id == item)[0]
    }
  },
});
