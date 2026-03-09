sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "sap/m/MessageBox"
    ], function (Controller, JSONModel, MessageToast, MessageBox) {
        "use strict"
        return Controller.extend("ui5app.controller.CreateMaterial", {
            onInit: function () {
                let oCreateModel = new JSONModel({
                    material_number: "",
                    material_name: "",
                    base_uom: "",
                    material_type: "",
                    description: "",
                    is_active: false,
                    uomList: [
                        { uom: "KG" },
                        { uom: "PC" },
                        { uom: "L" },
                        { uom: "M" },
                        { uom: "BOX" },
                        { uom: "PCS" }
                    ],
                    materialType_List: [
                        { materialType: "RAW" },
                        { materialType: "FINISHED" },
                        { materialType: "SEMI FINISHED" }
                    ]
                });

                this.getView().setModel(oCreateModel, "createModel");
            },

            onSaveMaterial: function () {
                let oCreateModel = this.getView().getModel("createModel");
                let oData = oCreateModel.getData();

                // Validation
                if (!oData.material_number || !oData.material_name || !oData.base_uom) {
                    MessageBox.error("Please fill in all required fields (Material Number, Name, and UOM)");
                    return;
                }

                // Show loading indicator
                this.getView().setBusy(true);

                // Prepare data for API
                let oMaterialData = {
                    material_number: oData.material_number,
                    material_name: oData.material_name,
                    base_uom: oData.base_uom,
                    material_type: oData.material_type || "",
                    description: oData.description || "",
                    is_active: oData.is_active || false
                };

                // Make API call to create material
                let sUrl = "https://supapp-3htg.onrender.com/api/v1/materials/createMaterial";
                
                let self = this;

                console.log("Sending material data:", oMaterialData);

                // Send POST request using jQuery
                sap.ui.thirdparty.jquery.ajax({
                    type: "POST",
                    url: sUrl,
                    data: JSON.stringify(oMaterialData),
                    contentType: "application/json",
                    dataType: "json",
                    timeout: 10000,
                    success: function(response) {
                        self.getView().setBusy(false);
                        console.log("Material created successfully:", response);
                        MessageToast.show("Material created successfully!");
                        setTimeout(function() {
                            self.getOwnerComponent().getRouter().navTo("MaterialList");
                        }, 1000);
                    },
                    error: function(xhr, status, error) {
                        self.getView().setBusy(false);
                        console.error("Error Status:", status);
                        console.error("Error Details:", error);
                        console.error("Response:", xhr.responseText);
                        console.error("Status Code:", xhr.status);
                        
                        let errorMessage = "Failed to create material";
                        if (xhr.responseJSON && xhr.responseJSON.message) {
                            errorMessage = xhr.responseJSON.message;
                        } else if (xhr.responseText) {
                            errorMessage = xhr.responseText;
                        }
                        
                        MessageBox.error(errorMessage);
                    }
                });
            },

            onCancel: function () {
                this.getOwnerComponent().getRouter().navTo("MaterialList");
            },

            onNavButtonPressed: function () {
                this.getOwnerComponent().getRouter().navTo("MaterialList");
            }
        })
    });
