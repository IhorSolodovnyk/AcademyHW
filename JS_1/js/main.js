function userName() {
    const username = prompt(`Add your name`);

    if (username && username.length) {
        console.log(`Hello, ${username}`);
    }
    if (username.length <= 3) {
        console.log(`Your name is too short`)
    }
}

function userAge() {
    const userBirthday = parseInt (prompt (`Add your birthday here`));

    const currentYear = 2023;

    if (!isNaN(userBirthday)){

        if (currentYear < userBirthday) {
            console.log(`You are not borned yet`);
        } else {
            const userAge = currentYear - userBirthday;
            console.log (userAge);
        }
    } else {
        console.log(`Add valid year`);
        userAge()
    } 
}

function squarePerimeter() {
    const squarePerimeterLength = parseInt (prompt (`Write length of square`));

    const perimeterLength = squarePerimeterLength * 4;

    if (!isNaN(squarePerimeterLength)) {
    
        if (squarePerimeterLength <= 0) {
            console.log(`Try again`);
        } else {
            console.log(perimeterLength); 
        }
    } else {
        console.log(`Write a number`);
        squarePerimeter();
    }
}

function circleArea() {

    const circleRadius = parseInt(prompt(`Write a circle radius`));

    const circleAreais = (Math.PI * Math.pow(circleRadius, 2));

    if (!isNaN(circleRadius)) {
        if (circleRadius <= 0) {
            console.log(`Only numbers`);
        } else {
            console.log(`Circle Area is ${circleAreais}`);
        }
    } else {
        console.log(`Only numbers`);
        circleArea()
    }
}