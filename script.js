let input = document.querySelector("#inputData")

function countDown(){
    let inputData = input.value
    let interval = setInterval(() => {
        document.querySelector(".output").innerHTML = inputData
        inputData = inputData-1
        if(inputData===-1){
           clearInterval(interval)
        }
    },1000)
    
}


