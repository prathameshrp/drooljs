# drop-down-menu
A simple utility module that provides drop down menus.

# Download and Install

Install the package into your directory by running the following command:
```
npm i --save drooljs
```
# Usage

import the package into your entry point js file as follows:

```js
import drool from './drool.js'
```


`drool.js` uses a default import, so you can import it by any name you like. I'm going to stick with using `drool` for further instructions

# drool parameter:

`drool` takes an object as parameter. The object has following structure:
```json
{
    class: droolClassName,
    drool: true
}
```
The `class` property takes in a class name in string format. This class name is the name of your drop-down container.
The `drool` property specifies the initial state of drop-down. 
- `drool: true` implies it is visible initially.
- `drool: false` implies it is hidden initially.

# Example
For e.g.
```html
<!-- example.html -->
 <!-- your drop down structure -->

 <div class="dropDown"> 
        <button>Don't forget this</button>
        <ul>
            <li>Good!</li>
            <li>You didn't</li>
            <li>Forget</li>
        </ul>
    </div>
```
[!NOTE]
> Make sure your drop-down container have a class name.
> The drop-down container should contain an element that acts as a button.
> The drop-down container contains an element that acts as container for drop-down options.

```js
// example.js
import drools from "./drool.js";

drools({
    class: "dropDown",
    drool: false,
})
```

This will generate a drop-down menu, which has hidden options initially and the options appear as you click on the button element.