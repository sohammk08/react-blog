# React Blog

A versatile blog website where multiple users can sign up and share their thoughts through captivating blog posts. Whether you're a seasoned writer or just starting, this platform empowers you to express yourself and connect with a wider audience.

## Getting Started

To get this project up and running locally, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sohammk08/react-blog
   ```

2. Install dependencies:
   ```bash
   cd react-blog
   npm install
   ```

3. Set up Firebase:
   - Visit [Firebase Console](https://console.firebase.google.com/) and log in with your Google account.
   - Click on "Add project" to create a new project.
   - Copy the Firebase config code provided and paste it into the `firebase.js` file in the project.
   - Navigate to "Build" from the left bar. Then go to "Authentication" and enable email sign-in.
   - Set up Firestore Database. Ensure to choose the server nearest to you for optimal loading speeds.
   - In Firestore Database rules (`Firestore Database` > `Rules`), change 
   ```
   allow read, write: if false;
   ```
   to
   ```
   allow read, write: if true;
   ```

4. File Structure

   All working files are organized inside the `src` folder:

   - **components:** Contains all the reusable components.
   - **pages:** Contains files for different pages of the website.

## Contributing

If you find the code interesting or want to improve it, consider starring the repository. Feel free to fork the project and make any changes you believe will enhance it. However, please note that any pull requests created will be closed at the discretion of the repository owner.

Your contributions are valued, and we appreciate your interest in making the project better!

Happy Coding!