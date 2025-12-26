function add(){
    let {mA, mB} = user_accept("add")
    let added_matrix = []
    for (let i = 0; i < mA.length; i++){
        let summed = []
        for (let j = 0; j < mA[i].length; j++){
            summed.push(mA[i][j] + mB[i][j])
        }
        added_matrix.push(summed)
    }
    return added_matrix
}
function sub(){
    let {mA, mB} = user_accept("sub")
    let subed_matrix = []
    for (let i = 0; i < mA.length; i++){
        let subbed = []
        for (let j = 0; j < mA[i].length; j++){
            subbed.push(mA[i][j] - mB[i][j])
        }
        subed_matrix.push(subbed)
    }
    return subed_matrix
}
function mul(){
    let {mA, mB} = user_accept("mul")
    let muled_matrix = []
    for (let i = 0; i < mA.length; i++){
        let multiplied = []
        for (let j = 0; j < mB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mB.length; k++) {
                sum += mA[i][k] * mB[k][j];
            }
            multiplied.push(sum)
        }
        muled_matrix.push(multiplied)
    }
    return muled_matrix
}
function transpose(){
    let mA = user_accept("transpose")
    for (let i = 0; i < mA.length; i++){
        for (let j = 0; j < mA[i].length; j++){
            if (i == j){
                break
            }else{
                [mA[i][j], mA[j][i]] = [mA[j][i], mA[i][j]]
            }
        }
    }
    return mA
}
function user_accept(type){
    let mA = [];
    let mB = [];
    if (type === "add" || type === "sub"){
        let col = parseInt(prompt("Enter the number of columns for the matrixs?"))
        let row = parseInt(prompt("Enter the number of rows for the matrixs?"))
        for (let i = 0; i < row; i++){
            let rows = []
            for (let j = 0; j < col; j++){
                let val = parseInt(prompt(`Enter the value at cell row ${i} and col ${j} for matrix A`))
                rows.push(val)
            }
            mA.push(rows)
        }
        for (let i = 0; i < row; i++){
            let rows = []
            for (let j = 0; j < col; j++){
                let val = parseInt(prompt(`Enter the value at cell row ${i} and col ${j} for matrix B`))
                rows.push(val)
            }
            mB.push(rows)
        }
        return {mA, mB}
    }else if (type === "mul"){
        let repet = true
        let col1 = 0
        let col2 = 0
        let row1 = 0
        let row2 = 0
        while (repet){
            col1 = parseInt(prompt("Enter the number of columns for the matrix A?"))
            row1 = parseInt(prompt("Enter the number of rows for the matrix A?"))
            col2 = parseInt(prompt("Enter the number of columns for the matrix B?"))
            row2 = parseInt(prompt("Enter the number of rows for the matrix B?"))
            if (col1 != row2){
                alert("Invalid matrix A col and matrix B row they need to be the same")
            }else{
                repet = false
            }
        }
        for (let i = 0; i < row1; i++){
            let rows = []
            for (let j = 0; j < col1; j++){
                let val = parseInt(prompt(`Enter the value at cell row ${i} and col ${j} for matrix A`))
                rows.push(val)
            }
            mA.push(rows)
        }
        for (let i = 0; i < row2; i++){
            let rows = []
            for (let j = 0; j < col2; j++){
                let val = parseInt(prompt(`Enter the value at cell row ${i} and col ${j} for matrix B`))
                rows.push(val)
            }
            mB.push(rows)
        }
        return {mA, mB}
    }else{
        let col = parseInt(prompt("Enter the number of columns for the matrixs?"))
        let row = parseInt(prompt("Enter the number of rows for the matrixs?"))
        for (let i = 0; i < row; i++){
            let rows = []
            for (let j = 0; j < col; j++){
                let val = parseInt(prompt(`Enter the value at cell row ${i} and col ${j} for matrix A`))
                rows.push(val)
            }
            mA.push(rows)
        }
        return mA
    }
}

function main(){
    let choice = prompt(`Choose one: 
        A: Add 
        B: Substract 
        C: Multiply 
        D: Transpose`)
    let ch = choice.toLowerCase()
    if (ch === "a" || ch === "b" || ch === "c" || ch === "d"){
        if (ch == "a"){
            console.log(add())
        }else if (ch == "b"){
            console.log(sub())
        }else if (ch == "c"){
            console.log(mul())
        }else{
            console.log(transpose())
        }
    }else{
        alert("Invalid choice")
    }
}
main();