/* Забрати збільшення фотографії при наведенні миші на картинку.
 Натомість анімацію перенести в окремий клас та додавати даний клас при кліку мишею на фотографію.
 Очікуваний результат: при кліку на фотографію вона анімовано збільшуєтья в розмірах.
 При повторному кліку - фотографія анімовано зменшується до початкового розміру.
*/

const personPhoto = document.querySelector(".person-photo");

personPhoto.addEventListener("click", () => {
  personPhoto.classList.contains("person-photo-animate")
    ? (personPhoto.classList.remove("person-photo-animate"),
      personPhoto.classList.add("person-photo-animate-reverse"))
    : personPhoto.classList.contains("person-photo-animate-reverse")
    ? (personPhoto.classList.remove("person-photo-animate-reverse"),
      personPhoto.classList.add("person-photo-animate"))
    : personPhoto.classList.add("person-photo-animate");
});

/* Зробити навігацію по документу за допомогою клавіатури. Для цього біля кожного заголовку додати букву для навігації.
 Далі, при натисканні клавіші з відповідною буквою скролити до обраного елементу сторінки. Для цього можна використовувати наступний метод.
Очікуваний результат:
1. Біля заголовку кожного розділу є буква. Буква має бути в рамці.
2. Коли користувач клікає букву на клавіатурі - йде перехід до потрібної секції
*/

const paragraphs = {
  a: document.querySelector(".person-summary"),
  b: document.querySelector(".person-skills"),
  c: document.querySelector(".person-work-experience"),
  d: document.querySelector(".person-education"),
};

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (paragraphs[key]) {
    paragraphs[key].scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
