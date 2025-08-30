<h1>Answers to the questions are given below :</h1>
<hr>

# 1. DOM Selection Methods: `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`

## What They Select

| Method | Selects | Returns |
| :--- | :--- | :--- |
| `getElementById('id')` | A single element by its ID. | Single `Element` |
| `getElementsByClassName('class')` | All elements with a class. | Live `HTMLCollection` |
| `querySelector('css')` | The **first** element matching any CSS selector. | Single `Element` |
| `querySelectorAll('css')` | **All** elements matching any CSS selector. | Static `NodeList` |

## Key Differences

### Flexibility
- **`querySelector`/`querySelectorAll`**: Accept any CSS selector (e.g., `'#id .class'`, `'div > p'`)
- **`getElementById`/`getElementsByClassName`**: Limited to ID and class selection only

### Return Type & Behavior
- **Live Collection**: `getElementsByClassName` - automatically updates if DOM changes
- **Static List**: `querySelectorAll` - returns a snapshot that doesn't update




### Performance
- **Fastest**: `getElementById` (highly optimized)
- **Generally Fast Enough**: `querySelector`/`querySelectorAll` for most use cases

# 2. Creating and Inserting a New DOM Element
### Creating and Inserting a DOM Element

```js
let div = document.createElement("div"); // create
div.textContent = "Hello World";        // add content
document.body.appendChild(div);         // insert into page


```

# 3. Event Bubbling  

Event bubbling means when an event happens on an element, it first runs on that element,  
then it "bubbles up" to its parent, then grandparent, and so on until the root.  

Example: clicking a button triggers the button’s handler, then its parent `div`, then `body` (if they have listeners).  
You can stop it with `event.stopPropagation()`.  

# 4. Event Delegation  

Event delegation means adding a single event listener on a parent element  
to handle events from its child elements using `event.target`.  
It is useful because it saves memory (fewer listeners),  
and works even for dynamically added child elements.  

# 5. preventDefault() vs stopPropagation()  

- `preventDefault()` stops the default action of an element (e.g., stop a link from opening, stop form submit).  
- `stopPropagation()` stops the event from bubbling up to parent elements.  

 Use `preventDefault()` to block default behavior,  
and `stopPropagation()` to block event flow in the DOM tree.  





