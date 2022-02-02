export default class User {
  public name: string;
  public surname: string;
  public email: string;
  public role: string;
  public password: string;
  
  constructor(myObj: any) {
      Object.assign(this, myObj);
}

}
