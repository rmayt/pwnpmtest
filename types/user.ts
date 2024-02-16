export class User{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    occupation: string;
    gender: string;
    password: string;
    eyolder: boolean;

    constructor(scenario){

        let randomString =(Math.random() + 1).toString(36).substring(7);
        this.firstName = randomString;
        this.lastName= randomString;
        this.email= randomString+"@"+randomString + '.com';
        this.phone= '7854789569';
        this.occupation= scenario.occupation;
        this.gender = scenario.gender;
        this.password= 'Test1234!';
        this.eyolder= scenario['18YearsOld'];
    }
}