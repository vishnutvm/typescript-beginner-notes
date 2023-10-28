```markdown
# TypeScript Types Guide

Welcome to the TypeScript Types Guide! This guide will help you understand TypeScript variable types with detailed explanations and examples.


## Table of Contents
1. [Prerequisites](#Prerequisites)
2. [Installation and Setup](#Installation and Setup)
3. [Infer types (Implicit types)](#infer-types-implicit-types)
4. [Defining types (Explicit types)](#defining-types-explicit-types)



## Prerequisites

* Knowledge of JavaScript
* TypeScript installed on your machine


## Installation and Setup

To install TypeScript, run the following command:

npm install -g typescript

To verify that TypeScript is installed correctly, run the following command:

tsc

This should output a message like the following:

Version 4.9.4

To use TypeScript, create a new file with a .ts extension. For example, you could create a file called types.ts.

In your types.ts file, you can define types for your variables. For example, you could define a type called UserName as follows:

typescript
type UserName = string;







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
    // test = 3; // Error: Type mismatch
    ```

### Example 2: Explicit Type Declaration
- To allow multiple types, declare it explicitly.
- `test` can store strings or numbers.
```typescript
let test: string | number = 'test';
```

- No error when assigning a number.
```typescript
    // test = 3;
    ```

---

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
