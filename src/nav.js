openNav = function () {
    document.getElementById('mySidenav').style.width = '370px';
};

openNavData = function () {
    document.getElementById('mySidenavData').style.width = '370px';
    document.getElementById('mySidenavData').style.zIndex = '125';
};

closeNav = function () {
    document.getElementById('mySidenav').style.width = '0';
};

closeNavData = function () {
    document.getElementById('mySidenavData').style.width = '0';
    document.getElementById('mySidenav').style.width = '370px';
    document.getElementById('mySidenavData').style.zIndex = '75';
};
