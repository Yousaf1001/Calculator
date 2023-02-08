const inputText = document.getElementById("main_input");


var operator = " ";


function enter_clear() 
{
   inputText.value=""
   inputText.innerText=inputText.value;
}
function enter_1() {
  const val = 1;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_2() {
  const val = 2;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_3() {
  const val = 3;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_4() {
  const val = 4;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_5() {
  const val = 5;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_6() {
  const val = 6;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_7() {
  const val = 7;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_8() {
  const val = 8;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_9() {
  const val = 9;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_0() {
  const val = 0;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_add() {
  const val = "+";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_squareRoot()
{
    const val = "√";
    operator = val;
    inputText.value = inputText.value + val;
    inputText.innerText = inputText.value;
}
function enter_sub() {
  const val = "-";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_mul() {
  const val = "×";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_div() {
  const val = "÷";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_mod() {
  const val = "mod";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_dot()
{
  const val = ".";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;   
}
function enter_sin()
{
  const val = "sin";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;   
}
function enter_cos()
{
  const val = "cos";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;   
}
function enter_tan()
{
  const val = "tan";
  operator = val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;   
}
function enter_sequare()
{
    
    var1=inputText.value;
    var1=Number(var1);
    var1=Math.pow(var1,2);
    inputText.value=var1;
    inputText.innerText = inputText.value;  
}
function enter_log2n()
{
  const val = "log2n";
  operator=val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_log10n()
{
  const val = "log10n";
  operator=val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_loge()
{
  const val = "loge";
  operator=val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_power()
{
  const val = "^";
  operator=val;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function  enter_pi()
{
  const val=Math.PI;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;
}
function enter_log10E()
{
  const val=Math.LOG10E;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;   
}
function enter_log2E()
{
  const val=Math.LOG2E;
  inputText.value = inputText.value + val;
  inputText.innerText = inputText.value;   
}
function add() {
    myarray = inputText.value.split("+");
    value1 = Number(myarray[0]);
    value2 = Number(myarray[1]);
    inputText.value = value1 + value2;
    inputText.innerHTML=inputText.value;
  }
  function sub() {
    myarray = inputText.value.split("-");
    value1 = Number(myarray[0]);
    value2 = Number(myarray[1]);
    inputText.value=value1 - value2;
    inputText.innerText = inputText.value;
  }
  function mul() {
    myarray = inputText.value.split("×");
    value1 = Number(myarray[0]);
    value2 = Number(myarray[1]);
    inputText.value= value1 * value2;
    inputText.innerText = inputText.value;
  }
  function div() {
    myarray = inputText.value.split("÷");
    value1 = Number(myarray[0]);
    value2 = Number(myarray[1]);
    inputText.value=value1 / value2
    inputText.innerText = inputText.value;
  }
  function mod() {
    myarray = inputText.value.split("mod");
    value1 = Number(myarray[0]);
    value2 = Number(myarray[1]);
    inputText.value=value1 % value2;
    inputText.innerText = inputText.value;
  }
  function sin()
  {
    myarray = inputText.value.split("sin");
    value1 = Number(myarray[1]);
    inputText.value=Math.sin(value1)
    inputText.innerText = inputText.value;

  }
  function cos()
  {
    myarray = inputText.value.split("cos");
    value1 = Number(myarray[1]);
    inputText.value=Math.cos(value1)
    inputText.innerText = inputText.value;
  }
  function tan()
  {
    myarray = inputText.value.split("tan");
    value1 = Number(myarray[1]);
    inputText.value=Math.tan(value1)
    inputText.innerText = inputText.value;

  }
function log2n()
{
    myarray = inputText.value.split("log2n");
    value1 = Number(myarray[1]);
    inputText.value=Math.log2(value1)
    inputText.innerText = inputText.value;
}
function log10n()
{
    myarray = inputText.value.split("log10n");
    value1 = Number(myarray[1]);
    inputText.value=Math.log10(value1)
    inputText.innerText = inputText.value;
}
function loge()
{
    myarray = inputText.value.split("loge");
    value1 = Number(myarray[1]);
    console.log(value1);
    inputText.value=Math.log(value1)
    console.log(inputText.value);
    inputText.innerText = inputText.value;
    
}
function squareRoot()
{
    myarray = inputText.value.split("√");
    value1 = Number(myarray[1]);
    inputText.value=Math.sqrt(value1)
    inputText.innerText = inputText.value;
}
function powerFunction()
{
    myarray = inputText.value.split("^");
    value1= Number(myarray[0]);
    value2 = Number(myarray[1]);
    inputText.value=Math.pow(value1,value2);
    inputText.innerText = inputText.value;   
}

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

  function enter_factorial()
{
    num=inputText.value;
    num=Number(num);
    num=factorial(num);
    inputText.value=num;
    inputText.innerText = inputText.value;   
}
function enter_equal() {
  // value="+"
  // operator=value;
  // myarray=inputText.value.split(value);
  // console.log(myarray);

  if (operator == "+") 
    add();
  else if (operator == "-") 
    sub();
  else if (operator == "×") 
    mul();
  else if (operator == "÷") 
    div();
  else if (operator == "mod") 
    mod();
  else if (operator=="sin")
    sin();
  else if (operator=="tan")
    tan();
  else if (operator=="cos")
    cos();
  else if(operator=="log2n")
    log2n();
  else if(operator=="log10n")
    log10n();
  else if(operator=="loge")
      loge();
  else if (operator=="√")
   squareRoot();
   else if(operator=="^")
   powerFunction();
}

