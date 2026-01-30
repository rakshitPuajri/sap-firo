sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/UIComponent"
   
], (Controller,MessageToast,UIComponent) => {
   "use strict";

  return Controller.extend("ui5app.controller.StartPage", {
      onProfile: function(evt){
         MessageToast.show('Welcome to Rakshit Profile')
      },
      press() {
         // show a native JavaScript alert
           MessageToast.show('Sales fulfilement app')
      },
      onInovicesApp : function(){
         MessageToast.show('pressed on the invoice');
         console.log(  this.getRouter().navTo("InvoiceList"));

         this.getRouter().navTo("InvoiceList");

      },
      getRouter: function () {
			return this.getOwnerComponent().getRouter();
		}
   });
    
});