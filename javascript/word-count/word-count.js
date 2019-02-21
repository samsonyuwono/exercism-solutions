class Words {
  count(input) {
    this.count = {};
    this.words = input.match(/\S+/g);

    this.words.forEach(word => {
      const lowerCase = word.toLowerCase()
      if(this.count[lowerCase]){
        this.count[lowerCase]++
      }
      else{
        this.count[lowerCase] = 1
      }
    });
    return this.count
  }
}

export default Words;
//Return total count of each word in an object
//1.Iterate over each word in tostring
//2. if word isn't in the count then add word counts
//3. else increment by 1
