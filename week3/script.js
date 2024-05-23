class Calculator {
	constructor(showBackNum) {
		this.showBackNum = showBackNum
		this.displayContent = ''
		this.clear()
	}

	appendNumber(number) {
		this.displayContent += number
	}

	appendOperator(operator) {
		this.displayContent += operator//숫자버튼을 클릭하면 displayContent에 숫자가 추가됨,input에도 표시가 됨.
	}

	updateDisplay() {
		this.showBackNum.value = this.displayContent
	}

	clear() {
		this.displayContent = ''
		this.showBackNum.value = 0
	}

	compute() {
		this.displayContent = eval(this.displayContent)/*eval */
	}
}

const buttons = document.querySelectorAll('button')
const showBackNum = document.querySelector('input')

const calculator = new Calculator(showBackNum) //인스턴스 생성

buttons.forEach(button => {/*forEach : for문 역할 */
	button.addEventListener('click', () => {
		switch (button.dataset.type) {
			case 'operator':
				calculator.appendOperator(button.innerText)
				calculator.updateDisplay()
				break
			case 'ac':
				calculator.clear()
				break
			case 'equal':
				calculator.compute()
				calculator.updateDisplay()
				break
			default:
				calculator.appendNumber(button.innerText)
				calculator.updateDisplay()
				break
		}
	})
})

