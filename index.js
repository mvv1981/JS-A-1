module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
  this._count = 0;
}

// Методы коллекции
Collection.prototype.values = function () {
  let arr = [];

  for (let key in this) {
    if (typeof this[key] != 'function' && key[0] != '_') {
      arr.push(this[key]);
    }
  }

  return arr;
};

Collection.prototype.at = function (id) {
  if (typeof id == 'number' && this[id] !== undefined) {
    return this[id];
  } else {
    return null;
  }
}

Collection.prototype.append = function (el) {
  let keys = Object.keys(this).filter(e => e[0] != '_')
  .map(e => +e);
  let start = Math.max.apply(
      null,
      keys.length ? keys : [0]
  ) + 1;

  if (el instanceof Collection) {
    let elValues = el.values();

    for (let i = 0; i < elValues.length; i++) {
      this[start + i] = elValues[i];
      this._count++;
    }
  } else {
    this[start] = el;
    this._count++;
  }
}

Collection.prototype.removeAt = function (id) {
  if (typeof id != 'number' || this[id] === undefined) {
    return false;
  } else {
    delete this[id];
    this._count--;
    return true;
  }

  console.log(this);
}
// другие методы
Collection.prototype.count = function() {
  return this._count;
}

/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
  let arr = arguments[0] || [];
  let collection = new Collection();

  for (let i = 0; i < arr.length; i++) {
    collection[i + 1] = arr[i];
    collection._count++;
  }

  return collection;
};
