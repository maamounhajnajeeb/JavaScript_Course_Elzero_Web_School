let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};


let targetObject = {
    prop1: 1,
    prop3: 3,
}

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop5 = 500;

console.log(finalObject);

let newObject = Object.assign({}, obj1, {prop6: 6, prop7: 7});
console.log(newObject);
