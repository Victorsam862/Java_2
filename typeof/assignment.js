var showDataType = () =>{
    let input = prompt("Please enter a data here");
    
    document.getElementById("input").innerHTML = input;

    if(input === ""){
        document.getElementById("input").innerHTML = "Please add a valid data"
        document.getElementById("data").innerHTML = "Please add a valid data"
    }
    else if(isNaN(input)){
        document.getElementById("data").innerHTML = "The data type here is String"
    }
    else if(!isNaN(input)){
        document.getElementById("data").innerHTML = "The data type here is Number"
    }
    
   


}
