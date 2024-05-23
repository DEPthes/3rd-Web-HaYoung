const button = document.querySelector('.button');
const placeSection = document.querySelector('.place');
const temperatureSection = document.querySelector('.temperature');
const descriptionSection = document.querySelector('.description');
const windSection = document.querySelector('.windSpeed');


const API_KEY = '6cc5d263d12d0873c151ed033170776a';
//사용자의 위치를 추적하기
button.addEventListener('click', () => {
	navigator.geolocation.getCurrentPosition(success);
});
//추적하는 것을 성공한 경우에만!
const success = (position) => {
	const latitude = position.coords.latitude;//위도
	const longitude = position.coords.longitude;//경도
	getWeather(latitude, longitude);//getweather함수에 위도와 경도를 전달하여  날씨 정보를 가져온다.

}
//fetch로 API호출, 응답데이터를 JSON으로 인코딩
const getWeather = (lat, lon) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
		.then((response) => {
			return response.json();//json으로 변환
		})
		.then((json) => {//json데이터 가져오기
			console.log(json);
			//화면에 받아온 데이터 출력
			const place = json.name;
			const temperature = json.main.temp;
			const windSpeed = json.wind.speed;
			const description = json.weather[0].main;

			placeSection.innerText = place;
			temperatureSection.innerText = temperature;
			windSection.innerText = windSpeed;
			descriptionSection.innerText = description;
		})
		.catch((error) => {
			alert(error);//fetch 안되면 error
		});
}
//추적 실패한 경우
const fail = () => {
	alert("위치 파악에 실패하여 날씨를 확인할 수 없습니다.")
}

