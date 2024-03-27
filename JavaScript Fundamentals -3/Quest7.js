/* Build a program that utilizes a Map to store user information (name, age, email) and allows adding,
updating, and deleting user records. */


const userMap = new Map();

function addUser(userKey, userObj)
{
    userMap.set(userKey, userObj);
}

function updateUser(userKey, userObj)
{
    if (userMap.has(userKey))
    {
        const userInfo = userMap.get(userKey);

        userInfo.name = userObj.name;
        userInfo.age = userObj.age;
        userInfo.email = userObj.email;
    }
    else {
        console.log("Enter valid user !");
    }
}

function deleteUser(userKey)
{
    userMap.delete(userKey);
}

user1 = {
    name: "ut",
    age: 19,
    email: "ut@gmail.com"
};

user2 = {
    name: "sy",
    age: 18,
    email: "sy@gmail.com"
};

user1new = {
    name: "utsy",
    age: 20,
    email: "utsy@gmail.com",
};

addUser("user1", user1);
addUser("user2", user2);

console.log(userMap);

updateUser("user1", user1new);

updateUser("use", user1); //enter valid user.

console.log(userMap);

deleteUser("user2");

console.log(userMap);