import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'Alice Banda', email: 'alice@library.com', role: 'admin' },
        { id: 2, name: 'Bob Phiri', email: 'bob@library.com', role: 'member' },
        { id: 3, name: 'Carol Tembo', email: 'carol@library.com', role: 'member' },
        { id: 4, name: 'David Mwale', email: 'david@library.com', role: 'admin' },
    ];
    getAllUsers() {
        return this.users;
    }
    getUserById(id:number){
        const user = this.users.find(user=>user.id===id);
        if(!user){
            return{message:"user not found"};
        }
        return user;
    }
    getUsersByRole(role:string){
        const results = this.users.filter(
            user=>user.role.toLowerCase()===role.toLowerCase()
        );
        if(results.length===0){
            return `No users found with role ${role}`;
        }
        return results;
    }

}
