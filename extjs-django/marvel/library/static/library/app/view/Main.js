Ext.define('Lib.view.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.grid.Panel',
    'Ext.tab.Panel',
    'Ext.button.Button',
    'Lib.view.NavigationTree'
  ],
  alias: 'widget.mainview',
  layout: {
    type: 'border',
    align: 'stretch'
  },
  items: [{
    xtype: 'navtree',
    region: 'west',
    width: 300
  }, {
    xtype: 'tabpanel',
    region: 'center',
    items: [{
      title: 'Жанры',
      xtype: 'grid',
      itemId: 'genres',
      store: Ext.StoreManager.lookup('Genre'),
      columns: [{
        text: 'Название',
        dataIndex: 'title',
        flex: 1
      }],
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          xtype: 'button',
          action: 'add',
          text: 'Добавить'
        }]
      }]
    }, {
      title: 'Авторы',
      xtype: 'grid',
      itemId: 'authors',
      store: Ext.StoreManager.lookup('Author'),
      columns: [
        {
          text: 'Имя',
          dataIndex: 'first_name',
          flex: 1
        },
        {
          text: 'Фамилия',
          dataIndex: 'middle_name',
          flex: 1
        },
        {
          text: 'Отчество',
          dataIndex: 'last_name',
          flex: 1
        }
      ],
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          xtype: 'button',
          action: 'add',
          text: 'Добавить'
        }]
      }]
    }]
  }]
});