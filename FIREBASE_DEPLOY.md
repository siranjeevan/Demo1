# Deploying Dhwayam to Firebase Hosting

This project is now configured for Firebase Hosting and Analytics.

## Prerequisites

1.  **Firebase CLI**: You must have the Firebase CLI installed.

    ```bash
    npm install -g firebase-tools
    ```

2.  **Login**: Authenticate with your Google account.
    ```bash
    firebase login
    ```

## How to Deploy

We've added a scripted command to build and deploy in one step.

```bash
npm run deploy:firebase
```

This command will:

1.  Build your project (`npm run build`).
2.  Deploy the `dist` folder to Firebase Hosting (`firebase deploy`).

## Configuration Details

- **`src/firebase.js`**: Contains your Firebase cleanup and initialization code.
- **`firebase.json`**: Configures Hosting to serve the `dist` folder as a Single Page App.
- **`.firebaserc`**: Sets the default project to `dhwayam-3a777`.
- **`vite.config.js`**: Updated `base` to `/` for root domain hosting.

## Troubleshooting

- If `firebase` command is not found, ensure you installed `firebase-tools` globally or use `npx firebase deploy`.
- If you see a blank page, check the console for errors. Ensure `vite.config.js` has `base: '/'`.
