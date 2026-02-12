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
                
                let self = this;
                
                // Set models first
                this.getView().setModel(oModel, "materialsModel");
                this.getView().setModel(oUIModel, "uiModel");
                
                // Attach event handlers before loading data
                oModel.attachRequestCompleted(function() {
                    console.log("Materials loaded successfully");
                    oUIModel.setProperty("/isLoading", false);
                    oUIModel.refresh(true);
                });
                
                oModel.attachRequestFailed(function(oEvent) {
                    console.error("Error loading materials", oEvent);
                    oUIModel.setProperty("/isLoading", false);
                    oUIModel.refresh(true);
                });
               
                console.log("Starting to load materials, isLoading:", oUIModel.getProperty("/isLoading"));
                oModel.loadData("https://supapp-3htg.onrender.com/api/v1/materials/getMaterials");

                console.log(this.getView().setModel(oModel, "materialsModel"));
                

            },
            onNavButtonPressed: function () {
                this.getOwnerComponent().getRouter().navTo("StartPage");
            }
        })
    });