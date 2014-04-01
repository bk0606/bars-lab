/**
 * Created by Kell on 01.04.14.
 */
Ext.define('Lib.model.Authors', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'first_name',
    type: 'string'
  }, {
    name: 'middle_name',
    type: 'string'
  }, {
      name: 'last_name',
      type: 'string'
  }],
  proxy: {
    type: 'rest',
    url: '/library/authors/',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});