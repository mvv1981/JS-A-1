module.exports = Collection;

/**
 * Барабаш Максим Сергеевич
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.collection = [];
    return this
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.collection
};
// другие методы
Collection.prototype.append = function(element) {
    if(element.collection instanceof Array) {
        this.collection = this.collection.concat(element.collection);
    }
    else {
        this.collection.push(element);
    }
    return this
};
Collection.prototype.count = function() {
    return this.collection.length
};
Collection.prototype.at = function(value) {
    let position = value - 1;
    return this.collection[position]
};
Collection.prototype.removeAt = function(value) {
    let position = value - 1;
    if ((this.collection[position] !== undefined)&&(position > 0)) {
        this.collection.splice((position), 1);
        return true
    }
    else
        return false
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
    let collection = new Collection();
    collection.collection = arr;
    return collection
};
