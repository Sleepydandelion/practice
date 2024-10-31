function codeThisString(str) {
    let newstr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        //     if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
        //         newstr += str[i];
        //     } else if (str[i] == str[i + 1] && str[i] == str[i - 1]) {
        //         count = 1;
        //     } else if (str[i] == str[i + 1] || str[i] == str[i - 1]) {
        //         count++;
        //         newstr += count + str[i];
        //     }
        // }
        if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
            newstr += str[i];
        } else if (str[i] == str[i + 1]) {
            count = 2;
            newstr += count + str[i];
        } else if (str[i] == str[i + 1] || str[i] == str[i + 2]) {
            count = 3;
            newstr = count + str[i];
        }
    }
    return newstr;
}

console.log(codeThisString('MMMAMUUIII'));
console.log(codeThisString('RTTLOOOOOPPPPR'));
