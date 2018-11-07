/* global $  store */
'use strict';

const api = (function () {
  const search = function (path, query) {
    return $.ajax({
      type: 'GET',
      url: store.server + path,
      dataType: 'json',
      data: query
    });
  };
  const details = function (path) {
    return $.ajax({
      type: 'GET',
      dataType: 'json',
      url: store.server + path,
    });
  };
  const update = function (path, obj) {
    return $.ajax({
      type: 'PUT',
      url: store.server + path,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(obj)
    });
  };
  const create = function (path, obj) {
    return $.ajax({
      type: 'POST',
      url: store.server + path,
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify(obj)
    });
  };
  const remove = function (path) {
    return $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: store.server + path,
    });
  };
  return {
    create,
    search,
    details,
    update,
    remove
  };
}());