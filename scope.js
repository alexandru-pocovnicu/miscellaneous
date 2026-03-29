function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blueRemaining=blueStart-bluePulled
  const redRemaining=redStart-redPulled
  const bothColorsRemaining=blueRemaining+redRemaining
  const probability=blueRemaining/bothColorsRemaining
  return probability
}
