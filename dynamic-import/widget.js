export default function createButton(name, fn) {
	const btn = document.createElement("button");
	btn.innerHTML = name;
	btn.style.margin = "5px";
	btn.onclick = fn;
	document.body.appendChild(btn);
}