export class Account{

  account_name: String;
  account_rol: String;
  account_id: number;
  account_password: String;


  constructor( account_name: String, account_rol: string, account_id: number, account_password: string) {
      this.account_id = account_id;
      this.account_name = account_name;
      this.account_password = account_name;
      this.account_rol = account_rol;
  }
}
