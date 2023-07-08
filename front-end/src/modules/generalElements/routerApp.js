export default function routerApp(router) {
  document.querySelectorAll('.header__item-link').forEach((el) => {
    el.addEventListener('click', (i) => {
      i.preventDefault();
      router.navigate(i.target.getAttribute('href'));
    });
  });
}
