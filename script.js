document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Проверка имени пользователя и непосредтсвенно пароль (это твои данные которые ты должен будешь вести что бы тебя перенаправило на твой сайт)
    if (username === "admin" && password === "password") {
      // Перенаправление на основной сайт
      window.location.href = "https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4https://youtu.be/3UqzqOjdLr4";
    } else {
      alert("Неверное имя пользователя или пароль"); //если не правильно пользователь вел
    }
  });