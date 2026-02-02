sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    ], function(Controller,MessageToast){
    " use strict"

  return  Controller.extend("ui5app.controller.RakshitPujari" ,{


    onInit: function(){
        this.oRakshitProfile = this.byId("timeline");
    },
     onNavButtonPressed : function(){
         MessageToast.show('navigate back to start page')
         this.getOwnerComponent().getRouter().navTo("StartPage")
      }


  })
});