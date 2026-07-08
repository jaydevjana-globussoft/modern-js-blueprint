// ❌ Legacy Way: Creating a heavy temporary array
// const doubledArray = [...list].map(x => x * 2);

// Modern ES2025 Way: Lazy Evaluation (Low Memory)
const numIterator = [1, 2, 3].values();
const doubled = numIterator.map(x => x * 2);
console.log(doubled.toArray()); // [2, 4, 6]
