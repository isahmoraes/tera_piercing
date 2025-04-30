export interface Usuario {
    id:number;
    name:String;
    email:String;
    role : 'admin' | 'user';
}