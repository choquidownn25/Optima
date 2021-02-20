$(function () {

    var dataManager = ej.DataManager({
        url: "/api/User/GetByApplicationUserId/@Model.Id",
        adaptor: new ej.WebApiAdaptor(),
        offline: true
    });
  
    dataManager.ready.done(function (e) {
        $("#Grid").ejGrid({
            dataSource: ej.DataManager({
                json: e.result,
                adaptor: new ej.remoteSaveAdaptor(),
                insertUrl: "/api/Pais/Pago",
                updateUrl: "/api/Pais/Pago",
                removeUrl: "/api/Pais/Pago",
            }),
            toolbarSettings: {
                showToolbar: true,
                toolbarItems: ["add", "edit", "delete", "update", "cancel", "search", "printGrid"]
            },
            editSettings: {
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
                showDeleteConfirmDialog: true,
                editMode: "dialog"
            },
            isResponsive: true,
            enableResponsiveRow: true,
            allowSorting: true,
            allowSearching: true,
            allowFiltering: true,
            filterSettings: {
                filterType: "excel",
                maxFilterChoices: 100,
                enableCaseSensitivity: false
            },
            allowPaging: true,
            pageSettings: { pageSize: 10, printMode: ej.Grid.PrintMode.CurrentPage },
            columns: [
                { field: "IdPais", headerText: 'IdPais', isPrimaryKey: true, isIdentity: true, visible: false },
                { field: "Nombre", headerText: 'Nombre', validationRules: { required: true } },
                { field: "CodPais", headerText: 'Codigo del País', validationRules: { required: true } },
                { field: "CodTelefonico", headerText: 'Codigo Telefonico', },
                { field: "IdMoneda", headerText: 'Moneda', foreignKeyField: "IdMoneda", foreignKeyValue: "Nombre", dataSource: dataManagerVendorType },

            ],
            actionComplete: "complete",
        });
    });


});

function complete(args) {
    if (args.requestType === 'beginedit') {
        $("#" + this._id + "_dialogEdit").ejDialog({ title: "Edit Record" });
    }
}