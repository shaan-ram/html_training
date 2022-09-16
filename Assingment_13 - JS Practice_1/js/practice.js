//Practice events, onload, ondoubleclick, onmouseover
function onLoad() {
    console.log('Page is loaded')
}
function doubleClick() {
    document.getElementById('div1').style.backgroundColor = 'orange'
}
function mouseHover() {
    document.getElementById('div1').style.backgroundColor = 'violet'
}
// Practice sorting of an array(sort method) (take array of strings)
var arr = ['Cat', 'Whale', 'Apple', 'Zebra', 'Ball', 'Car', 'Sunflower']
var sortedArr = arr.sort()
console.log(sortedArr);
document.getElementById('div2').innerHTML = 'Array : ' + arr + '<br>' + 'Sorted Array : ' + sortedArr
// reverse a string (use array method) (hello: olleh)
function reverseString(str) {
    var arrayStr = str.split('')
    var reversedArr = arrayStr.reverse()
    var reversedStr = reversedArr.join('')
    return reversedStr
}
str1 = 'hello'
reversedStr = reverseString(str1)
console.log(reversedStr);
document.getElementById('div3').innerHTML = 'String : ' + str1 + '<br>' + 'Reversed String : ' + reversedStr;

// get the length of a string and make it uppercase ('hduej dij')
function upperCase() {
    var str = document.getElementById('div4_input').value;
    document.getElementById('div4_result').innerHTML = 'Length : ' + str.length + '<br> Uppercase : ' + str.toUpperCase();

}
// •given year leap year or not (29 days in feb)
function leapYear() {
    var year = document.getElementById('div5_input').value
    var leap = ''
    if (year != ''){

        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
           leap = ' is a Leap Year.'
        }
        else {
            leap = ' is NOT a Leap Year.'
        }
    }else{
        leap='Enter Something plz'
    }
    document.getElementById('div5_result').innerHTML = year + leap
}

// given alphabet is vowel(a, e, i , o ,u) or consonant
function isVowel() {

    var result = ''
    var letter = document.getElementById('div6_input').value
    var letter = letter.toLowerCase()
    console.log(letter);
    if (letter.length ==1){
            if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'){
                result= 'Vowel'
           }
            else{
                result= 'Consonant'
            }
    }
    else{
        result= 'Enter only one letter of Alphabets'
    }
    document.getElementById('div6_result').innerHTML=result
}
// given number is multiple of 3 or not e.g. 10900
function isMultiple() {
    var num = document.getElementById('div7_input').value;
    if (num != '') {
        
        document.getElementById('div7_result').innerHTML = num % 3 == 0 ? num + ' is a multiple of 3' : num + ' is NOT a multiple of 3';
    } else {
        document.getElementById('div7_result').innerHTML = 'Enter some value'
    }
}
// • Write a js method, when user click on button, display random integer below it.
function randomInt() {
// div8
    document.getElementById('div8_result').innerHTML = parseInt(Math.random() * 100);
}
// • write js function to format number up to specified decimal places. (100.987): 100.98
function formatDecimal() {
// div9
var num = Number(document.getElementById('div9_input1').value)
var decPlace = Number(document.getElementById('div9_input2').value)
document.getElementById('div9_result').innerHTML = num.toFixed(decPlace)
}
// • write function to convert negative number to positive number
function toPositive() {
// div10
var num = document.getElementById('div10_input').value
document.getElementById('div10_result').innerHTML = Math.abs(num)
}
// • write function to generate random background color of body
function randomBg() {
// div11
var colors = ['gray','white','pink','deeppink','powderblue','violet','yellow','palegreen','tomato','cyan']
document.querySelector('body').style.background=colors[parseInt(Math.random()*10)];
}
// • 0-6 display day week depending upon what user is entering (0 -> sunday)
function dayOfWeek() {
// div12
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var day = document.getElementById('div12_input').value
if(day<=6){
    document.getElementById('div12_result').innerHTML =days[day]
}else{
    document.getElementById('div12_result').innerHTML ='Enter values between 0-6'
}
}
// • check particular word exist in a string. (includes/ match) e.g: I am learning js. (js)
function matchStr() {
// div13
var str = document.getElementById('div13_input1').value
var matchStr = document.getElementById('div13_input2').value
document.getElementById('div13_result').innerHTML = str.includes(matchStr)?'Exists':'Not found'
}
// • fetch the index.html part of the URL of the current page. (hint: var url = window.location.href )
function fetchHtml() {
// div14
var url = window.location.href
urlSpilt = url.split('/')
len = urlSpilt.length
console.log(urlSpilt);
document.getElementById('div14_result').innerHTML = urlSpilt[len-1]
}