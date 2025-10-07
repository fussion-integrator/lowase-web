'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle, Share2, Download } from 'lucide-react';

export default function VCReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the primary goal of venture capital?",
      options: [
        "Providing loans to businesses",
        "Investing in high-growth potential startups for equity",
        "Managing public stock portfolios",
        "Real estate investments"
      ],
      correct: 1
    },
    {
      question: "Which stage typically receives the largest VC investment amounts?",
      options: [
        "Seed stage",
        "Series A",
        "Series B and beyond",
        "Pre-seed"
      ],
      correct: 2
    },
    {
      question: "What is due diligence in VC?",
      options: [
        "Legal paperwork filing",
        "Comprehensive evaluation of investment opportunity",
        "Marketing strategy development",
        "Product development process"
      ],
      correct: 1
    },
    {
      question: "What does 'unicorn' mean in VC terminology?",
      options: [
        "A mythical investment",
        "A failed startup",
        "A startup valued at $1 billion or more",
        "A first-time entrepreneur"
      ],
      correct: 2
    },
    {
      question: "Which metric is most important for SaaS startups?",
      options: [
        "Monthly Recurring Revenue (MRR)",
        "One-time sales",
        "Physical inventory",
        "Real estate value"
      ],
      correct: 0
    },
    {
      question: "What is the typical VC fund lifecycle?",
      options: [
        "2-3 years",
        "5-7 years",
        "10-12 years",
        "15-20 years"
      ],
      correct: 2
    },
    {
      question: "What does 'product-market fit' mean?",
      options: [
        "Product pricing strategy",
        "When a product satisfies strong market demand",
        "Marketing campaign success",
        "Product development timeline"
      ],
      correct: 1
    },
    {
      question: "Which is NOT typically part of a VC term sheet?",
      options: [
        "Valuation",
        "Board composition",
        "Employee salaries",
        "Liquidation preferences"
      ],
      correct: 2
    },
    {
      question: "What is the main risk for VC investors?",
      options: [
        "Market volatility",
        "Total loss of investment",
        "Currency fluctuation",
        "Interest rate changes"
      ],
      correct: 1
    },
    {
      question: "In Nigeria, which sector receives the most VC funding?",
      options: [
        "Agriculture",
        "Fintech",
        "Manufacturing",
        "Oil & Gas"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      setScore(correctAnswers);
      setShowResults(true);
    }
  };

  const getScoreLevel = () => {
    if (score >= 8) return { level: 'Expert', color: 'green', message: 'Outstanding! You have strong VC knowledge.' };
    if (score >= 6) return { level: 'Advanced', color: 'leather', message: 'Great job! You understand VC fundamentals well.' };
    if (score >= 4) return { level: 'Intermediate', color: 'yellow', message: 'Good start! Some areas need improvement.' };
    return { level: 'Beginner', color: 'red', message: 'Perfect starting point for our training program!' };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    const scoreLevel = getScoreLevel();
    
    return (
      <section className="py-20 bg-gradient-to-b from-leather-950 to-dark-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-leather-700/30">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                scoreLevel.color === 'green' ? 'bg-green-500/20' :
                scoreLevel.color === 'leather' ? 'bg-leather-500/20' :
                scoreLevel.color === 'yellow' ? 'bg-yellow-500/20' : 'bg-red-500/20'
              }`}>
                <div className={`text-4xl font-bold ${
                  scoreLevel.color === 'green' ? 'text-green-400' :
                  scoreLevel.color === 'leather' ? 'text-leather-400' :
                  scoreLevel.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {score}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Your VC Readiness Level: 
                <span className={`block ${
                  scoreLevel.color === 'green' ? 'text-green-400' :
                  scoreLevel.color === 'leather' ? 'text-leather-400' :
                  scoreLevel.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {scoreLevel.level}
                </span>
              </h3>
              
              <p className="text-leather-200 text-lg mb-8">{scoreLevel.message}</p>
              
              <div className="text-leather-300 mb-8">
                You scored {score} out of {questions.length} questions correctly
              </div>
            </div>

            {/* Personalized Recommendations */}
            <div className="bg-leather-800/20 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Recommended Next Steps:</h4>
              <div className="space-y-3">
                {score >= 8 ? (
                  <>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-leather-200">Apply for our Advanced VC Consultant Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-leather-200">Consider becoming a trainer on our platform</span>
                    </div>
                  </>
                ) : score >= 6 ? (
                  <>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-leather-400" />
                      <span className="text-leather-200">Enroll in our Intermediate VC Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-leather-400" />
                      <span className="text-leather-200">Focus on due diligence and valuation courses</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-leather-400" />
                      <span className="text-leather-200">Start with our VC Fundamentals course</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-leather-400" />
                      <span className="text-leather-200">Join our beginner-friendly community</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/get-started" className="flex-1 bg-gradient-to-r from-leather-600 to-leather-700 text-white py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 block text-center">
                Start Learning Journey
              </a>
              
              <button 
                onClick={resetQuiz}
                className="flex-1 border-2 border-leather-600 text-leather-300 py-4 rounded-xl font-semibold hover:bg-leather-600/10 transition-all duration-300"
              >
                Retake Quiz
              </button>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center justify-center space-x-4 mt-8 pt-8 border-t border-leather-800">
              <span className="text-leather-400 text-sm">Share your results:</span>
              <button className="flex items-center space-x-2 bg-leather-700/20 px-4 py-2 rounded-lg hover:bg-leather-700/30 transition-colors">
                <Share2 className="w-4 h-4 text-leather-400" />
                <span className="text-leather-300 text-sm">Share</span>
              </button>
              <button className="flex items-center space-x-2 bg-leather-700/20 px-4 py-2 rounded-lg hover:bg-leather-700/30 transition-colors">
                <Download className="w-4 h-4 text-leather-400" />
                <span className="text-leather-300 text-sm">Download</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-leather-950 to-dark-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Test Your 
            <span className="bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
              VC Knowledge
            </span>
          </h2>
          <p className="text-xl text-leather-200 max-w-2xl mx-auto">
            Take our quick assessment to discover your venture capital readiness level 
            and get personalized learning recommendations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-leather-700/30">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-leather-300 text-sm">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-leather-300 text-sm">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-leather-900 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-leather-500 to-leather-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-6 rounded-2xl border-2 border-leather-800 bg-leather-900/20 hover:border-leather-600 hover:bg-leather-800/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full border-2 border-leather-600 flex items-center justify-center group-hover:bg-leather-600 group-hover:text-white transition-colors">
                      <span className="font-semibold">{String.fromCharCode(65 + index)}</span>
                    </div>
                    <span className="text-leather-200 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl border-2 border-leather-700 text-leather-300 hover:bg-leather-700/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="text-leather-400 text-sm">
              {answers.length} of {questions.length} answered
            </div>

            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>
    </section>
  );
}