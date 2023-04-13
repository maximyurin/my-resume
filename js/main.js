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
  p: document.querySelector(".person-portfolio"),
};

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (paragraphs[key]) {
    paragraphs[key].scrollIntoView({ block: "start", behavior: "smooth" });
  }
});

/*
Додати список своїх репозиторіїв з github у своє резюме:
1. Додати в сторінку-резюме секцію “Мої проєкти”.
2. Додати в скрипт подію на завантаження документа.
В функції-обробнику події зробити запит на https://api.github.com/users/ <Ваш логін в github>/repos
 та отримати список ваших репозиторіїв.
3. З відповіді використовувати наступні поля full_name, html_url, description.
4. Вивести отримані дані на сторінку в додану секцію з п1. Показувати посилання на репозиторій,
де full_name текст посилання, а html_url – адреса посилання, під посиланням показати description,
але тільки за умови, що description не є пустим.
 */

const container = document.querySelector(".person-portfolio section");

window.addEventListener("load", async () => {
  const portfolioList = await fetch(
    "https://api.github.com/users/maximyurin/repos"
  );
  const list = await portfolioList.json();
  list.forEach((repository) => {
    const link = document.createElement("a");
    link.setAttribute("href", `${repository.html_url}`);
    link.classList.add("repository-link");
    link.setAttribute("target", "_blank");
    link.innerHTML = repository.full_name;
    container.appendChild(link);
    if (repository.description) {
      const repositoryDescription = document.createElement("p");
      const name = repository.full_name.replace("maximyurin/", "");
      repositoryDescription.classList.add("repository-description");
      repositoryDescription.innerHTML = `<strong>Description for ${name}</strong>: ${repository.description}`;
      container.appendChild(repositoryDescription);
    }
    return repository;
  });
});
