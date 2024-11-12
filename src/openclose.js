openNav = function () {
  document.getElementById("mySidenav").style.width = "370px";
};

openNav1 = function () {
  document.getElementById("mySidenavData").style.width = "370px";
  // document.getElementById("mySidenavData").style.opacity = "1";
  document.getElementById("mySidenavData").style.zIndex = "125";
};

closeNav = function () {
  document.getElementById("mySidenav").style.width = "0";
};

closeNav1 = function () {
  document.getElementById("mySidenavData").style.width = "0";
  document.getElementById("mySidenav").style.width = "370px";
  // document.getElementById("mySidenavData").style.opacity = "0";
  document.getElementById("mySidenavData").style.zIndex = "75";
};
