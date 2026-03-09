sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, JSONModel) {
        "use strict"
        return Controller.extend("ui5app.controller.MaterialDetail", {
            onInit: function () {
                let oDetailModel = new JSONModel();
                let oUIModel = new JSONModel({
                    isLoading: true
                });

                this.getView().setModel(oDetailModel, "detailModel");
                this.getView().setModel(oUIModel, "uiModel");

                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("MaterialDetail").attachPatternMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function (oEvent) {
                let sMaterialNumber = oEvent.getParameter("arguments").materialNumber;
                this._loadMaterialDetail(sMaterialNumber);
            },

            _loadMaterialDetail: function (sMaterialNumber) {
                let oDetailModel = this.getView().getModel("detailModel");
                let oUIModel = this.getView().getModel("uiModel");

                // Load all materials
                let oModel = new JSONModel();
                oModel.attachRequestCompleted(() => {
                    let aMaterials = oModel.getProperty("/materials");
                    let oMaterial = aMaterials.find(m => m.material_number === sMaterialNumber);
                    
                    if (oMaterial) {
                        oDetailModel.setData(oMaterial);
                    } else {
                        console.error("Material not found:", sMaterialNumber);
                    }
                    oUIModel.setProperty("/isLoading", false);
                    oUIModel.refresh(true);
                });

                oModel.attachRequestFailed((oEvent) => {
                    console.error("Error loading materials", oEvent);
                    oUIModel.setProperty("/isLoading", false);
                    oUIModel.refresh(true);
                });

                oModel.loadData("https://supapp-3htg.onrender.com/api/v1/materials/getMaterials");
            },

            onNavButtonPressed: function () {
                this.getOwnerComponent().getRouter().navTo("MaterialList");
            }
        })
    });
