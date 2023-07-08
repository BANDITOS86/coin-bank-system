export default function menuClassTogler(route) {
  document.querySelectorAll('.header__item-link').forEach((element) => {
    element.classList.remove('header__item-link--is-active');

    if (element.getAttribute('href') === route) {
      element.classList.add('header__item-link--is-active');
    }
  });
}
