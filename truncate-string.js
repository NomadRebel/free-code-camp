function truncateString(str, num){
        console.log(str);
        let length = str.length;
        console.log(length);
        if(length>num){
            let cut = str.slice(0,num);
            return cut+"...";
        }
        else{
            return str;
        }
    }
console.log(truncateString("nikhil", 3));