function calculateAge(yb, yc) {
  const years = Math.abs(yb - yc);
  if (yc - yb > 1) return `You are ${yc - yb} years old.`;
  if (yc - yb === 1) return `You are ${yc - yb} year old.`;
  if (yb - yc > 1) return `You will be born in ${yb - yc} years.`;
  if (yb - yc === 1) return `You will be born in ${yb - yc} year.`;
  return "You were born this very year!";
}
