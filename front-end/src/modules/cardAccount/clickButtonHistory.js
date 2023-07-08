export default function clickButtonHistory(router, button) {
  button.addEventListener('click', () => {
    router.navigate('/card-account-history');
  });
}
