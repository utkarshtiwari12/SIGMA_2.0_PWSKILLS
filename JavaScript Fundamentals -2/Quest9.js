/* As a web developer, you need to create a function that takes a username string as input and checks if it contains only unique characters. Use a Set to implement this efficiently. */

function checkUniqueChar(str)
{
    const uniqueSet = new Set(str);

    if (str.length === uniqueSet.size)
    {
        console.log(`Given string has unique characters : ${str}`);
    }
    else {
        console.log(`Given string does not contain unique characters : ${str}`);
    }
}

checkUniqueChar("Swati");
checkUniqueChar("Swastika");

