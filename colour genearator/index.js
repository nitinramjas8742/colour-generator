const getcolor = () => {
    const randomnumber = Math.floor(Math.random()*1677215);  //generating a random number that will be in range to hexadecimal  numbers
    //Now we create randomcode  by concatenating with # so that it will become hex code
    // also while converting it to string we will pass a hex unit i.e 16.
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("chngtxt").innerText = randomcode;
    navigator.clipboard.writeText(randomcode);
}
document.getElementById("btn").addEventListener(
    "click",
    //event call
    getcolor
)
//initial call
getcolor();