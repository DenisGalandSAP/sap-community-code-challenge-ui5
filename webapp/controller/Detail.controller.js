sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict';

  return Controller.extend('ui5.challenge.controller.Detail', {
    onOpenDialog: function () {
      new sap.m.Dialog({ id: 'myDialog' }).open();
    }
  });
});
