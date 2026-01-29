sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], (Controller,MessageToast) => {
   "use strict";

   var PageController =  Controller.extend("ui5app.controller.App", {
      onProfile: function(evt){
         MessageToast.show('Welcome to Rakshit Profile')
      },
      press() {
         // show a native JavaScript alert
           MessageToast.show('Sales fulfilement app')
      }
   });
   return PageController
});