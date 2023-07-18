interface loaderParams {
  show: boolean;
}

export function handleLoader({ show = true }: loaderParams): string | void {
  const header = document.querySelector('header');
  const loaderModifierClass = 'header--loaderHidden';

  if (!header) {
    return 'Element is not in the DOM';
  }

  if (show) {
    header.classList.remove(loaderModifierClass);
  } else {
    header.classList.add(loaderModifierClass);
  }
}
