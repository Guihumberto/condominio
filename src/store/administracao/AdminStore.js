import { defineStore } from "pinia";

export const useAdminStore = defineStore("admin", {
  state: () => ({
    listMenu: [
      {id: 13, title: "Home", subtitle:"Voltar a tela inicial", info:"Mostar todas as opções e fazer login", icon: "mdi-home", color:"success", show:false, path: 'administracao'},
      {id: 14, title: "Criar Aviso", subtitle:"Escrever e publicar avisos", info:"Escreva e publique avisos para os moradores, ou escreva e guarde para posteriores publicações.", icon: "mdi-text-box-edit-outline", color:"grey", show:true, path: '/admin/avisos'},
      {id: 15, title: "Solicitações e denúncias", subtitle:"Análise de solicitações", info:"Analise pedidos de reserva, autorize mudanças e compartilhe informações com a portaria, responda a denúncias", icon: "mdi-order-bool-descending", color:"black", show:true, path: '/admin/mudancas'},
      {id: 16, title: "Prestação de Contas", subtitle:"Prestação de contas", info:"Informe as despesas e receitas do condomínio e compartilhe com os moradores para aba transparência", icon: "mdi-numeric", color:"red", show:true, path: '/admin/prestacao-de-contas'},
      {id: 17, title: "Configurações", subtitle:"Configurações", info:"Preencha informações dos colaboradores e gerencie a escala da portaria.", icon: "mdi-tools", color:"black", show:true, path: '/admin-configs'},

    ],
  }),
  getters: {
    readListMenu(){
      return this.listMenu
    }
  },
  actions: {

  },
});
