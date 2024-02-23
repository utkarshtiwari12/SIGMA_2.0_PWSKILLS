/* As a web developer, your task is to build a function that examines a sentence and counts how many times each unique word appears in it. Using a map, the function efficiently keeps track of the occurrence of each word in the sentence. */


function wordCounter(sentence) {

  // Split the sentence into an array of words
    const words = sentence.split(" ");

  // Create a Map to store word occurrences
    const wordMap = new Map();

  // Iterate over the words array
    for (const word of words) {
    // Normalize the word (convert to lowercase and remove punctuation)
    const normalizedWord = word.toLowerCase().replace(/[^\w]/g, "");

    // Check if the normalized word is already in the Map
    if (wordMap.has(normalizedWord)) {
      // If it exists, increment its count
        wordMap.set(normalizedWord, wordMap.get(normalizedWord) + 1);
    } else {
      // If it doesn't exist, add it to the Map with a count of 1
        wordMap.set(normalizedWord, 1);
    }
    }

    return wordMap;
}

const sentence = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";

const wordOccurrences = wordCounter(sentence);

console.log(wordOccurrences);
