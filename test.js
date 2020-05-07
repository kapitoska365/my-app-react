let a = {
    age: 29,
    name: "Nick",
    aLive: true,
    hobbies: ["basketball", "running", "programming"],
    classroom: {
        teacher: {
            name: "Lolo",
            age: 18
        }
    }
}

let b = {...a};


console.log({} === {});