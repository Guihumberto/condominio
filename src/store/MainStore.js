import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    areaList:[
      {id:1, icon: "mdi-account-tie-woman", title: "Administação", path:"/admin/administracao"},
      {id:2, icon: "mdi-account-tie-hat", title: "Portaria", path:"/guarita"},
      {id:3, icon: "mdi-human-male-female-child", title: "Morador", path:"/"}
    ],
    areaSelected: 3,
    listMenu: [
      {id: 1, title: "Home", subtitle:"Voltar a tela inicial", info:"Mostar todas as opções e fazer login", icon: "mdi-home", color:"success", show:false, path: 'home'},
      {id: 2, title: "Avisos", subtitle:"Informações importantes", info:"Consulte aqui informações importantes sobre o condomínio e mantenha-se atualizado", icon: "mdi-bullhorn-outline", color:"success", show:true, path: 'avisos'},
      {id: 3, title: "Reservas", subtitle:"Reserva da área de lazer", info:"Consulte aqui infomrações importantes sobre o condomínio e mantenha-se informado", icon: "mdi-pool", color:"blue", show:true, path: 'reservas'},
      {id: 4, title: "Visitantes", subtitle:"Cadastre suas visitas", info:"Consulte aqui infomrações importantes sobre o condomínio e mantenha-se informado", icon: "mdi-account-group", color:"success", show:true, path: 'visitantes'},
      {id: 5, title: "Entradas", subtitle:"Informar na portaria", info:"Informe na portaria que está aguardando a entrega lanches, medicamentos, taxis ou transporte de aplicativos (uber/99)", icon: "mdi-food", color:"red", show:true, path: 'aplicativos'},
      {id: 6, title: "Boletos", subtitle:"Código de barra", info:"Consulte aqui infomrações importantes sobre o condomínio e mantenha-se informado", icon: "mdi-barcode", color:"black", show:true, path: 'boleto'},
      {id: 7, title: "Portaria", subtitle:"Escala e contato", info:"Consulte aqui infomrações importantes sobre o condomínio e mantenha-se informado", icon: "mdi-shield-account-outline", color:"grey", show:true, path: 'portaria'},
      {id: 8, title: "Denúncias", subtitle:"Comunique irregularidades", info:"Consulte aqui infomrações importantes sobre o condomínio e mantenha-se informado", icon: "mdi-account-voice", color:"error", show:true, path: 'denuncias'},
      {id: 9, title: "Encomenda", subtitle:"Informações Importantes", info:"Consulte aqui se existe alguma encomenda da sua casa recebida na portaria", icon: "mdi-package-variant-closed-check", color:"warning", show:true, path: 'entregas'},
      {id: 10, title: "Mudança", subtitle:"Programar mudanças", info:"Consulte aqui se existe alguma encomenda da sua casa recebida na portaria", icon: "mdi-train-car", color:"primary", show:true, path: 'mudanca'},
      {id: 11, title: "Síndico", subtitle:"Normas e outros", info:"Consulte aqui as normas do condomínio, bem como as regras e contato dos síndicos e administradores do condomínio", icon: "mdi-badge-account-alert", color:"primary", show:true, path: 'sindico'},
      {id: 12, title: "Transparência", subtitle:"Prestação de Contas", info:"Área de Transparência dos débitos e créditos do condomínio", icon: "mdi-notebook-outline", color:"grey", show:true, path: 'prestacao-de-contas'},
    ],
  }),
  getters: {
    readListMenu(){
      return this.listMenu
    },
    readListArea(){
      return this.areaList
    },
    readAreaSelect(){
      return this.areaSelected
    }
  },
  actions: {
    selectArea(item){
      this.areaSelected = item.id
    }
  },
});
