# 🧘‍♀️ Yoga Image Generator
A simple web app built with **React**, **Vite**, and **Tailwind CSS** that fetches and displays a **random yoga image** using the [Pexels API](https://www.pexels.com/api/).

## 🌟 Features
- Fetches high-quality yoga images from Pexels.
- Simple and clean UI using Tailwind CSS.
- Built with modern tools: Vite + React.
- Async/await API fetching.
- Responsive design.

## 🖼️ Demo

### Before API Call
![Before Hitting the API Button](https://github.com/mounikakondreddy03/YogaWebsite/blob/67596738202385656fe4862ce5108d001353b93f/BeforeApiCalling.png)
*Clean interface with the "Show Yoga Image" button ready to fetch content*

### After API Call
![After Hitting the API Button](https://github.com/mounikakondreddy03/YogaWebsite/blob/67596738202385656fe4862ce5108d001353b93f/AfterApiCalling.png)
*Beautiful yoga image displayed after clicking the button*

🔗 [Live Site](https://your-vercel-deployment-url.vercel.app)  
*(Replace with your actual Vercel URL)*

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/mounikakondreddy03/YogaWebsite.git
cd yogaWebsite
```

### 2. Install Dependencies
```bash 
npm install
```

### 3. Set Up Environment Variable
Create a .env file in the root and add your Pexels API Key:
```bash 
VITE_PEXELS_API_KEY=your_pexels_api_key
```

### 4. Run the App
```bash
npm run dev
```
Visit http://localhost:5173

## 🧪 Technologies Used
- React
- Vite
- Tailwind CSS
- Pexels API

## 🗂️ Project Structure
```
src/
├── App.jsx           
├── main.jsx           
├── index.css          
└── Yoga/
    └── Yoga.jsx       
```

## 📦 Deployment
Deployed using Vercel:
- Push code to GitHub.
- Import the project into Vercel.
- Add environment variable: VITE_PEXELS_API_KEY.
- Click Deploy.
