const data = {
    "types and variable": {
        title: "Types and Variables",
        type: "object",
        content: {
            0: `A type defines the structure and behavior of any data in C#. The declaration of a type
            may include its members, base type, interfaces it implements, and operations permitted
            for that type. A variable is a label that refers to an instance of a specific type.`,
            1: `There are two kinds of types in C#: value types and reference types. Variables of value
            types directly contain their data. Variables of reference types store references to their
            data, the latter being known as objects. With reference types, it's possible for two
            variables to reference the same object and possible for operations on one variable to
            affect the object referenced by the other variable. With value types, the variables each
            have their own copy of the data, and it isn't possible for operations on one to affect the
            other (except for ref and out parameter variables).`,
            2: `An identifier is a variable name. An identifier is a sequence of unicode characters
            without any whitespace. An identifier may be a C# reserved word, if it's prefixed by @ .
            Using a reserved word as an identifier can be useful when interacting with other
            languages.`,
            3: `C#'s value types are further divided into simple types, enum types, struct types, nullable
            value types, and tuple value types. C#'s reference types are further divided into class
            types, interface types, array types, and delegate types.
            The following outline provides an overview of C#'s type system.`,
        }
    },
    // end of type

    "value types": {
        title: "Value Types",
        type: "object",
        content: {
            0: "1. simple types",
            1: "Signed integral: sbyte , short , int , long",
            2: "Unsigned integral: byte , ushort , uint , ulong",
            3: "Unicode characters: char , which represents a UTF-16 code unit",
            4: "IEEE binary floating-point: float , double",
            5: "High-precision decimal floating-point: decimal",
            6: "Boolean: bool , which represents Boolean values—values that are either trueor false",
            7: "2. enum types",
            8: `User-defined types of the form enum E {...} . An enum type is a distinct type
            with named constants. Every enum type has an underlying type, which must
            be one of the eight integral types. The set of values of an enum type is the
            same as the set of values of the underlying type.`,
            9: "3. struct type",
            10: "User-defined types of the form struct S {...}",
            11: "4. Nullable value types",
            12: "Extensions of all other value types with a null value",
            13: "5. tuple types",
            14: "User-defined types of the form (T1, T2, ...)"
        }
    },
    // end of value types

    "refrence type": {
        title: "Reference Types",
        type: "object",
        content: {
            0: "1. class types : Ultimate base class of all other types: object",
            1: `2. Unicode strings: string , which represents a sequence of UTF-16 code units
            User-defined types of the form class C {...}`,
            2: `3 : Interface types
            User-defined types of the form interface I {...}`,
            3: `Array types
            Single-dimensional, multi-dimensional, and jagged. For example: int[] ,
            int[,] , and int[][]`,
            4: `Delegate types
            User-defined types of the form delegate int D(...)`,
        },


    }, // end of reference type

    "explain": {
        title: "Explain types",
        type: "object",
        content: {
            0: `C# programs use type declarations to create new types. A type declaration specifies the
            name and the members of the new type. Six of C#'s categories of types are user-
            definable: class types, struct types, interface types, enum types, delegate types, and
            tuple value types. You can also declare record types, either record struct , or record
            class . Record types have compiler-synthesized members. You use records primarily for
            storing values, with minimal associated behavior.`,
            1: `A class type defines a data structure that contains data members (fields) and
            function members (methods, properties, and others). Class types support single
            inheritance and polymorphism, mechanisms whereby derived classes can extend
            and specialize base classes.`,
            2: `A struct type is similar to a class type in that it represents a structure with data
            members and function members. However, unlike classes, structs are value types
            and don't typically require heap allocation. Struct types don't support user-
            specified inheritance, and all struct types implicitly inherit from type object .`,
            3: `An interface type defines a contract as a named set of public members. A class
            or struct that implements an interface must provide implementations of the
            interface's members. An interface may inherit from multiple base interfaces, and
            a class or struct may implement multiple interfaces.`,
            4: `A delegate type represents references to methods with a particular parameter list
            and return type. Delegates make it possible to treat methods as entities that can
            be assigned to variables and passed as parameters. Delegates are analogous to
            function types provided by functional languages. They're also similar to the
            concept of function pointers found in some other languages. Unlike function
            pointers, delegates are object-oriented and type-safe.`,
            5: `The class , struct , interface , and delegate types all support generics, whereby they
            can be parameterized with other types.`,
            6: `C# supports single-dimensional and multi-dimensional arrays of any type. Unlike the
            types listed above, array types don't have to be declared before they can be used.
            Instead, array types are constructed by following a type name with square brackets. For
            example, int[] is a single-dimensional array of int , int[,] is a two-dimensional array
            of int , and int[][] is a single-dimensional array of single-dimensional arrays, or a
            "jagged" array, of int .`,
            7: `Nullable types don't require a separate definition. For each non-nullable type T , there's
            a corresponding nullable type T? , which can hold an additional value, null . For
            instance, int? is a type that can hold any 32-bit integer or the value null , and string?
            is a type that can hold any string or the value null .`,
            8: `C#'s type system is unified such that a value of any type can be treated as an object .
            Every type in C# directly or indirectly derives from the object class type, and object is
            the ultimate base class of all types. Values of reference types are treated as objects
            simply by viewing the values as type object . Values of value types are treated as objects
            by performing boxing and unboxing operations. In the following example, an int value is
            converted to object and back again to int .`,
            9: `int i = 123;`,
            10: `object o = i; // Boxing`,
            11: `int j = (int)o // Unboxing;`,
            12: `When a value of a value type is assigned to an object reference, a "box" is allocated to
            hold the value. That box is an instance of a reference type, and the value is copied into
            that box. Conversely, when an object reference is cast to a value type, a check is made
            that the referenced object is a box of the correct value type. If the check succeeds, the
            value in the box is copied to the value type.`,
            13: `C#'s unified type system effectively means that value types are treated as object
            references "on demand." Because of the unification, general-purpose libraries that use
            type object can be used with all types that derive from object , including both
            reference types and value types.`,
            14: `There are several kinds of variables in C#, including fields, array elements, local variables,
            and parameters. Variables represent storage locations. Every variable has a type that
            determines what values can be stored in the variable, as shown below.`,
            15: `Non-nullable value type :  A value of that exact type`,
            16: ` Nullable value type :             A null value or a value of that exact type `,
            17: `object :  A null reference, a reference to an object of any reference type, or a reference  to a boxed value of any value type`,
            18: `Class type :  A null reference, a reference to an instance of that class type, or a reference to  an instance of a class derived from that class type`,
            19: `Interface type : A null reference, a reference to an instance of a class type that implements
            that interface type, or a reference to a boxed value of a value type that
            implements that interface type`,
            20: `Array type :  A null reference, a reference to an instance of that array type, or a reference to  an instance of a compatible array type`,
            21: `Delegate type  A null reference or a reference to an instance of a compatible delegate type`,
            

        },
    }, // end of explanation
};


export { data };