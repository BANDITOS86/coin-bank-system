export default function clickCardAccount(router) {
  const elements = document.querySelectorAll('.accounts__item');
  elements.forEach((element) => {
    element.querySelector('.accounts__item-open').addEventListener('click', () => {
      localStorage.setItem('idAccount', element.querySelector('.accounts__item-number').textContent);
      router.navigate('/card-account');
    });
  });
}
