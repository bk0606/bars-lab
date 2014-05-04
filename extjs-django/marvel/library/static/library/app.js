Ext.application({
  name: 'Lib',
  appFolder: '/static/library/app',
<<<<<<< HEAD
  controllers: ['Genre'],
=======
  controllers: ['Main', 'Genre'],
  views: ['Main'],
  models: ['Genre'],
>>>>>>> upstream/master

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
<<<<<<< HEAD
      items: [{
        xtype: 'authorgrid'
      }]
=======
      items: {
        xtype: 'mainview'
      }
>>>>>>> upstream/master
    });
  }
});