function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    sidebar.style.transition = 'all ease .5s';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    sidebar.style.transition = 'all ease .5s';
}
function showLogin() {
    document.querySelector('.loginForm').style.display = 'flex';
    document.querySelector('.signUpForm').style.display = 'none';
}