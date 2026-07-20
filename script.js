
// Define the metro stations and their connections (graph)
const metroStations = {
  // Purple line
    'Challaghata' : {
      'Kengeri' : 2.3
    },
    'Kengeri' : {
      'Challaghata' : 2.3,
      'Kengeri Bus Terminal' : 1.2
    },
    'Kengeri Bus Terminal' : {
      'Kengeri' : 1.2,
      'Pattanagere' : 1.5
    },
    'Pattanagere' : {
      'Kengeri Bus Terminal' : 1.5,
      'Jnanabharathi' : 2.2
    },
    'Jnanabharathi' : {
      'Pattanagere' : 2.2,
      'Rajarajeshwari Nagar' : 2.5
    },
    'Rajarajeshwari Nagar' : {
      'Jnanabharathi' : 2.5,
      'Nayandahalli' : 2.6
    },
    'Nayandahalli' : {
      'Rajarajeshwari Nagar' : 2.6,
      'Mysuru Road' : 2.0
    },
    'Mysuru Road' : {
      'Deepanjali Nagar' : 2.5,
      'Nayandahalli' : 2.0
    },
    'Deepanjali Nagar' : {
      'Attiguppe' : 1.1,
      'Mysuru Road' : 2.5
    },
    'Attiguppe' : {
      'Vijayanagar' : 1.1,
      'Deepanjali Nagar' : 1.1
    },
    'Vijayanagar' : {
      'Attiguppe' : 1.1,
      'Hosahalli' : 1.5
    },
    'Hosahalli' : {
      'Vijayanagar' : 1.5,
      'Magadi Road' : 1.4
    },
    'Magadi Road' : {
      'Hosahalli' : 1.4,
      'KSR City Railway Station' : 1.5
    },
    'KSR City Railway Station' : {
      'Magadi Road' : 1.5,
      'Majestic' : 0.5
    },
    'Majestic' : {
      'KSR City Railway Station' : 0.5,
      'Chickpete' : 0.9,
      'Sampige Road': 1.2,
      'Central College' : 1.5
    },
    'Central College' : {
      'Majestic' : 1.5,
      'Vidhan Soudha' : 1
    },
    'Vidhan Soudha' : {
      'Central College' : 1,
      'Cubbon Park' : 1.1
    },
    'Cubbon Park' : {
      'Vidhan Soudha' : 1.1,
      'Mahatma Gandhi Road' : 1.2
    },
    'Mahatma Gandhi Road' : {
      'Cubbon Park' : 1.2,
      'Trinity' : 1.2,
      'Shivajinagar' : 1.1,
      'Rashtriya Military School' : 1.2
    },
    'Trinity' : {
      'Mahatma Gandhi Road' : 1.2,
      'Halasuru' : 1.3
    },
    'Halasuru' : {
      'Trinity' : 1.3,
      'Indiranagar' : 1.3
    },
    'Indiranagar' : {
      'Halasuru' : 1.3,
      'Swami Vivekananda Road' : 1.1
    },
    'Swami Vivekananda Road' : {
      'Indiranagar' : 1.1,
      'Baiyappanahalli' : 1.7
    },
    'Baiyappanahalli' : {
      'Benniganahalli' : 2.0,
      'Swami Vivekananda Road' : 1.7
    },
    'Benniganahalli' : {
      'Baiyappanahalli' : 2.0,
      'KR Pura' : 2.0
    },
    'KR Pura' : {
      'Benniganahalli' : 2.0,
      'Singayyanapalya' : 2.1,
      'Kasturinagar' : 3.4,
      'Mahadevapura' : 1
    },
    'Singayyanapalya' : {
      'KR Pura' : 2.1,
      'Garudacharpalya' : 2.4
    },
    'Garudacharpalya' : {
      'Singayyanapalya' : 2.4,
      'Hoodi' : 1.7
    },
    'Hoodi' : {
      'Garudacharpalya' : 1.7,
      'Seetharam Palya' : 1.4
    },
    'Seetharam Palya' : {
      'Hoodi' : 1.4,
      'Kundalahalli' : 1.5
    },
    'Kundalahalli' : {
      'Seetharam Palya' : 1.5,
      'Nallurhalli' : 1.5
    },
    'Nallurhalli' : {
      'Kundalahalli' : 1.5,
      'Sri Sathya Sai Hospital' : 1.1
    },
    'Sri Sathya Sai Hospital' : {
      'Nallurhalli' : 1.1,
      'Pattandur Agrahara' : 1.3
    },
    'Pattandur Agrahara' : {
      'Sri Sathya Sai Hospital' : 1.3,
      'Kadugodi Tree Park' : 1
    },
    'Kadugodi Tree Park' : {
      'Pattandur Agrahara' : 1,
      'Channasandra (Hopefarm)' : 1.4
    },
    'Channasandra (Hopefarm)' : {
      'Kadugodi Tree Park' : 1.4,
      'Whitefield (Kadugodi)' : 1.5
    },
    'Whitefield (Kadugodi)' : {
      'Channasandra (Hopefarm)' : 1.5
    },

    // Green line
    'Madavara' : {
      'Chikkabidarakallu' : 1.7
    },
    'Chikkabidarakallu' : {
      'Madavara' : 1.7,
      'Manjunathanagar' : 0.75
    },
    'Manjunathanagar' : {
      'Chikkabidarakallu' : 0.75,
      'Nagasandra' : 0.7
    },
    'Nagasandra' : {
      'Manjunathanagar' : 0.7,
      'Dasarahalli' : 2.5
    },
    'Dasarahalli' : {
      'Nagasandra' : 2.5,
      'Jalahalli' : 1.5
    },
    'Jalahalli' : {
      'Dasarahalli' : 1.5,
      'Peenya Industry' : 2.2
    },
    'Peenya Industry' : {
      'Jalahalli' : 2.2,
      'Peenya' : 1.2
    },
    'Peenya' : {
      'Peenya Industry' : 1.2,
      'Goraguntepalya' : 1.9
    },
    'Goraguntepalya' : {
      'Peenya' : 1.9,
      'Yeshwantpur' : 1
    },
    'Yeshwantpur' : {
      'Goraguntepalya' : 1,
      'Sandal Soap Factory' : 1.6
    },
    'Sandal Soap Factory' : {
      'Yeshwantpur' : 1.6,
      'Mahalakshmi' : 1.3
    },
    'Mahalakshmi' : {
      'Sandal Soap Factory' : 1.3,
      'Rajajinagar' : 1.5
    },
    'Rajajinagar' : {
      'Mahalakshmi' : 1.5,
      'Kuvempu Road' : 1.4
    },
    'Kuvempu Road' : {
      'Rajajinagar' : 1.4,
      'Srirampura' : 1.1
    },
    'Srirampura' : {
      'Kuvempu Road' : 1.1,
      'Sampige Road' : 1.5
    },
    'Sampige Road' : {
      'Srirampura' : 1.5,
      'Majestic' : 1.2
    },
    'Chickpete' : {
      'Majestic' : 0.9,
      'Krishna Rajendra Market' : 0.9
    },
    'Krishna Rajendra Market' : {
      'Chickpete' : 0.9,
      'National College' : 1.6
    },
    'National College' : {
      'Krishna Rajendra Market' : 1.6,
      'Lalbagh' : 1.2
    },
    'Lalbagh' : {
      'National College' : 1.2,
      'South End Circle' : 1.4
    },
    'South End Circle' : {
      'Lalbagh' : 1.4,
      'Jayanagar' : 1.2
    },
    'Jayanagar' : {
      'South End Circle' : 1.2,
      'Rashtreeya Vidyalaya Road' : 1.3
    },
    'Rashtreeya Vidyalaya Road' : {
      'Jayanagar' : 1.3,
      'Banashankari' : 1.7,
      'Ragigudda' : 1.5
    },
    'Banashankari' : {
      'Rashtreeya Vidyalaya Road' : 1.7,
      'Jayaprakash Nagar' : 1.1
    },
    'Jayaprakash Nagar' : {
      'Banashankari' : 1.1,
      'Yelachenahalli' : 1.2
    },
    'Yelachenahalli' : {
      'Jayaprakash Nagar' : 1.2,
      'Konanakunte Cross' : 2.0
    },
    'Konanakunte Cross' : {
      'Yelachenahalli' : 2.0,
      'Doddakallasandra' : 1.5
    },
    'Doddakallasandra' : {
      'Konanakunte Cross' : 1.5,
      'Vajarahalli' : 1.4
    },
    'Vajarahalli' : {
      'Doddakallasandra' : 1.4,
      'Thalaghattapura' : 2.0
    },
    'Thalaghattapura' : {
      'Vajarahalli' : 2.0,
      'Silk Institute' : 2.2
    },
    'Silk Institute' : {
      'Thalaghattapura' : 2.2,
    },

    // Yellow line
    'Ragigudda' : {
      'Rashtreeya Vidyalaya Road' : 1.5,
      'Jayadeva Hospital' : 1.2
    },
    'Jayadeva Hospital' : {
      'Ragigudda' : 1.2,
      'BTM Layout' : 1.4,
      'Tavarekere' : 2.0,
      'JP Nagar 4th Phase' : 1.4
    },
    'BTM Layout' : {
      'Jayadeva Hospital' : 1.4,
      'Central Silk Board' : 1.2
    },
    'Central Silk Board' : {
      'BTM Layout' : 1.2,
      'HSR Layout' : 1.6,
      'Bommanahalli' : 1.6
    },
    'Bommanahalli' : {
      'Central Silk Board' : 1.6,
      'Hongasandra' : 2.7
    },
    'Hongasandra' : {
      'Bommanahalli' : 2.7,
      'Kudlu Gate' : 1.5
    },
    'Kudlu Gate' : {
      'Hongasandra' : 1.5,
      'Singasandra' : 1.2
    },
    'Singasandra' : {
      'Kudlu Gate' : 1.2,
      'Hosa Road' : 1.8
    },
    'Hosa Road' : {
      'Singasandra' : 1.8,
      'Beratena Agrahara' : 1
    },
    'Beratena Agrahara' : {
      'Hosa Road' : 1,
      'Electronic City' : 2.9
    },
    'Electronic City' : {
      'Beratena Agrahara' : 2.9,
      'Konnapana Agrahara' : 1.5
    },
    'Konnapana Agrahara' : {
      'Electronic City' : 1.5,
      'Huskur Road' : 1.5
    },
    'Huskur Road' : {
      'Konnapana Agrahara' : 1.5,
      'Hebbagodi' : 1.5
    },
    'Hebbagodi' : {
      'Huskur Road' : 1.5,
      'Bommasandra' : 1.7
    },
    'Bommasandra' : {
      'Hebbagodi' : 1.7
    },

    // Blue line
    'HSR Layout' : {
      'Central Silk Board' : 1.6,
      'Agara Lake' : 1.3
    },
    'Agara Lake' : {
      'HSR Layout' : 1.3,
      'Iblur' : 1.4
    },
    'Iblur' : {
      'Agara Lake' : 1.4,
      'Bellandur' : 1.7
    },
    'Bellandur' : {
      'Iblur' : 1.7,
      'Devarabeesanahalli' : 1.2
    },
    'Devarabeesanahalli' : {
      'Bellandur' : 1.2,
      'Kadubeesanahalli' : 1.4
    },
    'Kadubeesanahalli' : {
      'Devarabeesanahalli' : 1.4,
      'Marathahalli' : 1.6
    },
    'Marathahalli' : {
      'Kadubeesanahalli' : 1.6,
      'ISRO (Karthik Nagar)' : 1.4
    },
    'ISRO (Karthik Nagar)' : {
      'Marathahalli' : 1.4,
      'Doddanekundi' : 1.6
    },
    'Doddanekundi' : {
      'ISRO (Karthik Nagar)' : 1.6,
      'DRDO Sports Complex' : 1.4
    },
    'DRDO Sports Complex' : {
      'Doddanekundi' : 1.4,
      'Mahadevapura' : 1.4
    },
    'Mahadevapura' : {
      'DRDO Sports Complex' : 1.4,
      'KR Pura' : 1.7
    },
    'Kasturinagar' : {
      'KR Pura' : 3.1,
      'Horamavu' : 2.1
    },
    'Horamavu' : {
      'Kasturinagar' : 2.1,
      'HRBR Layout' : 1.1
    },
    'HRBR Layout' : {
      'Horamavu' : 1.1,
      'Kalyan Nagar' : 1.3
    },
    'Kalyan Nagar' : {
      'HRBR Layout' : 1.3,
      'HBR Layout' : 1.2
    },
    'HBR Layout' : {
      'Kalyan Nagar' : 1.2,
      'Nagawara' : 1.4
    },
    'Nagawara' : {
      'HBR Layout' : 1.4,
      'Veerannapalya' : 1.3,
      'Kadugundanahalli' : 1.2
    },
    'Veerannapalya' : {
      'Nagawara' : 1.3,
      'Kempapura' : 1.4
    },
    'Kempapura' : {
      'Veerannapalya' : 1.4,
      'Hebbal' : 1.5
    },
    'Hebbal' : {
      'Kempapura' : 1.5,
      'Kodigehalli' : 2.0
    },
    'Kodigehalli' : {
      'Hebbal' : 2.0,
      'Jakkur Cross' : 2.4
    },
    'Jakkur Cross' : {
      'Kodigehalli' : 2.4,
      'Yelahanka' : 3.5
    },
    'Yelahanka' : {
      'Jakkur Cross' : 3.5,
      'Bagalur Cross' : 3.6
    },
    'Bagalur Cross' : {
      'Yelahanka' : 3.6,
      'Bettahalasuru' : 3.5
    },
    'Bettahalasuru' : {
      'Bagalur Cross' : 3.5,
      'Doddajala' : 5.5
    },
    'Doddajala' : {
      'Bettahalasuru' : 5.5,
      'Kempegowda International Airport' : 3.8
    },
    'Kempegowda International Airport' : {
      'Doddajala' : 3.8
    },

    // Pink line
    'Kadugundanahalli' : {
      'Nagawara' : 1.2,
      'Venkateshpura' : 1.2
    },
    'Venkateshpura' : {
      'Kadugundanahalli' : 1.2,
      'Tannery Road' : 1.4
    },
    'Tannery Road' : {
      'Venkateshpura' : 1.4,
      'Pottery Town' : 1.5
    },
    'Pottery Town' : {
      'Tannery Road' : 1.5,
      'Cantonment' : 1.3
    },
    'Cantonment' : {
      'Pottery Town' : 1.3,
      'Shivajinagar' : 1.3
    },
    'Shivajinagar' : {
      'Cantonment' : 1.3,
      'Mahatma Gandhi Road' : 1.1
    },
    'Rashtriya Military School' : {
      'Mahatma Gandhi Road' : 1.2,
      'Langford Town' : 1.2
    },
    'Langford Town' : {
      'Rashtriya Military School' : 1.2,
      'Lakkasandra' : 1.5
    },
    'Lakkasandra' : {
      'Langford Town' : 1.5,
      'Dairy Circle' : 2.5
    },
    'Dairy Circle' : {
      'Lakkasandra' : 2.5,
      'Tavarekere' : 2.5
    },
    'Tavarekere' : {
      'Dairy Circle' : 2.5,
      'Jayadeva Hospital' : 2.0
    },
    'JP Nagar 4th Phase' : {
      'Jayadeva Hospital' : 1.4,
      'IIM Bangalore' : 1.5
    },
    'IIM Bangalore' : {
      'JP Nagar 4th Phase' : 1.5,
      'Hulimavu' : 1.4
    },
    'Hulimavu' : {
      'IIM Bangalore' : 1.4,
      'Kalena Agrahara' : 2.1
    },
    'Kalena Agrahara' : {
      'Hulimavu' : 2.1,
    },
  };
  
  // Function to calculate the shortest route and fare
  function calculate() {
    // Get the source and destination stations from the dropdowns
    const sourceStation = document.getElementById('source').value;
    const destinationStation = document.getElementById('destination').value;
  
    // Check if source and destination are selected
    if (sourceStation === '' || destinationStation === '') {
      alert('Please select source and destination stations.');
      return;
    }

    if(sourceStation === destinationStation) {
        alert('Source and destination should not be same');
        return;
    }
  
    // Dijkstra's algorithm implementation to find the shortest route and fare
    const stations = Object.keys(metroStations);
    const INF = Number.MAX_SAFE_INTEGER;
  
    // Create a distance matrix and initialize with Infinity
    const distances = {};
    stations.forEach((station) => (distances[station] = INF));
    distances[sourceStation] = 0;
  
    const visited = {};
    const path = {};
  
    while (true) {
      let currentStation = null;
  
      // Find the nearest station
      stations.forEach((station) => {
        if (
          !visited[station] &&
          (currentStation === null ||
            distances[station] < distances[currentStation])
        ) {
          currentStation = station;
        }
      });
  
      if (currentStation === null || distances[currentStation] === INF) {
        break;
      }
  
      visited[currentStation] = true;
  
      // Update distances to adjacent stations
      for (const neighbor in metroStations[currentStation]) {
        const distance =
          distances[currentStation] + metroStations[currentStation][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          path[neighbor] = currentStation;
        }
      }
    }
  
    // Build the route and calculate the fare
    const route = [];
    let current = destinationStation;
    while (current !== sourceStation) {
      route.unshift(current);
      current = path[current];
    }
    route.unshift(sourceStation);
  
    const d = distances[destinationStation];
    const dist = d.toFixed(2);
    const f = 2.5 * distances[destinationStation];
    const fare = f.toFixed(2);
    // Display the results
    document.getElementById('route').innerHTML = '- '+route.join('<br>- ');
    document.getElementById('dist').textContent = dist + ' kms';
    document.getElementById('fare').textContent = fare + ' rupees';
  }