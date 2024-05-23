//유저가 값을 입력한다.
//+버튼을 누르면, 할일이 추가된다.
//delete버튼을 누르면 할 일이 삭제된다.
//check버튼을 누르면 할 일이 끝나면서 밑줄이 간다.
//1.check 누를 시 true를 false로
//2.true이면 끝난 걸로 보고 밑줄
//3.false이면 안끝났으니까 그대로
//진행 중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남탭은 끝난 아이탬만, 진행중 탭은 진행중인 아이템만
//

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
	let taskContent = taskInput.value.trim();//앞뒤 공백 제거
	if (taskContent !== "") {
		let task = {//끝났는지 안끝났는지 등의 추가 정보가 필요하므로 객체 추가
			id: randomIDGenerate(),
			taskContent: taskContent,
			isComplete: false//끝났는지 안끝났는지
		};
		taskList.push(task);
		taskInput.value = "";
		render();
	}
}

function render() {
	let resultHTML = '';
	for (let i = 0; i < taskList.length; i++) {
		if (taskList[i].isComplete == true) {
			resultHTML += `<div class="task">
                <div class ="task-done">${taskList[i].taskContent}</div>
                <div>
                    <i class="fa-regular fa-circle-check" onclick="taskComplete('${taskList[i].id}')"></i>
                    <i class="fa-solid fa-trash-can" onclick="deleteTask('${taskList[i].id}')"></i> 
                </div>
            </div>`;
		} else {
			resultHTML += `<div class="task">
                <div>${taskList[i].taskContent}</div>
                <div>
                    <i class="fa-regular fa-circle-check" onclick="taskComplete('${taskList[i].id}')"></i>
                    <i class="fa-solid fa-trash-can" onclick="deleteTask('${taskList[i].id}')"></i> 
                </div>
            </div>`;
		}
	}
	document.getElementById("task-board").innerHTML = resultHTML;
}

function taskComplete(id) {
	for (let i = 0; i < taskList.length; i++) {
		if (taskList[i].id == id) {
			taskList[i].isComplete = !taskList[i].isComplete;
			break;
		}
	}
	render();
}

function deleteTask(id) {
	for (let i = 0; i < taskList.length; i++) {
		if (taskList[i].id == id) {
			taskList.splice(i, 1)//삭제하는데 몇개의 아이템 삭제할지 알려줌
			break;
		}
	}
	render();
}

function randomIDGenerate() {
	return '_' + Math.random().toString(36).substring(2, 9);/*데이터에 랜덤 아이디 값을 지정해준거야. */
}


