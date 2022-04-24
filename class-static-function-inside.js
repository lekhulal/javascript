class Student {
	name;
	yob;
	place;
	contestWin;

	constructor(name, yob, place, contestWin) {
		this.name = name;
		this.yob = yob;
		this.place = place;
		this.contestWin = contestWin;
	}

	getDetails() {		
		return `Class-A student leader name is ${this.name} from ${this.place}. He/She is ${new Date().getFullYear() - this.yob} years old.`
	}

	static totalContestPrize(...args) {
		const totalPrize = args.reduce((total, item) => {
			return total + item.contestWin
		}, 0);
		console.log(`Our school achieved total ${totalPrize} prizes`)
	}
}

const classA = new Student('Lek', 1989, 'Kochi', 6)
const classB = new Student('Ranju', 1989, 'Kochi', 8)

console.log(classA.getDetails())
console.log(classB.getDetails())

Student.totalContestPrize(classA, classB);

/*
* ----------------------------------------------------------------------
* Static class methods are defined on the class itself.
* You cannot call a static method on an object, only on an object class.
* ----------------------------------------------------------------------
*/