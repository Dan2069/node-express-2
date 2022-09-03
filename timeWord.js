function timeWord (time) {
    // Defined the hours of AM and PM
    const am = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
    const pm = ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
    const hour_word = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Tweleve"]
    const single = ["Oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const tens = ["Oh","", "twenty", "thirty", "fourty", "fifty"]
    const new_word = [];


    if (time == "00:00"){
        console.log("midnight");
        return "midnight";
    }
    if (time == "12:00"){
        console.log("noon");
        return "noon";
    }
    // Separated the Hour from 00:00, HH:MM.
    // Ex. 12:45, h = 12
    let h = time.slice(0,2)
    console.log(h);

    // Separated the Minute from 00:00, HH:MM.
    // Ex. 12:45, m = 45
    let m = time.slice(3,6)
    console.log(m);

    // Determines if the hour is in the AM or PM array
    let hour = am.includes(h)
    console.log(hour);
    // if (time.includes('00')){

    if (hour){
        console.log(hour_word[parseInt(h)]);
        new_word.push(hour_word[parseInt(h)]);
        if (m[0] == "1"){
            console.log(teens[parseInt(m[1])]);
            new_word.push(teens[parseInt(m[1])]);
        }
        else{
        console.log(tens[parseInt(m[0])]);
        console.log(single[parseInt(m[1])]);
        new_word.push(tens[parseInt(m[0])]);
        new_word.push(single[parseInt(m[1])]);
        }
        console.log("AM");
        new_word.push("AM");
    }
    else{
        console.log(hour_word[parseInt(h)]);
        new_word.push(hour_word[parseInt(h)]);
        if (m[0] == "1"){
            console.log(teens[parseInt(m[1])]);
            new_word.push(teens[parseInt(m[1])]);
        }
        else{
        console.log(tens[parseInt(m[0])]);
        console.log(single[parseInt(m[1])]);
        new_word.push(tens[parseInt(m[0])]);
        new_word.push(single[parseInt(m[1])]);
        }
        console.log("PM");
        new_word.push("PM");
    }


    return new_word.join(' ');

    // 
    //first criteria is am or pm
        // next is the hours (0-11) and (12-23)
            // next is the minutes
            // should i create special cases for noon and midnight?

}
// console.log(timeWord);
console.log(timeWord("00:00"));
// console.log(timeWord("09:54"));
// console.log(timeWord("12:34"));
console.log(timeWord("05:06"));
// console.log(timeWord("01:15"));