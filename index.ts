// ********* DIRECT CODE EXMPLES - TYPESCRIPT ********************************


// Infer types(Implicit types) ****************************************************************
// let test = 'test'
// test = 3


// Defineing types(Explicit types) ************************************************************

// let userName: string = 'vishnu'
// let age: number = 23
// let isGood: boolean = false
// let makrs: number[] = [10, 29, 33]
// let emptyArray: [] = []
// let userDetailsObj: { name: string; age: number; isGood: boolean } = { name: 'vishnu', age: 23, isGood: false }


// Interface ********************************

// interface IUser {
//     name: string;
//     age: number;
//     isGood: boolean;
//     getFullName?: () => void;
// }

// let userDetails: IUser = {
//     name: "vishnu",
//     age: 23,
//     isGood: false,
//     getFullName() {
//         return console.log("Full Name Of User", this.name);
//     }
// };


// Type ********************************
// {Same as like Interface}

// type IUser = {
//     name: string;
//     age: number;
//     isGood: boolean;
//     getFullName?: () => void;
// }

// let userDetails: IUser = {
//     name: "vishnu",
//     age: 23,
//     isGood: false,
//     getFullName() {
//         return console.log("Full Name Of User", this.name);
//     }
// };


// Union && Optional ********************************

// interface IUser {
//     name?: string;
//     age?: number | string;
//     isGood?: boolean | string;
//     getFullName?: () => void;
// }

// let userDetails: IUser = {
//     name: "vishnu",
//     age: 23,
//     isGood: 'true',
//     getFullName() {
//         return console.log("Full Name Of User", this.name);
//     }
// };

// functions ********************************

// interface IUser {
//     // if we give the name as optional type then in the get fullname return it will show a error  that we have to spedify
//     // the return type as string | undefined   else we need to set only string (try both)

//     name: string;
//     age?: number | string;
//     isGood?: boolean | string;
//     getFullName?: () => void;
// }


// let userDetails: IUser = {
//     name: "vishnu",
//     age: 23,
//     isGood: 'true',
//     getFullName() {
//         return console.log("Full Name Of User", this.name);
//     }
// };

// function getFullName(userDetails: IUser): string {
//     return userDetails.name
// }
// getFullName(userDetails)



// Named types ********************************

// type ToggleSwitch = 'On' | 'Off';

// let switchStatus: ToggleSwitch
// switchStatus = 'On'

// Generics ********************************

// type UserDetails = {
//     name: string;
//     age: number
// }
// type AdminDetails = {
//     fullName: string;
//     level: string
// }

// let user: UserDetails = {
//     name: "user1",
//     age: 2
// }
// let admin: AdminDetails = {
//     fullName: "user1",
//     level: 'level1',
// }


// function getDetails<U>(user: U): U {
//     return user
// }


// let userResult = getDetails<UserDetails>(user)
// console.log(userResult.name)

// let adminResult = getDetails<AdminDetails>(admin)
// console.log(adminResult.fullName)


// Type combining and Re-Using ********************************

// IN Interfaces ********************************
// interface type1 {
//     name: string,
//     age: number,
//     jobStatus: boolean
// }


// interface type2 extends type1 {
//     // elong with type1 types we can add more herer
// }


//  In types ********************************

// type type1 = {
//     name: string,
//     age: number,
//     jobStatus: boolean
// }


// type type2 = type1 & {
//     // elong with type1 types we can add more herer
// }



// Enums ****************************************************************

// const enum StatusType {
//     PENDING = 'pending',
//     COMPLETED = 'completed',
//     FAILD = 'failed',
// }

// const getStatus = (orderId: string, status: StatusType) => {
//     return console.log(orderId + ' status == ', status)
// }


// getStatus('1234', StatusType.COMPLETED)


// as const  ****************************************************************

// let userName = 'Vishnu the king' as string
// userName = 'Vishnu the kinfff'



// keyof typeof ********************************

// const StatusType = {
//     PENDING: 'pending',
//     COMPLETED: 'completed',
//     FAILD: 'failed',
// } as const

// const getStatus = (orderId: string, status: keyof typeof StatusType) => {
//     return console.log(orderId + ' status == ', StatusType[status])
// }

// getStatus('1234', "FAILD")


// Utility types  ********************************

type Users = {
    name: string,
    age: number,
}


// Readonly ****


// // Posobile changing
// const UserDetails: Users = { name: "visnu", age: 3 }
// UserDetails.name = 'edited name'


// // Imposobile changing
// const UserDetails: Readonly<Users> = { name: "visnu", age: 3 }

// // Posobile changing
// UserDetails.name = 'edited name'

// Partial *** (Optional maker)









