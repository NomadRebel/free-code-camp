function maskEmail(email){
    let index = email.indexOf("@");
    let mask = email.slice((index-1));
    let begin = email.slice(0,1);
    let star = email.slice(1,(index-1));
    console.log(star);
    let masked = star.replaceAll(/./g, "*");
    console.log(masked);
    console.log(index);
    console.log(begin+masked+mask);
}

const email="4209@email.com";
console.log(maskEmail(email));