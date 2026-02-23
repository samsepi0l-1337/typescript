abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickName: string,
  ) {}
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickName);
  }
}

const sepi = new Player("sam", "sepi0l", "sepi");

sepi.getFullName();
sepi.nickName;
