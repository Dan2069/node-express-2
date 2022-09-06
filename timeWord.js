function timeWord (time) {
    // Defined the hours of AM and PM
    const am = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
    const pm = ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
    const hour_word = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Tweleve"]
    const single = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const tens = ["Oh","", "twenty", "thirty", "fourty", "fifty"]
    const new_word = [];

    // Added Exceptions (Midnight and Noon)
    if (time == "00:00"){
        return "midnight";
    }
    if (time == "12:00"){
        return "noon";
    }

    // Separated the Hour from 00:00, HH:MM.
    // Ex. 12:45, h = 12
    let h = time.slice(0,2)
    // Determines if the hour is in the AM or PM array
    let hour = am.includes(h)


    // Separated the Minute from 00:00, HH:MM.
    // Ex. 12:45, m = 45
    let m = time.slice(3,6)

    // Used IF method to split between AM or PM.
    // IF TRUE categorizes it to AM
    if (hour){
        // Gets the word for the hour and pushes it to the empty array
        new_word.push(hour_word[parseInt(h)]);
        // If the minutes are in the TEENS, pushes words from the Teens array
        if (m[0] == "1"){
            new_word.push(teens[parseInt(m[1])]);
        }
        // If the minutes are NOT in the TEENS, pushes words from Singles and Tens array.
        else{
            // If the minute ends in 0, then only push the tens array to account for the space being returned
            // Ex. 6:30 PM to Six thirty PM, not Six thirty__PM.
            if (m[1] == "0"){
            new_word.push(tens[parseInt(m[0])]);
            }
            //If the minute doesn't end in 0, continue to push the tens array and minutes array.
            else {
            new_word.push(tens[parseInt(m[0])]);
            new_word.push(single[parseInt(m[1])]);
            }
        }
        // Pushes that it's Morning
        new_word.push("AM");

        return new_word.join(' ');
    }
    // IF FALSE categorizes it to PM
    else{
        new_word.push(hour_word[parseInt(h-12)]);
        console.log(h);
        console.log(m);
        if (m[0] == "1"){
            new_word.push(teens[parseInt(m[1])]);
        }
        else{
            if (m[1] == "0"){
                new_word.push(tens[parseInt(m[0])]);
                }
            else {
                new_word.push(tens[parseInt(m[0])]);
                new_word.push(single[parseInt(m[1])]);
                }
            
        }
        // Pushes that it's Evening
        new_word.push("PM");
    }
    // Returns everything with a space in between
    // Ex. Five Oh Six AM or Two Thirty Four PM

    console.log(typeof(new_word.join(' ')));
    console.log(new_word);
    return new_word.join(' ');
    // return new_word.join(' ');
    
}

console.log(timeWord("22:34"));

console.log(timeWord("02:54"));
console.log(timeWord);
module.exports = timeWord;