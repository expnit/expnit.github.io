const data = {
    "hello world": {
        title: "Hello Wrodl",
        type: "object",
        content: {
            0: `The "Hello, World" program is traditionally used to introduce a programming language.
            Here it is in C# :`,
            2: `using System;`,
            3: `class Hello`,
            4: `static void Main()`,
            5: `{`,
            6: ` // This line prints "Hello, World"`,
            7: `Console.WriteLine("Hello, World");`,
            8: `}`,
        },
    },
    "Explain Hello World": {
        title: "Explain Hello World in C#",
        type: "object",
        content: {
            0: `The "Hello, World" program starts with a using directive that references the System
            namespace. Namespaces provide a hierarchical means of organizing C# programs and
            libraries. Namespaces contain types and other namespaces—for example, the System
            namespace contains a number of types, such as the Console class referenced in the
            program, and many other namespaces, such as IO and Collections . A using directive
            that references a given namespace enables unqualified use of the types that are
            members of that namespace. Because of the using directive, the program can use
            Console.WriteLine as shorthand for System.Console.WriteLine .`,

            1: `The Hello class declared by the "Hello, World" program has a single member, the
            method named Main . The Main method is declared with the static modifier. While
            instance methods can reference a particular enclosing object instance using the keyword
            this , static methods operate without reference to a particular object. By convention, a
            static method named Main serves as the entry point of a C# program.`,
            2: `The line starting with // is a single line comment. C# single line comments start with //
            continue to the end of the current line. C# also supports multi-line comments. Multi-line
            comments start with /* and end with */ . The output of the program is produced by the
            WriteLine method of the Console class in the System namespace. This class is provided
            by the standard class libraries, which, by default, are automatically referenced by the
            compiler.`,
        }
    },
};


export { data }