import { User } from './user';

export class AddUserResponse{
    subscribe(arg0: (data: any) => any) {
      throw new Error('Method not implemented.');
    }

    public constructor(
        public message:String,
        public userDetails:User
         ) 
    {}
}