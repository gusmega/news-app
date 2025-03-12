## News Aggregator App!

### Before running the app

Please place the `.env` file I sent trough email on the `root` of this project before running it.

### Running with Docker

```bash
docker compose up --build
```

or run manually with:

```bash
docker build -t news-app .

# Run the container
docker run -p 3000:3000 news-app
```

The application will be available at `http://localhost:3000`.

### Running in development mode

Start the development server with HMR:

```bash
npm install

# Run the app:
npm run dev
```

The application will be available at `http://localhost:5173`.
