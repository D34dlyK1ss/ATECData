function addRow() {
	let img = document.getElementById('image').value;
	let name = document.getElementById('name').value;
	let category = document.getElementById('category').value;
	let description = document.getElementById('description').value;
	let warn = '';
	
	if (img.length < 3) warn += 'Image is invalid \n';
	if (name.length < 3) warn += 'Name is invalid \n';
	if (category.length < 3) warn += 'Category is invalid';
	if (description.length < 3) warn += 'Description is invalid';
	
	if (warn != '')
		alert(warn);
	else
		document.getElementById('tb').innerHTML += '<tr>' + '<td>' + img + '</b>' + '<td>' + name + '</b>' + '<td>' + category + '</b>' + '<td>' + img + '</b>' + '<td>' + '</tr>';
}