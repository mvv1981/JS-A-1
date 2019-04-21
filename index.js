module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this._array = [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this._array.slice();
};

Collection.prototype.at = function(index){
    if (index > this._array.length || index < 1){
        return null;
    }
    return this._array[index - 1];
};

Collection.prototype.append = function(obj){
    if (obj instanceof Collection){
        this._array = this._array.concat(obj.values())
    }
    else this._array = this._array.concat(obj);
};

Collection.prototype.removeAt = function(index){
    if (index > this._array.length || index < 1){
        return false;
    }
    else this._array.splice(index - 1, 1);
    return true;
};

Collection.prototype.count = function(){
    return this._array.length;
};
// другие методы


/*
 * Создание коллекции из массива значений
 */
Collection.from = function (items) {
    var collect = new Collection();
    collect.append(items);
    return collect;    
};
