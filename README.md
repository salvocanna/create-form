**Simple form app that allows creation of an employee**

### How to run it


1. Install deps
```
yarn
```

2. Run the app
```
yarn start
```

### How is the project structured

It's pretty much all around a config file.
You have base configured fields, indexed by name.
Each country can have its own exceptions to the fields, and also make completely new fields.
I'm using react hook form to handle the form, as it's a tested library therefore I can take care of the logic around it without worries that it would break.

