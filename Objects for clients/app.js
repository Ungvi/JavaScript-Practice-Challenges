class Client {
    constructor(name, visits) {
        this.name = name;
        this.visits = visits;
    }
}

const myClients = [
    new Client ('John', 2),
    new Client ('Jane', 3),
    new Client ('Tom', 2),
    new Client ('Timoty', 1)
];

const getClients = (visits) => {
    return myClients.filter(member => member.visits === visits)
};

getClients(2).forEach(({name, visits}) => console.log(`${name} has ${visits} visits.`));