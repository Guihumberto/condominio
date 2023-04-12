import { defineStore } from "pinia";

export const useVisitantesStore = defineStore("visitantes", {
  state: () => ({
    visitantes:[
      {id:1, name: 'Maria Silva', parentesco: 'tio', dateCreated: '1681045116755', recorrent: true, veiculo: [1], veiculos: []},
      {id:2, name: 'João Ribeiro', parentesco: 'pai', dateCreated: '1681045116755', recorrent: true, veiculo: [2], veiculos: []},
      {id:3, name: 'Ana Lúcia', parentesco: 'mãe', dateCreated: '1681045116755', recorrent: true, veiculo: [3, 4], veiculos: []},
      {id:4, name: 'Ana Priscila', parentesco: 'amiga', dateCreated: '1681045116755', recorrent: true, veiculo: [], veiculos: []}
    ],
    veiculos:[
      {id: 1, carro:"Fiesta/Ford", cor: "Vermelho", placa:"NHJ-7179", type: 1},
      {id: 2, carro:"fordKa/Ford", cor: "branco", placa:"NHJ-7179", type: 2},
      {id: 3, carro:"sigma/GM", cor: "cinza", placa:"NHJ-7179", type: 1},
      {id: 4, carro:"Corolla/Toyota", cor: "azul", placa:"NHJ-7179", type: 1},
    ]
  }),
  getters: {
    readVisitantes(){
      this.visitantes.forEach(x => {
        x.veiculo.forEach(v => {
          this.veiculos.forEach(y =>  {
            if(v == y.id){
              x.veiculos.push(y)
            }
          })
        })
      })

      return this.visitantes
    }
  },
  actions: {
    addEntradaList(item){
      this.visitantes.push(item)
    },
    addVeiculosList(item){
      this.veiculos.push(item)
    },
    updateActive(item){
      console.log(item, 'atualizar data');
    },
    isExist(id, item){
      let result = item.veiculo.find(x => x == id)
      return !result
    }
  },
});
