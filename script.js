let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
    if (currentSize >= max) {
        alert("stack is full you can not add" + newVal)
    }
    data[currentSize] = newVal
    currentSize += 1;
}


function pop() {
    if (currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
    } else {
        alert("stack is already empty")
    }
}

push(20)
push(30)
push(40)
push(50)
push(70)

pop()
pop()
pop()
pop()
pop()
pop()
push(69)
push(89)
push(79)
console.log(data)