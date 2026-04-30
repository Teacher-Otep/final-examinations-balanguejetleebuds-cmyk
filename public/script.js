function showSection(sectionID) {
    document.getElementById('home').style.display = 'none';
    document.querySelectorAll('.content').forEach(s => s.style.display = 'none');
    const active = document.getElementById(sectionID);
    if(active) active.style.display = 'block';
}

function hideAllContent() {
    document.querySelectorAll('.content').forEach(s => s.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}

function clearFields() {
    document.querySelectorAll('.field').forEach(input => input.value = '');
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const section = params.get('section'); // Check for the section parameter

    if (status === 'success') {
        alert("Added Successfully");
        showSection('create');
    } else if (status === 'updated') {
        alert("Update Successfully");
        showSection('update');
    } else if (status === 'deleted') {
        alert("Deleted Successfully");
        showSection('delete');
    } 
    // NEW: If section is update or delete, keep that section open
    else if (section) {
        showSection(section);
    } 
    // Handle Search persistence
    else if (params.has('search_u')) {
        showSection('update');
    } else if (params.has('search_d')) {
        showSection('delete');
    } else {
        hideAllContent();
    }
}
