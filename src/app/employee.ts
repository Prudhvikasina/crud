// export class Employee {
//   public id: number;
//    public   ename: string;
//    public  edept: string;
//    public  mobile: string;
//    public  mail:string;
// constructor(id:number,ename:string,edept:string,mobile:string, mail:string) {
//             this.id = id;
//             this.ename = ename;
//             this.edept = edept;
//             this.mobile = mobile;
//             this.mail = mail;
//           }
// }

export interface Employee {
  id: number,
  ename: string,
  mail: string,
  edept: string,
  mobile: string,
  gender: string,
  dob: Date,
}