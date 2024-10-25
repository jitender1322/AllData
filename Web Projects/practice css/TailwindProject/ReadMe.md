INSTALLATION PROCESS

---

Here is the steps to use tailwind via npm.

For this we have to install node.js in our pc and then we have create a node project for using tailwind.
So for creating node project we run a command in our terminal :

    "npm init"
        or
    "npm init -y"

After this we have to install tailwind as a web dependencies in our node package we run a command in our terminal :

    "npm install -D tailwindcss"

Now we run a command in terminal for creating a file tailwind.config.js :

    "npx tailwindcss init"

In this "tailwind.config.js" file we put our content in the content array. Content like our files path
in which we use tailwind.

Now here we create two files of css. In which one input file contain these directives :

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

After that we run a command to link our input file to oue output file where all tailwind css property hold on :

    "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"

"--watch" denote that changes must be visible just running after the code.

---

To putting our default property we write in tailwind.config.js's extend section :

    extend{
        colors:{
            "primary":"red",
        }
    }
