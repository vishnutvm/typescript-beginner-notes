# TypeScript Types Guide

Welcome to the TypeScript Types Guide! This guide will help you understand TypeScript  with detailed explanations and examples.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation and Setup](#installation-and-setup)
3. [Infer types (Implicit types)](#1-infer-types-implicit-types)
4. [Defining types (Explicit types)](#2-defining-types-explicit-types)

## Prerequisites

- Knowledge of JavaScript
- TypeScript installed on your machine

## Installation and Setup

To install TypeScript, run the following command:

```bash
npm install -g typescript
```

To verify that TypeScript is installed correctly, run the following command:

```bash
tsc
```

This should output a message like the following:

```
Version 4.9.4
```

To use TypeScript, create a new file with a .ts extension. For example, you could create a file called types.ts.

In your types.ts file, you can define types for your variables. For example, you could define a type called UserName as follows:

```
type UserName = string;
// Now, you can use UserName to define variables.
let username: UserName = "John";
```






---

## 1. Infer types (Implicit types)

In TypeScript, variable types are inferred from their initial values.

### Example 1: Implicit Type Inference
- TypeScript infers `test` as a string.
```typescript
let test = 'test';
```

- Attempting to assign a number to `test` results in a type error.
```typescript
     test = 3; // Error: Type mismatch
```

### Example 2: Explicit Type Declaration


- To allow multiple types, declare it explicitly.
- `test` can store strings or numbers.

```
let test: string | number = 'test';
```

- No error when assigning a number.
```typescript
     test = 3;
```
## 2. Defining types (Explicit types)

Explicitly define types in TypeScript.

### Example 1: Explicit Type Declaration for Primitive Types
- Explicitly declare types for variables.

- `userName` is explicitly declared as a string.
```typescript
let userName: string = 'vishnu';
```

- `age` is explicitly declared as a number.
```typescript
let age: number = 23;
```

- `isGood` is explicitly declared as a boolean.
```typescript
let isGood: boolean = false;
```

### Example 2: Explicit Type Declaration for Arrays and Objects
- Define types for arrays and objects.

- `marks` is explicitly declared as an array of numbers.
```typescript
let marks: number[] = [10, 29, 33];
```

- `emptyArray` is explicitly declared as an empty array.
```typescript
let emptyArray: [] = [];
```

- `userDetailsObj` is explicitly declared as an object with specific properties.
```typescript
let userDetailsObj: { name: string; age: number; isGood: boolean } = { name: 'vishnu', age: 23, isGood: false };
```

## 3. Working with Interfaces

In TypeScript, interfaces define the structure of objects, making it easier to work with complex data.

### Example: Creating an Interface

- Define an interface `IUser` to specify the properties and methods for a user.

```
interface IUser {
    name: string;      // User's name, a string.
    age: number;       // User's age, a number.
    isGood: boolean;   // Indicates whether the user is good, a boolean.
    getFullName?: () => void;  // An optional function to get the full name of the user.
}
```


## 4. Working with Type Aliases

In TypeScript, type aliases provide an alternative way to define the structure of objects similar to interfaces.

### Example: Creating a Type Alias

- Define a type alias `IUser` to specify the properties and methods for a user, which is similar to an interface.

```
type IUser = {
    name: string;      // User's name, a string.
    age: number;       // User's age, a number.
    isGood: boolean;   // Indicates whether the user is good, a boolean.
    getFullName?: () => void;  // An optional function to get the full name of the user.
}
```

### Example: Implementing a Type Alias

- Create an object `userDetails` that adheres to the `IUser` type alias.

```
let userDetails: IUser = {
    name: "vishnu",     // Assigning the name property with a string.
    age: 23,            // Assigning the age property with a number.
    isGood: false,      // Assigning the isGood property with a boolean.

    getFullName() {     // Defining the optional function `getFullName`.
        return console.log("Full Name Of User", this.name);
    }
};
```



## 5. Union Types and Optional Properties

In TypeScript, you can use union types and optional properties to make your data structures more flexible and adaptable.

### Example: Using Union Types and Optional Properties

- Define an interface `IUser` that includes optional properties with union types.

```
interface IUser {
    name?: string;            // Optional property for the user's name, which can be a string or omitted.
    age?: number | string;    // Optional property for the user's age, which can be a number, string, or omitted.
    isGood?: boolean | string; // Optional property indicating if the user is good, which can be a boolean, string, or omitted.
    getFullName?: () => void; // An optional function to get the full name of the user.
}
```

- Create an object `userDetails` that follows the `IUser` interface, showcasing the use of optional properties and union types.

```
let userDetails: IUser = {
    name: "vishnu",     // Optional property with a string value.
    age: 23,            // Optional property with a number value.
    isGood: 'true',     // Optional property with a string value.

    getFullName() {     // Defining the optional function `getFullName`.
        return console.log("Full Name Of User", this.name);
    }
};
```

## 7. Functions with Return Type Annotations

In TypeScript, you can define functions with explicit return type annotations to specify the expected return type.

### Example: Functions with Return Type Annotations

- Define an interface `IUser` with properties and an optional function to get the full name. The return type is specified as `string | undefined` when the `name` property is optional.

```typescript
interface IUser {
    name: string;
    age?: number | string;
    isGood?: boolean | string;
    getFullName?: () => void;
}
```

- Create an object `userDetails` that follows the `IUser` interface, showcasing the properties and the `getFullName` function.

- Define a function `getFullName` that takes a `userDetails` object as a parameter and specifies the return type as `string`.

- Call the `getFullName` function with the `userDetails` object and access the user's name.



## 8. Named Types

In TypeScript, you can use named types to define specific sets of values.

### Example: Defining a Named Type

- Define a type `ToggleSwitch` that can only have two possible values: 'On' or 'Off'.

```
type ToggleSwitch = 'On' | 'Off';
```


## 9. Generics in TypeScript

This code demonstrates the use of generics in TypeScript to create flexible functions.

### Code Example

In this example, we have two types, `UserDetails` and `AdminDetails`, each with different properties. We also have a function called `getDetails` that uses generics to return the input value as is.

```
type UserDetails = {
    name: string;
    age: number;
};

type AdminDetails = {
    fullName: string;
    level: string;
};

let user: UserDetails = {
    name: "user1",
    age: 2,
};

let admin: AdminDetails = {
    fullName: "user1",
    level: 'level1',
};

function getDetails<U>(user: U): U {
    return user;
}

let userResult = getDetails<UserDetails>(user);
console.log(userResult.name);

let adminResult = getDetails<AdminDetails>(admin);
console.log(adminResult.fullName);
```

### How to Use Generics

To use generics in TypeScript:

1. Define your types or interfaces for different data structures.
2. Create functions that use generics to accept and return values of those types.
3. When calling these functions, specify the data type you intend to work with inside angle brackets.

Generics allow you to write reusable and type-safe code that can work with various data types.



## 10. Type Combining and Re-Using with Interfaces in TypeScript

This code illustrates how you can combine and extend types using TypeScript interfaces to create reusable and extensible data structures.

### Code Example

In this example, we have two interfaces: `type1` and `type2`.

```
// Define the type1 interface with properties.
interface type1 {
    name: string;
    age: number;
    jobStatus: boolean;
}

// Define the type2 interface, extending type1 with additional properties.
interface type2 extends type1 {
    // Along with type1 properties, we can add more here.
}
```

### How it Works

- We create the `type1` interface with properties such as `name`, `age`, and `jobStatus`.

- The `type2` interface extends `type1`, inheriting all the properties from `type1`. It also allows adding more properties specific to `type2`.

- This approach allows you to reuse and build upon existing types, making your code more maintainable and extensible.

### Benefits of Interfaces

Using interfaces in TypeScript offers the following advantages:

- Encapsulation of data structures with clearly defined properties.
- Extending existing types to create new, specialized types.
- Enhancing code reusability and maintainability.



## 11. Working with Enums in TypeScript

This code demonstrates the use of TypeScript enums to create a set of named constants for representing status types.

## Code Example

In this example, we define an enum called `StatusType`:

```
const enum StatusType {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed',
}
```

We also have a function `getStatus` that accepts an `orderId` (string) and a `status` (StatusType) and logs the status:

```
const getStatus = (orderId: string, status: StatusType) => {
    return console.log(orderId + ' status == ', status);
}

getStatus('1234', StatusType.COMPLETED);
```

### How it Works

- We create an enum called `StatusType` to define a set of named constants for different status types: `PENDING`, `COMPLETED`, and `FAILED`.

- The `getStatus` function uses these enum values to represent the status of an order. This ensures type safety and makes the code more readable and maintainable.

### Benefits of Enums

Using enums in TypeScript provides the following advantages:

- Improved code readability: Enums make your code more descriptive and self-explanatory.
- Type safety: You can't accidentally assign incorrect values to an enum variable.
- Constants: Enums create a set of named constants, making your code more maintainable.




## 12. Using `as const` and `keyof typeof` in TypeScript

This code demonstrates two TypeScript features: using `as const` for string literals and `keyof typeof` to ensure type safety.

### Code Example

### Using `as const`

In this part of the code, we declare a variable `userName` and use `as const` to specify its type as a string literal:

```
let userName = 'Vishnu the king' as string;
userName = 'Vishnu the kinfff';
```

The use of `as const` ensures that `userName` can only hold the exact string literal `'Vishnu the king'`, making it type-safe.

### Using `keyof typeof`

In the next part, we define an object `StatusType` with specific keys and values:

```
const StatusType = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
} as const;
```

We then create a function `getStatus` that accepts an `orderId` (string) and a `status` (keyof typeof StatusType), ensuring that the status provided is one of the predefined keys:

```
const getStatus = (orderId: string, status: keyof typeof StatusType) => {
    return console.log(orderId + ' status == ', StatusType[status]);
}

getStatus('1234', "FAILED");
```

### How it Works

- Using `as const` for string literals enforces strict typing, allowing you to only assign specific string values to variables.

- `keyof typeof` helps ensure that you are using valid keys for an object, providing type safety when accessing object properties.

### Benefits of `as const` and `keyof typeof`

- Type safety: Both `as const` and `keyof typeof` help prevent runtime errors by ensuring correct types and keys.

- Code readability: These features make your code more self-explanatory, reducing the chance of accidental errors.



## 13. Mastering Utility Types in TypeScript

This code showcases a variety of TypeScript utility types, including `Required`, `Pick`, `Omit`, `Exclude`, `Record`, `Readonly`, and `Partial`, to enhance type safety and manipulate types.

### Code Example

#### Using `Required`

We start with a type `Users` that represents an object with properties `name` (string) and `age` (number).

```typescript
type Users = {
    name: string;
    age: number;
}
```

Next, we use the `Required` utility type to ensure that an object must contain both properties. 

```
type RequiredUsers = Required<Users>;
```

#### Using `Pick` and `Omit`

We demonstrate the use of `Pick` and `Omit` to create new types by selecting or excluding specific properties. 

```
type PickedUsers = Pick<Users, "name">;
type OmittedUsers = Omit<Users, "age">;
```

#### Using `Exclude`

The `Exclude` utility type allows us to exclude one set of types from another. In this example, we exclude a union of status types from the complete set of status types.

```
type StatusTypes = "pending" | "completed" | "failed";
type ExcludedStatus = Exclude<StatusTypes, "failed">;
```

#### Using `Record`

We demonstrate the `Record` utility type to create objects with specific properties and their corresponding types.

```
type Colors = "red" | "green" | "blue";
type ColorMap = Record<Colors, string>;
```

#### Using `Readonly`

We utilize the `Readonly` utility type to make an object immutable, ensuring that its properties cannot be modified after their initial values are assigned.

```
type ReadonlyUsers = Readonly<Users>;
```

#### Using `Partial`

The `Partial` utility type is used to create a type with optional properties. It allows you to make certain properties within an object optional.

```
type PartialUsers = Partial<Users>;
```

### How it Works

- These utility types enhance type safety, code readability, and maintainability in TypeScript.

- They allow you to manipulate and fine-tune types to suit your specific needs.

### Benefits of Utility Types

- Utility types like `Required`, `Pick`, `Omit`, `Exclude`, `Record`, `Readonly`, and `Partial` improve code quality by ensuring type safety and flexibility.

- They make your code more self-explanatory, reducing the chance of accidental errors.
