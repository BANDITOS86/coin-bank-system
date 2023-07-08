export default async function pause(ms) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
