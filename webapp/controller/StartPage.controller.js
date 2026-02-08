sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/UIComponent"

], (Controller, MessageToast, UIComponent) => {
   "use strict";

   return Controller.extend("ui5app.controller.StartPage", {
      press() {
         // show a native JavaScript alert
         MessageToast.show('Sales fulfilement app')
      },
      onProductApp: function () {
         MessageToast.show('pressed on the products');
         this.getRouter().navTo("ProductList");

      },
      onMaterialpp: function(){
         this.getRouter().navTo("MaterialList")
      },
      onRakshitProfile: function () {
         MessageToast.show('Welcome to My Profile');
         this.getRouter().navTo("RakshitPujari")
      },
      onRakshitLinkedin: function () {
         window.open(
            "https://www.linkedin.com/in/rakshit-pujari-5b4109151/",
            "_blank"
         );
      },
      onBlog: function () {
         window.open(
            "https://rakshitpujari-blogs.vercel.app/",
            "_blank"
         );
      },
      ongithub : function(){
         window.open("https://github.com/rakshitPuajri",
            "_blank"
         )
      },
      getRouter: function () {
         return this.getOwnerComponent().getRouter();
      }
   });

});