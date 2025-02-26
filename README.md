# The Queer Gaze Magazine

The Queer Gaze is a non-profit indie magazine. This repository is a work in progress and contains the website for the magazine :) 

## Local Development

Prerequisites:

Set up environment variables to consume Wix Headless APIs:

1. In the template's root folder, create a file for the local environment variables:
    ```sh
    cp .env.template .env.local.
    ```
2. In the new **.env.local** file, paste the OAuth app client ID after `NEXT_PUBLIC_WIX_CLIENT_ID=`.

Run the development server:

1. Run either:

    ```sh
    yarn dev
    ```

    or

    ```sh
    npm i
    npm run dev
    ```

2. Open http://localhost:3000 in your browser to see the template home page.
