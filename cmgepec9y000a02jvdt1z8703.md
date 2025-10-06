---
title: "Mastering : Arrays, Strings, Structures, and Unions with Practical Exercises"
datePublished: Mon Oct 06 2025 05:41:53 GMT+0000 (Coordinated Universal Time)
cuid: cmgepec9y000a02jvdt1z8703
slug: mastering-arrays-strings-structures-and-unions-with-practical-exercises
tags: computer-science

---

### Arrays Strings Structures Unions in C — Definitions, working explanations, examples, and many exercises

This blog covers core C data-organization topics in one place: arrays (1D/2D/multidimensional/VLA), array operations, strings and string functions, structures (including arrays of structures and nested structures), unions, bit-fields, enumerations, sizeof, and typedef. Each section gives a crisp definition, a short working explanation with code, and many exercises (ranging from basic to challenging) so you can practice and master the topics.

---

### Arrays — Definition and working explanation

**Definition:** An array is a collection of elements of the same type stored in contiguous memory and accessed by indices.

**Key points**

* Indexing starts at 0.
    
* Size must be integral; for static arrays size is fixed at compile time, for VLAs it can be set at runtime.
    
* Multidimensional arrays are arrays of arrays.
    

##### Single dimensional array (1D)

Working example:

```c
int a[5] = {10, 20, 30, 40, 50};
printf("%d\n", a[2]); // prints 30
```

Explanation: `a` is a block of 5 ints; `a[2]` accesses third element. Pointer equivalence: `a` ≡ `&a[0]`; `*(a + i)` ≡ `a[i]`.

##### Two dimensional array (2D)

Working example:

```c
int mat[3][4] = { {1,2,3,4}, {5,6,7,8}, {9,10,11,12} };
printf("%d\n", mat[1][2]); // prints 7
```

Explanation: `mat` has 3 rows and 4 columns. Memory layout is row-major: row0 then row1 then row2.

##### Multidimensional array (3D+)

Working example:

```c
int cube[2][3][4];
cube[1][2][3] = 99;
```

Explanation: Accessed by multiple indices; memory contiguous with last index changing fastest.

##### Variable Length Arrays (VLA)

Working example (C99+):

```c
void func(int n) {
    int arr[n]; // size determined at runtime
    for(int i = 0; i < n; ++i) arr[i] = i;
}
```

Explanation: Useful for stack-based temporary arrays when size known at runtime. Not supported in some compilers or in C++.

##### Common array operations

* Traversal (visit every element)
    
* Search (linear, binary)
    
* Insert/Delete (for static arrays you shift elements)
    
* Sort (bubble, selection, quicksort)
    
* Merge, rotate, reverse
    

---

### Exercises — Arrays (1D / 2D / multi / VLA)

1. Write a program to compute the sum and average of elements of a 1D integer array.
    
2. Find the maximum and minimum values in an integer array and their indices.
    
3. Reverse an array in-place (no extra array).
    
4. Rotate an array right by k positions (in-place).
    
5. Merge two sorted arrays into a single sorted array.
    
6. Implement linear search and binary search (binary search assumes sorted array).
    
7. Given a 2D matrix, compute the sum of each row and each column.
    
8. Transpose a square matrix in-place.
    
9. Multiply two matrices (dimensions compatible).
    
10. Given a 2D matrix, find the largest element and its row and column.
    
11. Using VLA: read `n` from user and create int arr\[n\]; initialize with first n squares and print them.
    
12. Count occurrences of a value in a 2D array.
    
13. Flatten a 2D array into a 1D array and then reconstruct back into original dimensions.
    
14. Given a 3D array of size \[2\]\[2\]\[2\], calculate sum of all elements.
    
15. Write a function that accepts pointers to an array and its length and returns the second largest element.
    

---

### Strings — Definition and working explanation

**Definition:** In C a string is a sequence of characters terminated by the null character `'\0'`. Strings are stored as arrays of `char`.

**Key points**

* Declared as `char s[SIZE]` or `char *s` (literal or dynamically allocated).
    
* Always ensure sufficient size for characters + terminating `'\0'`.
    

##### Single dimensional array of string (single string)

Working example:

```c
char name[20] = "Tanya";
printf("%s\n", name);
```

##### Two dimensional array of strings (array of strings)

Working example:

```c
char names[3][20] = {"Alice", "Bob", "Charlie"};
printf("%s\n", names[2]); // prints Charlie
```

Explanation: `names` is an array of 3 arrays of 20 chars. Use when you want fixed-length slots for multiple strings.

##### Common functions in string.h

* `strlen(s)` — length excluding `'\0'`
    
* `strcpy(dest, src)` — copy
    
* `strcat(dest, src)` — concatenate
    
* `strcmp(s1, s2)` — compare: 0 if equal, &lt;0 or &gt;0 for ordering
    
* `strncpy`, `strncat`, `strchr`, `strstr`, `strtok` etc.
    

Working example using string.h:

```c
#include <string.h>
char s1[50] = "Hello";
char s2[] = " World";
strcat(s1, s2); // s1 becomes "Hello World"
```

---

### Exercises — Strings (many)

1. Write a function to compute length of a string without using `strlen`.
    
2. Reverse a string in-place.
    
3. Check if a given string is a palindrome (case-sensitive and then case-insensitive).
    
4. Count vowels and consonants in a string.
    
5. Remove all spaces from a string.
    
6. Given two strings, check if one is a rotation of the other (use `strstr` trick).
    
7. Implement `strcpy`, `strcat`, and `strcmp` yourself.
    
8. Tokenize a CSV line into fields using `strtok`.
    
9. Convert a string representing an integer into `int` (implement `atoi`).
    
10. Find the first non-repeating character in a string.
    
11. Count frequency of each character (case-insensitive).
    
12. Merge two strings by alternating characters from each (handle unequal lengths).
    
13. Given a paragraph, count the number of words.
    
14. Replace all occurrences of a substring `old` with `new` in a string (assume `new` length ≤ `old` length or reallocate).
    
15. Using an array of strings (2D char array), sort the strings alphabetically.
    
16. Implement `strncpy` safely to prevent buffer overflow.
    
17. Read lines from stdin until EOF and print them in reverse order (store lines dynamically).
    
18. Given a pattern and text, find all occurrences of pattern in text (naive algorithm).
    
19. Convert a string to upper-case and lower-case without using library functions.
    
20. Validate if a string is a valid identifier in C (letters, digits, underscores, not starting with digit).
    

---

### Structures — Definition and working explanation

**Definition:** A structure (`struct`) is a user-defined composite data type that groups variables of different types under a single name.

Working example:

```c
struct Student {
    int id;
    char name[50];
    float marks;
};
```

Explanation: `struct Student` groups related attributes. You can declare variables: `struct Student s1;` or use `typedef` to create an alias.

##### Array of structures

Working example:

```c
struct Student arr[3];
arr[0].id = 101;
strcpy(arr[0].name, "Alice");
arr[0].marks = 85.5;
```

Explanation: Store multiple records of same shape.

##### Passing structure to function

* Pass by value: function receives a copy.
    
* Pass by pointer: function modifies original.
    

Example (by pointer):

```c
void updateMarks(struct Student *s, float m) {
    s->marks = m;
}
```

##### Structure within structures (nested structures)

Working example:

```c
struct Date { int d, m, y; };
struct Employee {
    int id;
    char name[30];
    struct Date dob;
};
```

---

### Exercises — Structures (many)

1. Define a `Book` struct with `title`, `author`, `price`. Write functions to input and display book info.
    
2. Create an array of 5 `Student` structures, read input and print the topper (highest marks).
    
3. Write a function that accepts a `struct Student` by value and prints it.
    
4. Write a function that accepts a pointer to `struct Student` and updates marks.
    
5. Implement sorting of an array of structures by `marks`.
    
6. Search student by `id` in an array of structures and return index or -1.
    
7. Read employee records into an array and write them into a binary file using `fwrite`.
    
8. Read back the binary file with `fread` and print employee details.
    
9. Create nested structures: `Address` inside `Student` and print formatted address.
    
10. Return a structure from a function: create and return a `struct Student`.
    
11. Create a `Complex` struct with `real` and `imag` parts; implement add, subtract, multiply functions returning `Complex`.
    
12. Use array of structures to implement a small phone book; allow add, delete, search by name.
    
13. Implement menu-driven student management: add, display all, search, update, delete (use array or dynamic allocation).
    
14. Implement a function that copies one array of structures to another.
    
15. Demonstrate shallow vs deep copy: struct containing pointer to dynamically allocated name — write copy function that performs deep copy.
    

---

### Unions, bit-fields, enumerations, sizeof, typedef — definitions and working explanation

##### Unions

**Definition:** A union is similar to a struct but all members share the same memory location; only one member can store meaningful value at a time.

Working example:

```c
union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 10;
d.f = 3.14; // now d.i may be corrupted because memory reused
```

Explanation: Size of union equals size of its largest member. Useful for memory-efficient variants and type-punning (careful with aliasing and portability).

##### Bit-fields

**Definition:** Bit-fields allow packing multiple small integer fields into the bits of an integer.

Working example:

```c
struct Flags {
    unsigned int is_bold:1;
    unsigned int is_italic:1;
    unsigned int size:6; // up to 63
};
```

Explanation: Useful for compact storage of many boolean or small-range flags. Note: layout and alignment are implementation-defined.

##### Enumerations (enum)

**Definition:** `enum` defines named integer constants.

Working example:

```c
enum Color { RED, GREEN, BLUE };
enum Color c = GREEN; // underlying values 0,1,2 by default
```

Explanation: Improves readability; can set explicit values: `RED = 1, GREEN = 5`.

##### sizeof operator

**Definition:** `sizeof(type_or_expr)` returns size in bytes of type or object at compile time (for VLA, `sizeof` on VLA yields runtime size).

Working example:

```c
printf("%zu\n", sizeof(int)); // typically 4
printf("%zu\n", sizeof(d)); // size of union/struct variable
```

##### typedef

**Definition:** `typedef` creates an alias for a type, improving readability.

Working example:

```c
typedef unsigned long ull;
typedef struct Student Student;
typedef struct Student { int id; char name[20]; } Student;
```

Explanation: Use for complex types (function pointers, nested structures) to simplify declarations.

---

### Exercises — Unions / Bit-fields / Enum / sizeof / typedef

1. Define a union that can hold an `int`, `float`, or `char[10]`. Write a program that stores different members and prints union size and observed values.
    
2. Use a union and an integer to extract individual bytes of a 32-bit integer (endianness awareness).
    
3. Define a bit-field struct to represent a date with 5 bits for day (1..31), 4 bits for month (1..12), and 12 bits for year (0..4095). Read and print date values.
    
4. Implement a permissions bit-field (read, write, execute for owner/group/others) and a function to print symbolic permission like `rwxr-xr--`.
    
5. Define an enum for weekdays; write a function that given day enum returns if it is weekend.
    
6. Use `typedef` to create alias `Point` for `struct { int x; int y; }` and write distance function.
    
7. Show difference between `struct` and `union` memory sizes using `sizeof` for members with different sizes.
    
8. Create a union of a `double` and an `unsigned long long`; write a function to print IEEE-754 bit pattern of a double (careful: implementation-defined, but acceptable for learning).
    
9. Write a portable function to check `sizeof(int)`, `sizeof(long)`, `sizeof(void*)` and print which is largest on current system.
    
10. Create a `typedef` for a function pointer `cmp_t` that compares two `const void*` and returns `int`, then use it with `qsort`.
    
11. Implement a tiny virtual register file using bit-fields (e.g., flags: zero, carry, sign, overflow) and functions to set/clear/test flags.
    
12. Write an enum with explicit values (e.g., `ERROR = -1, OK = 0, WARNING = 1`) and show how to print their numeric and symbolic forms.
    

---

### Sample code snippets with short explanations

Reverse array in-place:

```c
void reverse(int a[], int n) {
    for(int i = 0, j = n-1; i < j; ++i, --j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}
```

Explanation: Swap symmetric elements until the middle.

String reverse:

```c
void strrev(char *s) {
    int i = 0, j = strlen(s) - 1;
    while (i < j) { char t = s[i]; s[i++] = s[j]; s[j--] = t; }
}
```

Array of structures and file I/O (binary):

```c
struct Student { int id; char name[30]; float marks; };
struct Student arr[3];
// fill arr...
FILE *fp = fopen("stud.dat","wb");
fwrite(arr, sizeof(struct Student), 3, fp);
fclose(fp);
```

Explanation: `fwrite` writes raw struct bytes; read back with `fread`.

Union example showing size:

```c
union U { int i; double d; char c[16]; };
printf("%zu\n", sizeof(union U)); // at least 16 (size of largest member)
```

Bit-field example:

```c
struct S { unsigned a:3; unsigned b:5; unsigned c:8; };
struct S x;
x.a = 5; // fits within 3 bits? 5=101b fits.
```

---

### Suggested progressive practice plan (how to study these exercises)

1. Start with basic array exercises (1–5) and string basics (1–4).
    
2. Move to 2D arrays, matrix problems and string library re-implementations.
    
3. Implement and test structures: array of structures, sorting, searching.
    
4. Combine file I/O with structures (save & load records) and practice `fread`/`fwrite`.
    
5. Explore unions and bit-fields for compact representations and system-level tasks.
    
6. Finish with typedefs, function pointers, and more advanced string/array problems.
    

---

### Quick tips and common pitfalls

* Always leave space for the null terminator when handling strings.
    
* When using `scanf("%s", s)` beware of buffer overflow; prefer `scanf("%19s", s)` or `fgets`.
    
* When writing structs to files, beware of padding and portability between different compilers/architectures.
    
* Unions reuse memory — assign and read only the active field.
    
* Bit-field layout is implementation-defined — avoid relying on exact ordering across compilers.
    
* `sizeof` yields `size_t`; print with `%zu`.
    
* Free dynamic memory allocated with `malloc`/`calloc` and avoid dangling pointers.