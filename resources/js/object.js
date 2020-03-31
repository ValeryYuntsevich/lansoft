
const blockObj = document.getElementById('object');
const blockUniqueObj = document.getElementById('unique-object');

getObj();

function getObj() {
    const objArr = [
        { name: 'Max' }, 
        { age: 5, name: 'Vlad', }, 
        { name: 'Vlad' },
        { name: 'Alex' }, 
        { name: 'Max', age: 20 }, 
        { age: 2 , name: 'Ivan' }
    ];
    
    let uniqueObjArr = uniqueBy('name', objArr);
    uniqueObjArr = showFullUniqObj(uniqueObjArr, 'age');
    blockObj.innerHTML = "Object =" + JSON.stringify(objArr);
    blockUniqueObj.innerHTML = "Unique object =" + JSON.stringify(uniqueObjArr);
}

function showFullUniqObj(object, field) {
    let obj = object;
    for (let i = 0; i < obj.length; i++) {
        if (field in obj[i]) {
            delete obj[i][field]
        }
    }
    return obj
}

function uniqueBy(field, arr) {
    return arr.reduce((acc, curr, i) => {
        let exists = acc.find(v => v[field] === curr[field]);
        return exists ? acc : acc.concat(curr);
    }, [])
}