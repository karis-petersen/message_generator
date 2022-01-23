const fs = require("fs");

// random message generator object, can print random messages from any array
const message_generator = {
    // read messages file
    read_json_array(filename) {
        return JSON.parse(fs.readFileSync(filename).toString());
    },
    // generate a random number between one and num
    gen_rand_num(num) {
        return Math.floor(Math.random()*num);
    },
    // select a random quote from the array and returns it
    gen_rand_quote() {
        const messages = this.read_json_array('./messages.json');
        let arr_length = messages[0].length;
        let string1 = messages[0][this.gen_rand_num(arr_length)] + " ";
        let string2 = messages[1][this.gen_rand_num(arr_length)] + " ";
        let string3 = messages[2][this.gen_rand_num(arr_length)] + ".";
        return string1 + string2 + string3;
    },
    // print out the random quote
    print_quote() {
        console.log(this.gen_rand_quote());
    }
}

message_generator.print_quote()