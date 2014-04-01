/**
 * Created by Kell on 01.04.14.
 */
Ext.define('Lib.store.Authors', {
  extend: 'Ext.data.Store',
  requires: ['Lib.model.Authors'],
  model: 'Lib.model.Authors'
});