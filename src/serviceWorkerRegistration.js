export function register() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.log('Response', response)
  })

}
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
