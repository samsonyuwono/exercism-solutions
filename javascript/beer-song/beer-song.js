const plural = count =>
  count === 1
    ? "1 bottle"
    : count === 0
    ? "no more bottles"
    : count + " bottles";

export class BeerSong {
  sing(count = 99, end = 0) {
    let result = "";

    while (count-- >= end)
      result +=
        count >= 0
          ? `${plural(count + 1)} of beer on the wall, ` +
            `${plural(count + 1)} of beer.\n` +
            `Take ${count >= 1 ? "one" : "it"} down and pass it around, ` +
            `${plural(count)} of beer on the wall.\n\n`
          : "No more bottles of beer on the wall, " +
            "no more bottles of beer.\n" +
            "Go to the store and buy some more, " +
            "99 bottles of beer on the wall.\n";

    return result.trim() + "\n";
  }

  verse(n) {
    return this.sing(n, n);
  }
}
