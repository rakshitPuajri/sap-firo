sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast,JSONModel) {
   "use strict";

   return Controller.extend("ui5app.controller.ProductList", {
      onInit: function () {
         console.log('started the prod list controller');
         
         var oModel = this.getView().getModel("ProductsModel");
         console.log(oModel.getData());
      },

      onNavButtonPressed: function () {
         MessageToast.show('navigate back to start page')
         this.getOwnerComponent().getRouter().navTo("StartPage")
      }
   });
});
