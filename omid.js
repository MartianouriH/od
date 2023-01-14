
const snowContainer = document.querySelector(".snow");
[...Array(50)].forEach((_, i) => {
  const snowFlake = document.createElement("div");
  snowFlake.classList.add("snowflake");
  snowContainer.append(snowFlake);
});
