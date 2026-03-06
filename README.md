# Real Stories of Overcoming Anxiety

Real people sharing their journeys of overcoming anxiety. Calming, hopeful stories that inspire courage.

## Features

- **20 Languages Support**: Internationalized content for a global audience.
- **Subpath Hosting**: Configured for `/stories_to_overcome_anxiety/`.
- **Dockerized**: Easy deployment with Nginx and Docker.
- **CI/CD**: Automated builds with GitHub Actions.

## Local Development

1.  **Clone the repository**:
    ```sh
    git clone https://github.com/adikh276-arch/Real-stories-to-overcome-anxiety
    cd Real-stories-to-overcome-anxiety
    ```

2.  **Install dependencies**:
    ```sh
    npm install
    ```

3.  **Run development server**:
    ```sh
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:5173/stories_to_overcome_anxiety/](http://localhost:5173/stories_to_overcome_anxiety/)

## Deployment

### Docker

Build the image:
```sh
docker build -t stories_to_overcome_anxiety .
```

Run the container:
```sh
docker run -p 8080:80 stories_to_overcome_anxiety
```

### GitHub Actions

The project includes a GitHub Actions workflow to automatically build and push the Docker image to a private registry on every push to the `main` branch.

**Required Secrets**:
- `USERNAME`: Registry username
- `PASSWORD`: Registry password
