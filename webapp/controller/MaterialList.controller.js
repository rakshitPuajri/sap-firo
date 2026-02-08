sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, MessageToast, JSONModel) {
        "use strict"
        return Controller.extend("ui5app.controller.MaterialList", {
            onInit: function () {
                 var oModel = new sap.ui.model.json.JSONModel();
                // console.log(this.getOwnerComponent().getModel("MaterialModel"));
               
                 oModel.loadData("https://supapp-3htg.onrender.com/api/v1/materials/getMaterials");

                this.getView().setModel(oModel, "materialsModel");
                console.log(  this.getView().setModel(oModel, "materialsModel"));
                

            },
            onNavButtonPressed: function () {
                this.getOwnerComponent().getRouter().navTo("StartPage");
            }
        })
    });