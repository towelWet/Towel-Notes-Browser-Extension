# Towel Notes Browser Extension

<img width="192" alt="Screen Shot 2024-09-15 at 5 13 15 AM" src="https://github.com/user-attachments/assets/54539a96-6ad0-4cd4-8d25-0d447bf4ca02">

## Overview
Towel Notes is a simple browser extension that allows users to quickly jot down notes and organize them into folders. Users can create and delete folders, add and manage notes, and delete individual notes within folders. All data is stored locally using the browser's `localStorage`, ensuring persistence between sessions.

## Features
- **Create Folders**: Organize notes by creating folders.
- **Save Notes**: Quickly save notes into the selected folder.
- **Delete Notes**: Delete individual notes.
- **Delete Folders**: Remove entire folders along with all associated notes.
- **Local Storage**: All data is saved locally and persists across browser sessions.

---

## How to Use

### Chrome

1. **Download the Extension Files**:
   - Download or clone this repository to your local machine.

2. **Load Unpacked Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle on the upper right corner).
   - Click on **Load Unpacked**.
   - Select the folder where the extension files are located (e.g., the folder containing `popup.html`, `popup.js`, `popup.css`, and `manifest.json`).
   - The extension will now be loaded in Chrome.

3. **Using the Extension**:
   - Click the extension icon in the toolbar to open the Towel Notes popup.
   - Create folders, add notes, and manage your notes and folders directly from the popup.
   - All notes are automatically saved and will persist until deleted.

---

### Opera

1. **Install Chrome Extensions Add-on**:
   - Go to the Opera add-ons page and install the **Install Chrome Extensions** add-on.
   - This allows you to use Chrome extensions in Opera.

2. **Download the Extension Files**:
   - Download or clone this repository to your local machine.

3. **Load Unpacked Extension**:
   - Open Opera and go to `opera://extensions/`.
   - Enable **Developer Mode** (toggle on the upper right corner).
   - Click on **Load Unpacked**.
   - Select the folder containing the extension files.
   - The extension will now be loaded in Opera.

4. **Using the Extension**:
   - Click the extension icon in the toolbar to open the Towel Notes popup.
   - You can now organize your notes into folders and manage them directly from the popup.

---

### Firefox

1. **Download the Extension Files**:
   - Download or clone this repository to your local machine.

2. **Install Temporary Add-on**:
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
   - Click on **Load Temporary Add-on**.
   - Select the `manifest.json` file in the folder where the extension files are located.
   - The extension will now be temporarily installed in Firefox (note that temporary extensions will be removed when Firefox is closed).

3. **Using the Extension**:
   - Click the extension icon in the toolbar to open the Towel Notes popup.
   - Create, manage, and delete notes or folders directly from the extension popup.

---

### Safari

1. **Convert Web Extension to Safari Extension**:
   Safari uses a different format for extensions, so you’ll need to convert your web extension to a Safari-compatible one.

2. **Install Xcode**:
   - Download and install [Xcode](https://developer.apple.com/xcode/) from the Mac App Store.

3. **Create a Safari Extension Project**:
   - Open Xcode and select **File > New > Project**.
   - Select **App** under **macOS** and click **Next**.
   - Name your project and ensure it's set for **macOS**.
   - Under **Project Navigator**, right-click on your project and choose **Add Files to [YourProjectName]...**.

4. **Add Your Web Extension Files**:
   - Add your web extension files (`popup.html`, `popup.js`, `popup.css`, and `manifest.json`) to the Xcode project.

5. **Convert the Manifest**:
   - Xcode automatically converts the `manifest.json` to Safari's format. It may make some suggestions for changes.
   - If there are any issues, adjust the `manifest.json` file as per Xcode’s feedback.

6. **Configure the Safari Extension**:
   - In the **Signing & Capabilities** tab, select your developer account.
   - Enable **App Sandbox** and **Network Client** under **App Sandbox** (if needed).
   - Go to **Project Settings** and ensure the **Safari Extension** target is selected.

7. **Build and Run**:
   - In Xcode, click the **Build** button.
   - Safari will open automatically, and the extension will be available in the **Develop** menu under **Allow Unsigned Extensions**.
   - Once testing is complete, you can export the extension for distribution.

8. **Distribute**:
   - You’ll need to enroll in the [Apple Developer Program](https://developer.apple.com/programs/enroll/) to distribute your extension via the App Store.

---

### Converting Web Extension to Safari Extension (Detailed Steps)

1. **Install Xcode** from the App Store.
2. **Create a new macOS App project**:
   - Open Xcode and choose **File > New > Project**.
   - Select **App** under macOS.
   - Name the project and configure the location.
3. **Add a Safari Web Extension target**:
   - Right-click your project in the **Project Navigator** and choose **Add Files to [Your Project]...**.
   - Select the extension files (`popup.html`, `popup.js`, `popup.css`, `manifest.json`).
4. **Enable the extension**:
   - Open **Safari** and go to **Develop > Allow Unsigned Extensions**.
   - This will allow your extension to load in Safari while in development mode.
5. **Modify the `manifest.json`** if necessary.
6. **Test the extension** in Safari by running it in Xcode.
7. **Submit to the App Store**:
   - You must be a registered Apple Developer to distribute your Safari extension.
