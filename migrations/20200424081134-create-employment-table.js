'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('employment', {
    id: {type: 'int', primaryKey: true},
    name: 'string',
    location: 'string',
    content: 'text'
  });
};

exports.down = function(db) {
  return db.dropTable('employment');
};

exports._meta = {
  "version": 1
};
