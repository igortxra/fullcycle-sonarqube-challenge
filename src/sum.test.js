const sum = require("./sum");

test("soma de 1 + 2 deve ser igual a 3", () => {
  expect(sum(1, 2)).toBe(3); // Verifica se 1 + 2 é 3
});
