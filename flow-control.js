function basicTeenager(age) {
	if (age >= 13 && age <=19) {
		return "You are a teenager!"
	}
}

function teenager(age) {
	if (age >= 13 && age <=19) {
		return "You are a teenager!"
	} else {
		return "You are not a teenager"
	}
}

function ageChecker(age) {
	if (age >= 13 && age <=19) {
		return "You are a teenager!"
	} else if (age <= 12) {
		return "You are a kid"
	} else {
		return "You are a grownup"
	}
}

function ternaryTeenager(age) {
	return age >= 13 && age <=19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
	var message = "You are a teenager"
	switch(age) {
		case 13:
			return message
		case 14:
			return message
		case 15:
			return message
		case 16:
			return message
		case 17:
			return message
		case 18:
			return message
		case 19:
			return message;
			break;
		default:
			return "You have an age"
	}
}
