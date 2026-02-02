sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";

   return Controller.extend("ui5app.controller.Products", {
      onInit: function () {
         this.onRead();
      },
      onRead: function () {
         let oModel = this.getOwnerComponent().getModel();
         oModel.read("/Product", {
            sucess: function (odata) {
                     console.log(odata);
               var jModel = new sap.ui.model.json.JSONModel(odata);
               this.getView().byId("productsTable").setModel(jModel);
            },
            error: function (oError) {
               console.log(oError);
            }
         })
      }



   });
});
