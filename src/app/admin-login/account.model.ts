export class Account{

  account_name: String;
  account_rol: String;
  account_id: number;
  account_password: String;


  constructor( Account_name: String, Account_rol: string, Account_id: number, Account_password: string) {
      this.account_id = Account_id;
      this.account_name = Account_name;
      this.account_password = Account_password;
      this.account_rol = Account_rol;
  }
}
