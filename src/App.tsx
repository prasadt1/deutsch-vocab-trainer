import React, { useState, useEffect } from 'react';
import { Search, Shuffle, Check, X, ArrowRight, ArrowLeft, BookOpen, Download, Plus } from 'lucide-react';
import { vocabularyData, VocabularyCard } from './data/vocabularyData';
import { fetchMultipleRandomWords } from './services/api';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMode, setCurrentMode] = useState<'browse' | 'practice'>('browse');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [practiceCards, setPracticeCards] = useState(vocabularyData);
  const [userScore, setUserScore] = useState({ correct: 0, incorrect: 0 });
  const [filteredCards, setFilteredCards] = useState(vocabularyData);
  const [allVocabulary, setAllVocabulary] = useState<VocabularyCard[]>(vocabularyData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const filtered = allVocabulary.filter(
      (card) =>
        card.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchTerm, allVocabulary]);

  const startPractice = () => {
    const shuffled = [...allVocabulary].sort(() => Math.random() - 0.5);
    setPracticeCards(shuffled);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setCurrentMode('practice');
    setUserScore({ correct: 0, incorrect: 0 });
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setUserScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setUserScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    // Move to next card
    if (currentCardIndex < practiceCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    } else {
      // End of practice session
      alert(`Practice complete! Score: ${userScore.correct}/${practiceCards.length}`);
      setCurrentMode('browse');
    }
  };

  const navigateCard = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentCardIndex < practiceCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else if (direction === 'prev' && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    setShowAnswer(false);
  };

  const fetchNewWords = async (count: number = 5) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newWords = await fetchMultipleRandomWords(count);
      setAllVocabulary(prevVocabulary => [...prevVocabulary, ...newWords]);
      alert(`Successfully added ${newWords.length} new words!`);
    } catch (err) {
      setError('Failed to fetch new words. Please try again later.');
      console.error('Error fetching new words:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <BookOpen className="mr-2" /> German B1 Vocabulary Trainer
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentMode('browse')}
              className={`px-4 py-2 rounded-md transition ${
                currentMode === 'browse'
                  ? 'bg-white text-blue-600 font-medium'
                  : 'text-white hover:bg-blue-500'
              }`}
            >
              Browse
            </button>
            <button
              onClick={startPractice}
              className={`px-4 py-2 rounded-md transition ${
                currentMode === 'practice'
                  ? 'bg-white text-blue-600 font-medium'
                  : 'text-white hover:bg-blue-500'
              }`}
            >
              Practice
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-4">
        {currentMode === 'browse' ? (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search vocabulary by German, English, or category..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => fetchNewWords(5)}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:bg-green-400"
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <Plus className="mr-2 h-5 w-5" /> Add New Words
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-2">
                      {card.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">{card.german}</h3>
                    <p className="text-gray-600">{card.english}</p>
                    {card.example && (
                      <p className="text-sm text-gray-500 mt-2 italic">"{card.example}"</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredCards.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">No vocabulary matching your search.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Card {currentCardIndex + 1} of {practiceCards.length}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Score: {userScore.correct}/{userScore.correct + userScore.incorrect}
                  </span>
                </div>

                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-2">
                      {practiceCards[currentCardIndex].category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {practiceCards[currentCardIndex].german}
                    </h2>
                    {showAnswer ? (
                      <div className="space-y-2">
                        <p className="text-xl text-gray-700">
                          {practiceCards[currentCardIndex].english}
                        </p>
                        {practiceCards[currentCardIndex].example && (
                          <p className="text-sm text-gray-500 italic">
                            "{practiceCards[currentCardIndex].example}"
                          </p>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowAnswer(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      >
                        Show Answer
                      </button>
                    )}
                  </div>
                </div>

                {showAnswer && (
                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      onClick={() => handleAnswer(false)}
                      className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition"
                    >
                      <X className="mr-1 h-5 w-5" /> Incorrect
                    </button>
                    <button
                      onClick={() => handleAnswer(true)}
                      className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition"
                    >
                      <Check className="mr-1 h-5 w-5" /> Correct
                    </button>
                  </div>
                )}

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => navigateCard('prev')}
                    disabled={currentCardIndex === 0}
                    className={`flex items-center px-3 py-1 rounded ${
                      currentCardIndex === 0
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                  </button>
                  <button
                    onClick={() => navigateCard('next')}
                    disabled={currentCardIndex === practiceCards.length - 1}
                    className={`flex items-center px-3 py-1 rounded ${
                      currentCardIndex === practiceCards.length - 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    Next <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={startPractice}
                className="flex items-center mx-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                <Shuffle className="mr-2 h-5 w-5" /> Shuffle & Restart
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>German B1 Vocabulary Trainer &copy; Prasad Tilloo {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;