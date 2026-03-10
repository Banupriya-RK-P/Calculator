var display_text = document.getElementById("display_text")
var input_box = document.getElementById("input_box")
var percentage_button = document.getElementById("percentage_button")
var clear_button = document.getElementById("clear_button")
var division_button = document.getElementById("division_button")
var remove_button = document.getElementById("remove_button")
var seven_button = document.getElementById("7_button")
var eight_button = document.getElementById("8_button")
var nine_button = document.getElementById("9_button")
var addition_button = document.getElementById("addition_button")
var four_button = document.getElementById("4_button")
var five_button = document.getElementById("5_button")
var six_button = document.getElementById("6_button")
var one_button = document.getElementById("1_button")
var two_button = document.getElementById("2_button")
var three_button = document.getElementById("3_button")
var multiplication_button = document.getElementById("multiplication_button")
var minus_button = document.getElementById("minus_button")
var zero_button = document.getElementById("zero_button")
var dot_button = document.getElementById("dot_button")
var equal_button = document.getElementById("equal_button")
var buttons_container = document.getElementsByClassName("buttons_container")
var result = ""

function update(event) {
    var value =event.target.textContent
    if(value === "+" || value === "-" || value === "*" || value === "/" || value === "." || value === "%" || value === "+/-" )
    {
        display_text.textContent = input_box.value + value
        input_box.value=""

    }
    else if(value !== "="){
        input_box.value += value
    }
    // display_text.textContent += value
    // console.log(display_text)
}
equal_button.addEventListener("click",function(){
    display_text.textContent += input_box.value
    var expression = display_text.textContent
    result= eval(expression)
    input_box.value =result
})

clear_button.addEventListener("click",function(){
    display_text.textContent=""
    input_box.value=""
})

minus_button.addEventListener("click",function(){
   if(input_box.value.startsWith("-")){
        input_box.value = input_box.value.slice(1)
    }
    else{
        input_box.value = "-" + input_box.value
    }
    
})

 remove_button.addEventListener("click",function(){
    if(input_box.value == result){
        display_text.textContent=""
        return
    }
    input_box.value = input_box.value.slice(1)
    })