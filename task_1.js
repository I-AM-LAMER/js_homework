class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.role = 'user';
    }
  
    login() {
      return `User ${this.name } logged in`;
    }
  
    logout() {
      return `User ${this.name } logged out`;
    }
  }
  
  class Admin extends User {
    constructor(name, email) {
      super(name, email);
      this.role = 'admin';
    }
  
    deleteUser(user) {
      return `User ${user.name } was deleted by the administrator ${this.name }`;
    }
  }
  
  let user = new User('user', 'user@gmail.com');
  let admin = new Admin('admin', 'admin@gmail.com');
  
  console.log(user.login(), admin.deleteUser(user));