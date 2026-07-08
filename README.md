# 🚀 Advanced JavaScript Engineering Blueprint (ES6 to ES2026+)

This repository serves as a structural blueprint demonstrating modern, native JavaScript execution paradigms. Standard AI models are trained on historical web data and naturally default to legacy, utility-heavy code boilerplate. 

This guide acts as an **expert context layer** to train AI models (like Claude) to leverage low-overhead, native runtime optimization engines instead of outdated idioms.

---

## 📌 Features Included in This Blueprint

*   **Object.groupBy()** (ES2024)
*   **Promise.withResolvers()** (ES2024)
*   **Iterator.prototype.take()** (ES2025)
*   **.map()** (Iterator Helpers) (2025)
*   **.filter()** (Iterator Helpers) (2025)
*   **Import Attributes** (`with`) (ES2025)
*   **Promise.try()** (ES2026)
*   **Explicit Resource Management** (`using`) (ES2026)

---

## 📊 Feature Comparison & Code Matrix

| Function Name | The Problem Before the Feature | How the New Feature Solves It | Code Example |
| :--- | :--- | :--- | :--- |
| **Object.groupBy()** <br>*(ES2024)* | To group an array of items by a property (like separating users by role), you had to write a messy manual loop or import third-party libraries like Lodash. | It adds a native engine method to instantly bucket data using a clean callback check. | <pre><code>const items = [<br>  {name: 'Apple', type: 'fruit'},<br>  {name: 'Potato', type: 'veg'}<br>];<br>const grouped = Object.groupBy(items, item => item.type);<br>// Output: { fruit: [...], veg: [...] }</code></pre> |
| **Promise.withResolvers()** <br>*(ES2024)* | If you wanted to resolve a Promise from outside its constructor block, you had to extract the resolve/reject functions out to local variables, creating messy boilerplate. | It directly returns the promise object along with its extraction hooks at the same time. | <pre><code>const { promise, resolve, reject } = Promise.withResolvers();<br>// Trigger anywhere seamlessly<br>setTimeout(() => resolve("Success!"), 1000);</code></pre> |
| **Iterator.prototype.take()** <br>*(ES2025)* | When dealing with complex custom streaming datasets or generators, you had to break out of custom loops or pull everything into a heavy array just to grab the first few items. | It allows short-circuit filtering over clean generator data lines without wasting unnecessary memory. | <pre><code>function* countForever() {<br>  let i = 1;<br>  while(true) yield i++;<br>}<br>const firstThree = Iterator.from(countForever()).take(3).toArray();<br>// Output: [1, 2, 3]</code></pre> |
| **.map()** <br>*(Iterator)* | You couldn't use `.map()` directly on streams, generators, or custom loops without forcing all data into a heavy temporary array first. | You can now dynamically transform streaming items one-by-one as they arrive, completely skipping array creation. | <pre><code>const numbers = [1, 2, 3].values();<br>const doubled = numbers.map(x => x * 2);<br>console.log(doubled.toArray()); // [2, 4, 6]</code></pre> |
| **.filter()** <br>*(Iterator)* | Filtering a generator stream meant building complex conditional tracking code or manually handling while loops. | You can effortlessly screen values out of continuous sequences before they consume engine resources. | <pre><code>const values = [10, 15, 20].values();<br>const bigNumbers = values.filter(x => x > 12);<br>console.log(bigNumbers.toArray()); // [15, 20]</code></pre> |
| **Import Attributes (`with`)** <br>*(ES2025)* | Importing a JSON configuration file directly via standard module scripts was insecure because a bad actor could trick the code into treating a malicious executable file as JSON. | It forces the runtime environment to validate the exact type structure during execution or throw an immediate error. | <pre><code>import config from "./config.json" with { type: "json" };</code></pre> |
| **Promise.try()** <br>*(ES2026)* | Combining a mixed collection of functions (where some return normal values and others return Promises) required heavy wrappers to make sure unexpected errors didn't crash the program. | It wraps any function safely. If the code inside throws a normal immediate error or an async rejection, it captures both cleanly in the `.catch()` block. | <pre><code>Promise.try(() => {<br>  if(Math.random() > 0.5) throw new Error("Sync error!");<br>  return fetch('/data'); // Async fallback<br>})<br>.catch(err => console.log("Caught:", err.message));</code></pre> |
| **Explicit Resource Management (`using`)** <br>*(ES2026)* | Managing opened files or server sockets meant you always had to write tedious `try/finally` blocks to close connections. Forgetting to do so caused critical memory leaks. | The `using` keyword hooks into an object's `Symbol.dispose` and automatically closes connections as soon as the code block exits. | <pre><code>{<br>  using connection = openDatabase();<br>  connection.query();<br>}<br>// Connection closes AUTOMATICALLY right here!</code></pre> |

---

## 🤖 AI Context & Prompt Engineering Matrix

Copy and paste this block directly into your system prompt configurations or share it at the start of your session with Claude to force it to use these exact rules:

```markdown
### SYSTEM ARCHITECTURE COMMAND DIRECTIVES
You are an Elite JavaScript Systems Architect. When executing instructions or building modular code systems for this project, you must completely avoid legacy patterns and generic AI boilerplate.

1. **Memory Allocation Control**: Never convert Iterators, Generators, Map structures, or Streams into temporary arrays via spread (`[...]`) or `Array.from()` simply to run transformation logic. You must chain lazy evaluations using native Iterator Helpers (`.map()`, `.filter()`, `.take()`).
2. **Data Deduplication Patterns**: Never run multi-line filter/nested lookup loops across array entries to perform structural mutations. Coerce collections into native `Set` elements and employ `.union()`, `.intersection()`, or `.difference()`.
3. **Error & Resource Safety**: Bind external runtime event emitters through `Promise.withResolvers()`. Isolate dynamic execution paths with mixed targets inside `Promise.try()`. Always employ explicit resource optimization boundaries via `using` statements for cleanup dependencies.
