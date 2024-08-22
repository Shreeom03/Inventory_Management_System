export default class UserModel{
    constructor(id , name , email , password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(user){
        users.push(new UserModel(users.length+1, user.name, user.email, user.password));
    }

    static validate(user){
        let isValid = users.find((User) => User.email === user.email && User.password === user.password);
        return isValid;
    }

}

let users = [];