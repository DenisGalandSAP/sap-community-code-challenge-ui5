sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('ui5.challenge.controller.Main', {
    openDetailPage: function () {
      this.getOwnerComponent().getRouter().navTo('RouteDetail');
    }
  });
});
