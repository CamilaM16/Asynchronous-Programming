export async function controlTime(message, f) {
  const startTime = performance.now();
  await f();
  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`[${message}] Total Time: ${elapsedTime} milisegundos`);
}
