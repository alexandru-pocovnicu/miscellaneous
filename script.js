function hello(name) {
  return !name
    ? "Hello, World!"
    : `Hello, ${name[0].toUpperCase().concat(name.substring(1).toLowerCase())}!`;
}
