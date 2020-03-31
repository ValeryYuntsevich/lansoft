
let blockPerson = document.getElementById('person');

const objects = [
    { name: 'Alex1', age: 10 },
    { name: 'Alex2', age: 15 },
    { name: 'Alex5', age: 32 },
    { name: 'Alex8', age: 60 },
    { name: 'Alex7', age: 45 },
    { name: 'Alex9', age: 28 }
];
const intervals = [20, 30, 40, 50];
const result = [];
const peopleWords = ['человек', 'человека', 'человек'];
const intervalsLength = intervals.length;

const person = function (number, arrString) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
        return '';
    } else {
        if (parseInt(number / 10, 10) == 1) {
            return typeof arrString[2] === 'string' ? arrString[2] : '';
        }
        else {
            let tmp = number % 10;
            if (tmp == 1) {
                return typeof arrString[0] === 'string' ? arrString[0] : '';
            }
            else if (tmp >= 2 && tmp <= 4) {
                return typeof arrString[1] === 'string' ? arrString[1] : '';
            }
        }
    }
};

getInterval();
getStr();

function getInterval() {
    for (let obj of objects) {
        let age = obj.hasOwnProperty('age') ? +obj.age : 0;
        let intervalsIndex = intervalsLength;
        if (intervalsLength) {
            for (let id in intervals) {
                if (age < intervals[id]) {
                    intervalsIndex = id;
                    break;
                }
            }
            if (result.hasOwnProperty(intervalsIndex)) {
                result[intervalsIndex]++;
            } else {
                result[intervalsIndex] = 1;
            }
        }
    }
}

function getStr() {
    let value = 0;
    blockPerson.innerHTML = "Object =" + JSON.stringify(objects);

    for (let i = 0; i < result.length; i++) {
        value = result[i];
        let barChartBlock = document.createElement('div');
        if (i === 0) {
            barChartBlock.innerHTML = 'до' + ' ' + intervals[i] + '--' + value + ' ' + person(value, peopleWords);
            blockPerson.appendChild(barChartBlock);
        } else if (i < intervals.length - 1) {
            barChartBlock.innerHTML = intervals[i] + '-' + intervals[i + 1] + '--' + value + ' ' + person(value, peopleWords);
            blockPerson.appendChild(barChartBlock);
        } else if (i === intervals.length - 1){
            barChartBlock.innerHTML = 'более' + ' ' + intervals[intervals.length - 1] + '--' + value + ' ' + person(value, peopleWords);
            blockPerson.appendChild(barChartBlock);
        }
    }
}
