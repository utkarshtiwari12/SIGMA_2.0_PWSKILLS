/* Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not. */

const users = [
    "Mithun",
    "Swati",
    "Utkarsh",
    "Raghav"
]
function isUserPresent(username)
{
    if (users.includes(username))
    {
        console.log(`Yes, ${username} is a Valid user.`);    
    }
    else
    {
        console.log(`No, ${username} is not a Valid user.`);
    }
}

isUserPresent("Utkarsh");
isUserPresent("Someone");