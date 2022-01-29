const string1 = "[}([{]"


for (let i = 0; i < string1.length; i++) {
    if (string1.search((/\[(.*?)\]/g) || (/\((.*?)\)/g) || (/\{(.*?)\}/g))) {

    }
}

// string1.match(/\((.*?)\)/g)
//string1.match(/\{(.*?)\}/g)