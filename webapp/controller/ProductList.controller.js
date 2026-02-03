sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";

   return Controller.extend("ui5app.controller.ProductList", {
      onInit: function () {

         var oModel = this.getOwnerComponent().getModel("ProductsModel");
         console.log(this.getOwnerComponent().getModel("ProductsModel"));


      },

      onNavButtonPressed: function () {
         MessageToast.show('navigate back to start page')
         this.getOwnerComponent().getRouter().navTo("StartPage")
      },
      onFilterProducts: function (oEvent) {
         const sQuery = oEvent.getParameter("newValue");
         const oTable = this.byId("productsTable");
         const oBinding = oTable.getBinding("items");

         const aFilters = [];

         if (sQuery) {
            aFilters.push(
               new sap.ui.model.Filter(
                  "ProductName",
                  sap.ui.model.FilterOperator.Contains,
                  sQuery
               )
            );
           
         }
         oBinding.filter(aFilters);
      }


   });
});
