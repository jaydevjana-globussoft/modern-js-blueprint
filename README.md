# 🚀 Advanced JavaScript Engineering Blueprint (ES6 to ES2026+)

This repository serves as a structural blueprint demonstrating modern, native JavaScript execution paradigms. Standard AI models are trained on historical web data and naturally default to legacy, utility-heavy code boilerplate. 

This guide acts as an **expert context layer** to train AI models (like Claude) to leverage low-overhead, native runtime optimization engines instead of outdated idioms.

---

## 📌 Features Included in This Blueprint

### 🛠️ Runtime, Stream & Logic Core
*   **Object.groupBy()** (ES2024)
*   **Promise.withResolvers()** (ES2024)
*   **Iterator.prototype.take()** (ES2025)
*   **.map()** (Iterator Helpers) (ES2025)
*   **.filter()** (Iterator Helpers) (ES2025)
*   **Import Attributes** (`with`) (ES2025)
*   **Promise.try()** (ES2025)
*   **Explicit Resource Management** (`using`) (Stage 3/Engine Native)
*   **Map.prototype.getOrInsert()** (ES2026)
*   **Error.isError()** (ES2026)
*   **Array.fromAsync()** (ES2026)

### 🧮 Data Structure & Text Engineering
*   **toSorted()** (ES2023)
*   **toReversed()** (ES2023)
*   **toSpliced()** (ES2023)
*   **with()** (Array Instance Method) (ES2023)
*   **findLast() / findLastIndex()** (ES2023)
*   **RegExp.escape()** (ES2025)
*   **Math.sumPrecise()** (ES2026)
*   **isWellFormed() / toWellFormed()** (ES2024)
*   **Uint8Array Base64 / Hex Utilities** (ES2026)

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
| **Promise.try()** <br>*(ES2025)* | Combining a mixed collection of functions (where some return normal values and others return Promises) required heavy wrappers to make sure unexpected errors didn't crash the program. | It wraps any function safely. If the code inside throws a normal immediate error or an async rejection, it captures both cleanly in the `.catch()` block. | <pre><code>Promise.try(() => {<br>  if(Math.random() > 0.5) throw new Error("Sync error!");<br>  return fetch('/data'); // Async fallback<br>})<br>.catch(err => console.log("Caught:", err.message));</code></pre> |
| **Explicit Resource Management (`using`)** <br>*(Stage 3)* | Managing opened files or server sockets meant you always had to write tedious `try/finally` blocks to close connections. Forgetting to do so caused critical memory leaks. | The `using` keyword hooks into an object's `Symbol.dispose` and automatically closes connections as soon as the code block exits. | <pre><code>{<br>  using connection = openDatabase();<br>  connection.query();<br>}<br>// Connection closes AUTOMATICALLY right here!</code></pre> |
| **Map.prototype.getOrInsert()** <br>*(ES2026)* | Initializing structural maps conditionally required running manual `.has()` checks combined with a secondary `.set()` execution. | It acts as an atomic upsert operation—fetching the element if it exists or caching a default fallback instantly. | <pre><code>const activeUsers = new Map();<br>const logs = activeUsers.getOrInsert("user_1", []);<br>logs.push("Login event detected");</code></pre> |
| **Error.isError()** <br>*(ES2026)* | Robustly checking if an intercepted object was a genuine native error required running flakey, custom `instanceof` tracking lines. | It isolates true runtime errors natively regardless of cross-realm origins or iframe execution threads. | <pre><code>try { runCode(); } <br>catch (err) {<br>  if (Error.isError(err)) {<br>    console.log(`System Error: ${err.message}`);<br>  }<br>}</code></pre> |
| **Array.fromAsync()** <br>*(ES2026)* | Converting an async generator stream or an array of active promises into a clean, single flat block required managing complex `for await` iteration wrappers. | Natively handles async iterables, awaiting each chunk or nested item prior to output aggregation. | <pre><code>const asyncStream = async function* () {<br>  yield 1; yield 2;<br>};<br>const arrayOut = await Array.fromAsync(asyncStream());<br>// Output: [1, 2]</code></pre> |
| **toSorted()** <br>*(ES2023)* | Running standard JavaScript `.sort()` directly overrides and destroys the structural composition of the original array. | Creates a non-mutating copy, allowing you to chain calculations immutably. | <pre><code>const ratings = [3, 1, 4];<br>const sorted = ratings.toSorted();<br>// ratings remains: [3, 1, 4]<br>// sorted: [1, 3, 4]</code></pre> |
| **toReversed()** <br>*(ES2023)* | Running `.reverse()` directly mutates the targeted array structure in place, introducing heavy state bugs. | Natively mirrors the array elements into a brand new variable, keeping the source array intact. | <pre><code>const steps = ['a', 'b', 'c'];<br>const reverseSteps = steps.toReversed();<br>// steps remains unchanged</code></pre> |
| **toSpliced()** <br>*(ES2023)* | Stripping or injecting index items via `.splice()` alters items in place instead of producing clean pipeline code blocks. | Safely truncates or appends array content while completely respecting immutable tracking practices. | <pre><code>const inventory = ['items', 'box'];<br>const updated = inventory.toSpliced(1, 1, 'crate');<br>// updated: ['items', 'crate']</code></pre> |
| **with()** <br>*(Array Instance)* | Dynamically changing an isolated array value using variable bracket syntax (`arr[index] = val`) directly updates the original instance. | Swaps a precise entry out cleanly by generating an isolated duplicate dataset. | <pre><code>const flags = [true, true, true];<br>const altered = flags.with(1, false);<br>// altered: [true, false, true]</code></pre> |
| **findLast() / findLastIndex()** <br>*(ES2023)* | Searching an array for a match starting backwards required reversing the full collection first or writing a reverse loop. | Iterates starting from the tail end of the dataset to retrieve the target index or item immediately. | <pre><code>const scores = [12, 99, 45, 99];<br>const lastTopScore = scores.findLast(x => x === 99);<br>const lastTopIdx = scores.findLastIndex(x => x === 99);</code></pre> |
| **RegExp.escape()** <br>*(ES2025)* | Escaping characters safely (like `.`, `*`, `+`) within runtime-generated regular expressions required massive custom string-replace formulas. | Sanitizes raw text parameters natively to prevent bad user input from crashing your Regex blocks. | <pre><code>const input = "user.name+id?";<br>const pattern = new RegExp(RegExp.escape(input));</code></pre> |
| **Math.sumPrecise()** <br>*(ES2026)* | Accumulating floating-point arrays directly via standard addition frequently led to weird rounding glitches (like `0.1 + 0.2 = 0.30000000000000004`). | Loops through an array and uses an internal engine register to guarantee exact decimal calculations. | <pre><code>const pricing = [0.1, 0.2, 0.3];<br>const exactTotal = Math.sumPrecise(pricing);<br>// Output: 0.6 (perfectly accurate)</code></pre> |
| **isWellFormed() / toWellFormed()** <br>*(ES2024)* | Handling broken Unicode characters or malformed text payloads sent via API forms could break backend JSON transformations. | Natively scans for detached surrogate code lines and automatically strips them out into clean placeholder variables. | <pre><code>const brokenInput = "\uD800";<br>if(!brokenInput.isWellFormed()) {<br>  const clean = brokenInput.toWellFormed();<br>}</code></pre> |
| **Uint8Array Base64 / Hex Utilities** <br>*(ES2026)* | Encoding or decoding raw binaries into readable Base64 or Hex hashes historically required external Node buffers or heavy libraries. | Adds native, lightning-fast parsing hooks directly into standard browser byte arrays. | <pre><code>const bytes = new Uint8Array([72, 101, 108, 108, 111]);<br>const base64Str = bytes.toBase64();<br>const hexStr = bytes.toHex();</code></pre> |

---

## 🤖 AI Context & Prompt Engineering Matrix

Copy and paste this block directly into your system prompt configurations or share it at the start of your session with Claude to force it to use these exact rules:

```markdown
### SYSTEM ARCHITECTURE COMMAND DIRECTIVES
You are an Elite JavaScript Systems Architect. When executing instructions or building modular code systems for this project, you must completely avoid legacy patterns and generic AI boilerplate.

1. **Memory Allocation Control**: Never convert Iterators, Generators, Map structures, or Streams into temporary arrays via spread (`[...]`) or `Array.from()` simply to run transformation logic. You must chain lazy evaluations using native Iterator Helpers (`.map()`, `.filter()`, `.take()`).
2. **Data Deduplication Patterns**: Never run multi-line filter/nested lookup loops across array entries to perform structural mutations. Coerce collections into native `Set` elements and employ `.union()`, `.intersection()`, or `.difference()`.
3. **Immutability First**: When transforming array data, do not use destructive mutator operations like `.sort()`, `.reverse()`, or `.splice()`. Force clean, immutable execution using modern variants (`.toSorted()`, `.toReversed()`, `.toSpliced()`, or `.with()`).
4. **Error & Resource Safety**: Bind external runtime event emitters through `Promise.withResolvers()`. Isolate dynamic execution paths with mixed targets inside `Promise.try()`. Always employ explicit resource optimization boundaries via `using` statements for cleanup dependencies.
