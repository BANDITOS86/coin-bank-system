export default function clickBackAccounts(router, button, page) {
  button.addEventListener('click', () => {
    router.navigate(page);
  });
}
