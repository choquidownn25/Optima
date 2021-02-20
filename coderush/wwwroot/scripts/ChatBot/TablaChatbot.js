$(function () {

    var dataManager = ej.DataManager({
        url: "/api/Pais",
        adaptor: new ej.WebApiAdaptor(),
        offline: true
    });

    var dataManagerVendorType = ej.DataManager({
        url: "/api/Chatbot",
        adaptor: new ej.WebApiAdaptor()
    });

    dataManager.ready.done(function (e) {
        $("#Grid").ejGrid({
            dataSource: ej.DataManager({
                json: e.result,
                adaptor: new ej.remoteSaveAdaptor(),
                insertUrl: "/api/Chatbot/Insert",
                updateUrl: "/api/Chatbot/Update",
                removeUrl: "/api/Chatbot/Remove",
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
                { field: "IdChtaBot", headerText: 'ChatBot', isPrimaryKey: true, isIdentity: true, visible: false },
                { field: "Activo", headerText: 'Activo', validationRules: { required: true } },
                { field: "Pregunta", headerText: 'Pregunta', validationRules: { required: true } },
                { field: "Respuesta", headerText: 'Respuesta', validationRules: { required: true } },
                { field: "OpcionSistema", headerText: 'OpcionSistema', validationRules: { required: true } },
            ],
            actionComplete: "complete",
        });
    });


});

function complete(args) {
    if (args.requestType == 'beginedit') {
        $("#" + this._id + "_dialogEdit").ejDialog({ title: "Edit Record" });
    }
}
