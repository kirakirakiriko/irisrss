const PouchDB = require('pouchdb');
const { map, mapObjIndexed } = require('ramda');


const replicationTarget = `http://${process.env.COUCH_HOST}:${process.env.COUCH_PORT}`;
const replicationOptions = { live: true };

const init = dbName => new PouchDB(`${replicationTarget}/${dbName}`);
const sync = (db, name) => db.sync(`${replicationTarget}/${name}`, replicationOptions);

const db = map(init, { entries: 'entries', feeds: 'feeds' });
const syncs = mapObjIndexed(sync, db);

module.exports = db;