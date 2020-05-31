var firstDiv = document.createElement('div');
firstDiv.setAttribute('class', 'location');
document.body.appendChild(firstDiv);

var h1 = document.createElement('h1');
h1.setAttribute('class', 'location-timezone');
h1.textContent = 'Timezone';
document.body.appendChild(h1);
firstDiv.appendChild(h1);

var secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'temperature');
document.body.appendChild(secondDiv);

var degree = document.createElement('div');
degree.setAttribute('class', 'degree-section');
document.body.appendChild(degree);
secondDiv.append(degree);

var h2 = document.createElement('h2');
h2.setAttribute('class', 'temperature-degree');
h2.textContent = '22';
document.body.appendChild(h2);
degree.appendChild(h2);

var span = document.createElement('span');
span.textContent = '°C';
document.body.appendChild(span);
degree.appendChild(span);

var secondInnerDiv = document.createElement('div');
secondInnerDiv.setAttribute('class', 'temperature-description');
secondInnerDiv.textContent = 'Its getting hot in here';
document.body.appendChild(secondInnerDiv);
secondDiv.appendChild(secondInnerDiv);


