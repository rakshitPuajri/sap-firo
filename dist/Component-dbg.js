sap.ui.define([
   "sap/ui/core/UIComponent"
], (UIComponent,JSONModel) => {
   "use strict";

   return UIComponent.extend("ui5app.Component", {

     metadata : {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
          manifest :"json"
      },
      init : function() {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
          // this component should automatically initialize the router
            this.getRouter().initialize();
          
      }
   });
});
