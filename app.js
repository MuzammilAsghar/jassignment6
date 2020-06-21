

//============================ CHAPTER 21-25 ============================== //

function fullname() {
	var firstName=prompt("Enter your first lastme");
    lastName=prompt("Enter your last name");
	alert("Hello "+firstName+" "+lastName+" How are you?")
}

function model() {
	var mobile=prompt("Enter your favorite mobile phone model");
	len=mobile.length;
	alert("My faavorite mobile phone is : "+ mobile +"\nLength of string is : " + len);
}
function contryIndex() {
	var pak="Pakistani";
    n=pak.indexOf("n")
	document.write("String is "+pak +"<br>Index of 'n' is "+ n);

}
function lIndex() {
	var greet="Hello World";
    n=greet.lastIndexOf("l")
	document.write("String is : "+greet +"<br>Last Index of letter 'n':  "+ n);
}
function chareAt() {
	var chr="Pakistani";
    n=chr.charAt(3)
	document.write("String is : "+chr +"<br>Character at Index 3 is :  "+ n);
}

function strConcat() {
	var firstName=prompt("Enter your first lastme");
    lastName=prompt("Enter your last name");
    fullname=firstName.concat(lastName)
	alert("Hello "+fullname+" How are you?")
}

function strReplace() {
	var str="Hyderabad";
    n=str.replace(/Hyder/g,"Islam");
	document.write("City is : "+str +"<br>After replacement : "+ n);

}

function strReplace2() {
	var str="Ali and Sami are best friends. They play cricket and football together.";
    n=str.replace(/and/g,"&");
	document.write("String is : "+str +"<br>After replacement : "+ n);

}

function strToVal() {
	var str="472";
	type=typeof(str);
	n=parseInt(str);
	num=typeof(n);
	document.write("Value : "+ str +"<br>type : "+ type +"<br>Value : "+ str +"<br>type : "+num);

}

function upperCase() {
	var str=prompt("Enter a string");
    n=str.toUpperCase();
	document.write("String is : "+str +"<br>After replacement : "+ n);

}

function titleCase() {
      var string=prompt("Enter a string");	
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   document.write(sentence.join(" "));
   return sentence;
   }

function toStr() {
	var number=parseFloat(prompt("Enter a number"));
    n=number.toString().split('.');
var c = n.splice();
var d = c.join('');
	document.write("String is : "+number +"<br>After replacement : "+ n);

}

function SearchArray() {
	var array=["cake", "apple pie", "cookie", "chips", "patties"];
    element=prompt("Enter item to search");
    var len = array.length, str = element.toString().toLowerCase();
    for ( var i = 0; i < len; i++ ) {
        if ( array[i].toLowerCase() == str ) { 
        	document.write(array[i]+" is available in our store at index "+ i);
         }
         else{
         	document.write("We are sorry " + element+" is not available in our store ");
         }
    }
    return -1;
    
}

function lastChar() {
	var str=prompt("Enter a string");
    n=str.slice(-1);
	document.write("User Input : "+str +"<br>Last Character of input  : "+ n);

}

function words() {
	var str="The quick brown fox jumps over the lazy dog";
    n=str.toLowerCase().match(/the/g)
    document.write("Text : "+ str + "<br>There are "+ n.length +" occurences of the word 'the'");
   
	// document.write("Text: "+str +"<br>Ther are two occurences of the word  : "+ n);
 
}

function strToArray() {  
    var str = 'University of Karachi'
    var array = str.split(" ");
    for (var i = 0; i <= array.length; i++) {
    	for (var j = 0; j <= i.length-1; j++) {
    		document.write("we are here"); 
    	}
     } 
      
} 
//============================ CHAPTER 26-30 ============================== //


function positiveInteger() {
   var number=parseFloat(prompt("Enter a number"));
   numberRound=Math.round(number);
   numberCeiling=Math.ceil(number);
   numberFlooring=Math.floor(number);
   document.write("number : "+number +"<br>roundoff value : "+ numberRound+"<br>floor value : "+numberFlooring+"<br>ceil value : "+numberCeiling);
}

function negativeInteger() {
   var number=parseFloat(prompt("Enter a number"));
   numberRound=Math.round(number);
   numberCeiling=Math.ceil(number);
   numberFlooring=Math.floor(number);
   document.write("number : "+number +"<br>roundoff value : "+ numberRound+"<br>floor value : "+numberFlooring+"<br>ceil value : "+numberCeiling);
}

function absoluteVal() {
	var number=parseFloat(prompt("Enter a number"));
    if (number>0) {
    	document.write("the absolute value of "+number+" is : "+number);
    }
    else{
    	document.write("the absolute value of "+number+" is : "+number*(-1));
    }
}

function diceVal() {
	var number=Math.floor(Math.random() * 6);
	document.write("random dice value : "+number);
}

function headsTail() {
	var number=Math.floor(Math.random() * 2+1);
	if (number==1) {
	  document.write("random coin value : Tails");  	
	}
	else{
	  document.write("random coin value : Heads");	
	}
	
}

function random1To100() {
	var number=Math.floor(Math.random() * 100+1);
	document.write("random number between 1 and 100: "+number);
}

function weight() {
	var kilo=parseFloat(prompt("Enter your weight in kilograms"));
	document.write("The weight of user is: "+kilo+" kgs");
}

function user1To10() {
	var number=Math.floor(Math.random() * 10+1);
	user=parseInt(prompt("Enter a number"));
	if (number == user) {
		document.write("congrats you entered the correct number: "+number);
	}
	else{
		document.write("please try again");
	}
	
}


//============================ CHAPTER 35-38 ============================== //


function sum(num1,num2) {
	var num1=parseInt(prompt("Enter a number"));
    num2=parseInt(prompt("Enter another number"));
    total=num1+num2;
    return document.write("The of two numbers is: "+total);
}

function calculator(num1,num2,operator){
	num1=parseInt(prompt("Enter first number"));
	num2=parseInt(prompt("Enter second number"));
	operator=prompt("Enter Operation like(+,-,*,etc)");
	if (operator=="+") {
		alert(num1+num2);
	}
	else if (operator=="-"){
		alert(num1-num2);
	}
	else if (operator=="*"){
		alert(num1*num2);
	}
	else if (operator=="/"){
		alert(num1/num2);
	}
	else if (operator=="%"){
		alert(num1%num2);
	}
}

function square(num1) {
	var num1=parseFloat(prompt("Enter a number"));
    result=Math.pow(num1,2);
    return document.write("The square of "+num1+ " is : "+result);
}

function Factorial(n) { 
     var n=parseInt(prompt("Enter a number"));
     var ans=1;          
     for (var i = 2; i <= n; i++) 
     ans = ans * i; 
     return document.write("The square of "+n+ " is : "+ans); 
} 

function countNumber(n) { 
     var num1=parseInt(prompt("Enter a number"));
     num2=parseInt(prompt("Enter a number"));
     document.write("The counting of starting number "+num1+ " & ending number : "+num2+" is : <br>");          
     for (var i = num1; i <= num2; i++){
     document.write(i+"<br>"); 
 }
}

function hypo(n) { 
     var base=parseFloat(prompt("Enter base"));
     var perp=parseFloat(prompt("Enter perpendicular"));
     n=Math.sqrt(Math.pow(n,2));          
     n=Math.sqrt(Math.pow(base,2))+Math.sqrt(Math.pow(perp,2)); 
     document.write("The Hypoteneous of base "+base+ " & perpendicular "+perp+ " is : "+n); 
} 

function reverseString(str) {
    var str=prompt("Enter a string");
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (joinArray==str) {
    	document.write("The entered string is palindrome");
    }
    else{
    	document.write("The entered string is not a palindrome");
    }
} 

function upperCase() {
    var string=prompt("Enter a string");	
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
    document.write(sentence.join(" "));
    return sentence;
}

function position() {
    var string=prompt("Enter a string");	
    letter = prompt("Enter letter within string");
    string.findIndex();
    for(var i = 0; i< string.length; i++){
         document.write(string[i]+"<br>")
      }
}
function position() {
	var string=prompt("Enter a string");
	letter = prompt("Enter letter within string");
    n=string.toLowerCase().match(letter)
	document.write("String is "+string +"<br>Index of "+letter+ " is: "+ n);

}

function circle() {
	circumference();
  function circumference(){
	var radius=parseFloat(prompt("Enter radius of circle"));
	circ =2*(Math.PI)*radius;
	document.write("circumference of circle with radius "+radius +" is "+circ+"<br>");
  }
    area();
  function area(){
	var radius=parseFloat(prompt("Enter radius of circle"));
	circ =(Math.PI)*radius;
	document.write("Area of circle with radius "+radius +" is "+circ);
  }
}

function longestWord(str) {
  var str=prompt("Enter a string");
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  document.write("Sentence is: "+str+"<br>");
  document.write(result+" is the longest word in the above sentence");
}


