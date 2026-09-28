# 💪 FitLog

> **Train with intent. Log every set.**

FitLog is a modern workout library and personal workout-planning web application built with Next.js and TypeScript.

Users can explore workouts, view detailed exercise information, build a personalized daily workout plan, save workouts for later, and manage their selected workouts from one place.

## 🌐 Live Demo

**[Visit FitLog](https://a6-fitlog1.vercel.app/)**

## 📸 Preview

<!-- Add a screenshot of the live project here -->

![FitLog Preview](./src/assets/banner.png)

## 🛠️ Technologies Used

* **Next.js** — React framework for building the application
* **React** — Component-based user interface
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Utility-first styling
* **DaisyUI** — UI components
* **React Icons** — Icons throughout the application
* **React Toastify** — User feedback and notifications
* **Context API** — Global workout plan and saved-workout state
* **Next/Image** — Optimized workout images

## ✨ Key Features

### 🏋️ Workout Library

Browse a collection of workouts with information including:

* Workout name
* Muscle groups
* Equipment
* Difficulty
* Duration
* Calories burned
* Sets and reps
* Rating
* Workout instructions

### 🔎 Workout Details

Users can open individual workouts to view detailed information and instructions.

### 📋 Today's Plan

Users can add workouts to their daily plan.

The plan automatically displays:

* Total exercises
* Total workout duration
* Total calories

Duplicate workouts are prevented.

### ❤️ Save for Later

Users can save workouts they want to revisit later.

Saved workouts can be viewed, opened, and removed from the saved list.

### 📊 Workout Sorting

The My Plan page allows users to sort workouts by:

* Duration
* Calories
* Rating

### ✅ Workout Management

Users can:

* View workout details
* Remove workouts
* Mark planned workouts as completed
* Manage saved workouts

### 📱 Responsive Design

FitLog is designed for:

* Desktop
* Tablet
* Mobile

The interface includes responsive navigation, workout cards, empty states, notifications, and mobile-friendly layouts.

## 🔌 API

Workout information is loaded from an external API:

`https://api.abcz.workers.dev/api/fitlog`

The application fetches workout data dynamically and displays it in the workout library.

## 📦 Dependencies

### Main Dependencies

* `next`
* `react`
* `react-dom`
* `@react-icons/all-files`
* `react-toastify`

### Development Dependencies

* `typescript`
* `tailwindcss`
* `@tailwindcss/postcss`
* `daisyui`
* `eslint`
* `eslint-config-next`
* `@types/node`
* `@types/react`
* `@types/react-dom`

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Sonia-Shurmi/a6-fitlog.git
```

### 2. Go to the project directory

```bash
cd a6-fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

```text
http://localhost:3000
```

## 📁 Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   ├── workouts/
│   │   └── [workoutid]/
│   └── page.tsx
│
├── components/
│   ├── homepage/
│   ├── shared/
│   └── WorkoutDetails/
│
├── context/
│   └── WorkoutProvider.tsx
│
├── assets/
│
└── types/
    └── workout.type.ts
```

## 🎯 Project Goal

FitLog was created to provide a simple and focused way to discover workouts, build a daily workout plan, and manage selected exercises without unnecessary complexity.

## 🔗 Links

* 🌐 **Live Demo:** https://a6-fitlog1.vercel.app/
* 💻 **Repository:** https://github.com/Sonia-Shurmi/a6-fitlog

---

<p align="center">
  Built with ❤️ using Next.js
</p>
