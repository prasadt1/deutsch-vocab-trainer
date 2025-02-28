import axios from 'axios';
import { VocabularyCard } from '../data/vocabularyData';

// Free Dictionary API
const dictionaryApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// Free Translation API
const translationApiUrl = 'https://api.mymemory.translated.net/get';

// Function to get a random category
const getRandomCategory = (): string => {
  const categories = [
    'Work & Career', 
    'Daily Life', 
    'Environment', 
    'Health', 
    'Technology', 
    'Society', 
    'Education', 
    'Travel', 
    'Food', 
    'Relationships'
  ];
  return categories[Math.floor(Math.random() * categories.length)];
};

// Function to translate English to German
export const translateToGerman = async (word: string): Promise<string> => {
  try {
    const response = await axios.get(translationApiUrl, {
      params: {
        q: word,
        langpair: 'en|de'
      }
    });
    
    if (response.data && response.data.responseData) {
      return response.data.responseData.translatedText;
    }
    throw new Error('Translation failed');
  } catch (error) {
    console.error('Error translating word:', error);
    return word; // Return original word if translation fails
  }
};

// Function to generate a German example sentence
// Instead of using the Leipzig API which is causing errors, we'll generate examples
export const generateGermanExample = (germanWord: string): string => {
  // Extract the base word without articles
  const baseWord = germanWord.replace(/^(der|die|das) /, '');
  
  // Array of example sentence templates
  const templates = [
    `Ich benutze ${germanWord} jeden Tag.`,
    `${germanWord} ist sehr wichtig.`,
    `Wir haben über ${germanWord} gesprochen.`,
    `Kannst du mir ${germanWord} erklären?`,
    `In Deutschland ist ${germanWord} sehr beliebt.`,
    `Ich habe ${germanWord} in der Schule gelernt.`,
    `${germanWord} spielt eine große Rolle in unserem Alltag.`,
    `Ohne ${germanWord} wäre das Leben schwieriger.`,
    `Viele Menschen interessieren sich für ${germanWord}.`,
    `Ich finde ${germanWord} sehr interessant.`
  ];
  
  // Return a random template
  return templates[Math.floor(Math.random() * templates.length)];
};

// Function to fetch a random English word and convert it to a vocabulary card
export const fetchRandomWord = async (): Promise<VocabularyCard> => {
  try {
    // First, get a random word from a predefined list
    const randomWords = [
      'opportunity', 'challenge', 'experience', 'development', 'communication',
      'apartment', 'schedule', 'neighborhood', 'utility', 'furniture',
      'sustainability', 'recycling', 'conservation', 'ecosystem', 'biodiversity',
      'nutrition', 'wellness', 'therapy', 'prevention', 'diagnosis',
      'innovation', 'digital', 'network', 'software', 'hardware',
      'democracy', 'citizenship', 'policy', 'community', 'diversity',
      'curriculum', 'certificate', 'qualification', 'assessment', 'scholarship',
      'destination', 'itinerary', 'accommodation', 'reservation', 'luggage',
      'ingredient', 'recipe', 'nutrition', 'cuisine', 'dietary',
      'conversation', 'interaction', 'connection', 'partnership', 'collaboration'
    ];
    
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    let englishWord = randomWord;
    
    try {
      // Get word definition (optional, just to verify the word exists)
      await axios.get(`${dictionaryApiUrl}${randomWord}`);
    } catch (error) {
      // If the word doesn't exist in the dictionary, we'll still use it
      console.log(`Word "${randomWord}" not found in dictionary, using anyway`);
    }
    
    // Translate to German
    const germanWord = await translateToGerman(englishWord);
    
    // Add appropriate article (simplified approach)
    let germanWithArticle = germanWord;
    if (!germanWord.startsWith('der ') && !germanWord.startsWith('die ') && !germanWord.startsWith('das ')) {
      // This is a simplified approach - in a real app, you'd need a more sophisticated way to determine the correct article
      const articles = ['der', 'die', 'das'];
      const randomArticle = articles[Math.floor(Math.random() * articles.length)];
      germanWithArticle = `${randomArticle} ${germanWord}`;
    }
    
    // Generate an example sentence
    const example = generateGermanExample(germanWithArticle);
    
    // Create and return the vocabulary card
    return {
      german: germanWithArticle,
      english: englishWord,
      category: getRandomCategory(),
      example: example
    };
  } catch (error) {
    console.error('Error fetching random word:', error);
    
    // Return a fallback vocabulary card
    return {
      german: 'das Wort',
      english: 'word',
      category: 'Education',
      example: 'Ich lerne ein neues Wort.'
    };
  }
};

// Function to fetch multiple random words
export const fetchMultipleRandomWords = async (count: number): Promise<VocabularyCard[]> => {
  const promises = Array(count).fill(null).map(() => fetchRandomWord());
  return Promise.all(promises);
};