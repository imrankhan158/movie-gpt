---

# Movie GPT - Movie Recommendation System

[![GitHub issues](https://img.shields.io/github/issues/imrankhan158/movie-gpt)](https://github.com/imrankhan158/movie-gpt/issues)
[![GitHub stars](https://img.shields.io/github/stars/imrankhan158/movie-gpt)](https://github.com/imrankhan158/movie-gpt/stargazers)

Movie GPT is a movie recommendation system that uses OpenAI's ChatGPT to provide movie recommendations based on user search prompts. It fetches movie data from TMDb (The Movie Database) and presents relevant movie suggestions to users. Firebase is used for authentication to enhance user experience.

## Features

- **GPT-Powered Chat Interface**: Engage in natural language conversations with the GPT-3.5 model to search for movies.
- **Movie Recommendations**: Receive personalized movie recommendations based on your input.
- **TMDb Integration**: Fetch up-to-date movie information and details from TMDb.
- **Firebase Authentication**: Secure and user-friendly authentication powered by Firebase.
- **React with Redux Toolkit**: Built with React and Redux Toolkit for efficient state management.
- **Responsive Design**: The user interface is designed to work seamlessly on both desktop and mobile devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your development machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imrankhan158/movie-gpt.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-gpt
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your TMDb API key and OpenAI API key:

   ```env
   REACT_APP_OPENAI_KEY=your_tmdb_api_key_here
   REACT_APP_TMDB_KEY=your_openai_api_key_here
   ```

5. Configure Firebase Authentication:

   - Set up a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration in the `.env` file (as shown in the previous README).

6. Start the development server:

   ```bash
   npm start
   ```

7. Open your web browser and visit http://localhost:3000 to access Movie GPT.

## Usage

1. Enter your movie-related queries in the chat interface.

2. Chat with GPT-3.5, and it will provide movie recommendations based on your input.

3. Click on the movie cards to view more details from TMDb.

4. Sign in using Firebase authentication to access personalized features.

## Contributing

Contributions are welcome! Please check the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was inspired by the capabilities of OpenAI's GPT-3.5 model.
- Movie data is fetched from [TMDb](https://www.themoviedb.org/).

## Contact

If you have any questions or suggestions, please feel free to [contact me](mailto:imran158khan@gmail.com).

---

Enjoy using Movie GPT with Firebase authentication and OpenAI API integration! 😊

---

Ensure that you replace the placeholders `your_tmdb_api_key_here` and `your_openai_api_key_here` with your actual TMDb and OpenAI API keys in the `.env` file.
