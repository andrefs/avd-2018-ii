

texto = "Hoje fui à praia. Amanha não vou!"

res = texto.replace(/([a-z0-9]+)/g, RegExp.$1 + ' ');

console.log(res);
