export function changeColor(elementClicked, elementTarget, classElement) {
	let eClicked = document.querySelector(elementClicked);
	let eTarget = document.querySelector(elementTarget);
	eClicked.addEventListener('click', (e) => {
		eTarget.classList.add(classElement)
    });
}
