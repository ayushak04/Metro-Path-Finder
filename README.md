# 🚇 Bengaluru Metro Path Finder

An interactive Metro Route Planner built using **HTML, CSS, and JavaScript** that computes the **shortest path** between any two stations in the Bengaluru Metro network using **Dijkstra's Algorithm**.

The application models the metro system as a weighted graph where stations are represented as nodes and railway connections as weighted edges based on travel distance. It efficiently calculates the optimal route, total travel distance, and estimated fare.

---

## 📌 Project Overview

Finding the fastest metro route manually becomes difficult as the metro network grows with multiple lines and interchange stations.

This project solves that problem by implementing one of the most widely used graph algorithms—**Dijkstra's Shortest Path Algorithm**—to compute the minimum-distance route between any source and destination station.

The application provides an easy-to-use interface where users simply select two stations, and the algorithm instantly returns:

- ✅ Shortest Route
- 📏 Total Distance
- 💰 Estimated Fare

---

## ✨ Features

- 🚇 Shortest route calculation using Dijkstra's Algorithm
- 📍 Supports Bengaluru Metro network
- 🔀 Handles multiple metro lines and interchange stations
- 📏 Calculates total travel distance
- 💰 Automatically estimates fare based on total distance
- 🎯 User-friendly dropdown selection
- ⚡ Instant route computation
- 📱 Responsive and clean interface

---

## 🧠 Algorithm Used

### Dijkstra's Shortest Path Algorithm

The metro network is represented as a **weighted graph**:

- Stations → Nodes
- Metro Connections → Edges
- Distance between stations → Edge Weights

The algorithm:

1. Initializes the source station with distance 0.
2. Assigns infinity to all remaining stations.
3. Repeatedly selects the nearest unvisited station.
4. Updates the shortest distance of neighboring stations.
5. Continues until the destination is reached.
6. Reconstructs the shortest route using parent tracking.

### Time Complexity

| Case | Complexity |
|-------|------------|
| Current Implementation | **O(V²)** |

where:

- **V** = Number of Stations

---

## 🏗️ Project Structure

```
Metro-Path-Finder/
│
├── index.html          # Main application UI
├── script.js           # Graph data + Dijkstra Algorithm
├── style.css           # Styling
├── README.md
```

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

---

## 🚉 Metro Network

The application models the Bengaluru Metro network including:

- Purple Line
- Green Line
- Yellow Line
- Blue Line
- Pink Line

along with interchange stations connecting different lines.

---

## ⚙️ How It Works

1. Select the source station.
2. Select the destination station.
3. Click **Calculate**.
4. The application computes:

- Shortest Route
- Total Distance
- Estimated Fare

---

## 📸 Screenshots

> Add screenshots here after uploading the project.

Example:

```
screenshots/
│
├── home.png
├── result.png
```

Then add:

```markdown
![Home](screenshots/home.png)

![Result](screenshots/result.png)
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/metro-path-finder.git
```

### Navigate to Project

```bash
cd metro-path-finder
```

### Run

Simply open

```
index.html
```

inside your browser.

No installation required.

---

## 📐 Graph Representation

The metro network is implemented as an **adjacency list**, where every station stores its neighboring stations along with the travel distance.

Example:

```javascript
Station A
   |
 1.5 km
   |
Station B
```

This representation enables efficient shortest path computation while keeping memory usage minimal.

---

## 💰 Fare Calculation

The fare is estimated using the total travel distance:

```
Fare = 2.5 × Total Distance
```

(Currently implemented as a simple pricing model.)

---

## 📚 Concepts Used

- Graph Data Structure
- Weighted Graphs
- Dijkstra's Algorithm
- Greedy Algorithms
- Shortest Path Problems
- DOM Manipulation
- Event Handling
- Responsive UI Design

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Implementing graph-based algorithms in JavaScript
- Designing weighted graph structures
- Developing shortest path solutions
- Building interactive front-end applications
- Managing complex datasets
- Integrating algorithms with user interfaces

---

## 🔮 Future Improvements

- 🗺️ Interactive metro map visualization
- 📍 Highlight interchange stations
- ⏱️ Travel time estimation
- 🚆 Line color visualization
- 📌 Nearby station search
- 🌙 Dark mode
- 📱 Fully responsive mobile interface
- 🧭 Live route animation
- 📍 GPS-based nearest station recommendation
- 🎟️ Real Bengaluru Metro fare calculation
- 🧪 Unit tests for route calculations
- ⚡ Priority Queue implementation to improve Dijkstra complexity to **O((V + E) log V)**

---

## 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further improvements.

---

## 👨‍💻 Author

**Ayush**

If you liked this project, feel free to connect and explore my other repositories.
