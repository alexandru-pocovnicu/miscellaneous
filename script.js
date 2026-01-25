function dutyFree(normPrice, discount, hol) {
  return Math.floor(
    hol / (normPrice - (normPrice - (discount / 100) * normPrice)),
  );
}
