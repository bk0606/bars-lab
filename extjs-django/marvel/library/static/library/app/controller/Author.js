/** Created by Albert. */
Ext.define('Lib.controller.Author', {
  extend: 'Ext.app.Controller',
  models: ['Author'],
  stores: ['Author'],
  views: ['author.EditWindow', 'Main'],
  refs: [{
    selector: 'mainview #authors',
    ref: 'authorsGrid'
  }],

  init: function () {
    var me = this;

    me.control({
      '#authors button[action=add]': {
        click: me.onAddAuthorBtnClick
      },
      'authoreditwin button[action=save]': {
        click: me.onSaveAuthorBtnClick
      }
    });

    me.callParent(arguments);
  },
  onAddAuthorBtnClick: function (btn) {
    Ext.create('Lib.view.author.EditWindow').show();
  },

  onSaveAuthorBtnClick: function (btn) {
    var me = this,
      form = btn.up('form'),
      record;
    if (form.isValid()) {
      record = Ext.create('Lib.model.Author', form.getValues());
      record.save({
        callback: function (records, operation, success) {
          if (success) {
            me.getAuthorsGrid().getStore().load();
            btn.up('window').close();
          } else {
            Ext.MessageBox.alert('Ошибка!', 'Произошла ошибка при сохранении.');
          }
        }
      });
    }
  }
});