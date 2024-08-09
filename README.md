

# Movie Search App

A React-based application utilizing the OMDB API to allow users to search for movies and view detailed information.

Live Link: https://movie-search-projectreact.vercel.app/

## Features

- **Search Movies**: Enter a movie name to fetch and display a list of movies matching the search query.
- **Movie Details**: Click on a movie to view detailed information including the title, year, genre, director, actors, and plot summary.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Demo
![Screenshot 2024-07-10 221628](https://github.com/user-attachments/assets/ad37f521-5ff9-407f-9875-fb4169a2ba4b)
![Screenshot 2024-07-10 221652](https://github.com/user-attachments/assets/3da4b03d-a53c-4b92-9734-83fe13c280e5)



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ranaavh/movie-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your OMDB API key:
   ```env
   REACT_APP_OMDB_API_KEY=your_api_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Enter a movie name in the search bar and click the search button.
- Click on any movie card to view detailed information about the movie.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **OMDB API**: API used to fetch movie data.
- **CSS**: Styling the application.

## Folder Structure

```markdown
movie-search-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   └── SearchForm.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OMDB API](http://www.omdbapi.com/) for providing the movie data.
- [React](https://reactjs.org/) for the front-end library.



