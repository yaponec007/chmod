let userLevel = prompt ('Enter the access level', '');
let accessLevel;

switch (userLevel) {
    case '0' : accessLevel = 'Permission - none';
    break;
    case '1' : accessLevel = 'Permission - execute only';
    break;
    case '2' : accessLevel = 'Permission - write only';
    break;
    case '3' : accessLevel = 'Permission - write and execute';
    break;
    case '4' : accessLevel = 'Permission - read only';
    break;
    case '5' : accessLevel = 'Permission - read and execute';
    break;
    case '6' : accessLevel = 'Permission - read and write';
    break;
    case '7' : accessLevel = 'Permission - read, write and execute';
    break;
    default : accessLevel = 'Invalid value, please enter a number from 0 to 7'
}

console.log(accessLevel);
