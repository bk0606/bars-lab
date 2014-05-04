Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
  controllers: ['Main', 'Genre', 'Author'],
  views: ['Main'],
  models: ['Genre', 'Author'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: {
        xtype: 'mainview'
      }
    });
  }
});