sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, MessageToast, JSONModel) {
        "use strict"
        return Controller.extend("ui5app.controller.MaterialList", {
            onInit: function () {
                let oModel = new sap.ui.model.json.JSONModel();
                let oUIModel = new sap.ui.model.json.JSONModel({
                    isLoading: true
                });
                
                // console.log(this.getOwnerComponent().getModel("MaterialModel"));
                
                let self = this;
                
                // Attach event handlers before loading data
                oModel.attachRequestCompleted(function() {
                    console.log("Materials loaded successfully");
                    oUIModel.setProperty("/isLoading", false);
                });
                
                oModel.attachRequestFailed(function(oEvent) {
                    console.error("Error loading materials", oEvent);
                    oUIModel.setProperty("/isLoading", false);
                });
               
                oModel.loadData("https://supapp-3htg.onrender.com/api/v1/materials/getMaterials");

                this.getView().setModel(oModel, "materialsModel");
                this.getView().setModel(oUIModel, "uiModel");
                console.log(this.getView().setModel(oModel, "materialsModel"));
                

            },
            onNavButtonPressed: function () {
                this.getOwnerComponent().getRouter().navTo("StartPage");
            }
        })
    });