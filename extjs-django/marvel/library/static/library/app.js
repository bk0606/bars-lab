Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
  controllers: ['Genre'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype: 'authorgrid'
      }]
    });
  }
});