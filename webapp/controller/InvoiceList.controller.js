sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/UIComponent"
   
], (Controller,MessageToast,UIComponent) => {
   "use strict";

  return Controller.extend("ui5app.controller.InvoiceList", {
      
      getRouter: function () {
			return this.getOwnerComponent().getRouter();
		}
   });
    
});