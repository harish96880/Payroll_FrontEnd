const employeeLoginCard = () => {
  document.getElementById("center-card-employee").style.display = "block";
  document.getElementById("sheet").style.display = "block";
};

const closeEmployeeCard = () => {
  document.getElementById("center-card-employee").style.display = "none";
  document.getElementById("sheet").style.display = "none";
};

const adminLoginCard = () => {
  document.getElementById("center-card-admin").style.display = "block";
  document.getElementById("sheet").style.display = "block";
};

const closeAdminCard = () => {
  document.getElementById("center-card-admin").style.display = "none";
  document.getElementById("sheet").style.display = "none";
};

const closeGenerate = () => {
  document.getElementById("center-card-admin-page").style.display = "none";
  document.getElementById("sheet").style.display = "none";
};

const openGenerate = () => {
  document.getElementById("center-card-admin-page").style.display = "block";
  document.getElementById("sheet").style.display = "block";
};  

const validateEmployee = () => {

  empId = document.getElementById("employeeId").value;
  mail = document.getElementById("employeeEmail").value;

  if(empId == 1001 && mail == "sriharish_r@solartis.com") {
    window.location.href = 'Employee.html'
  }
  else {
    window.alert("Invalid login credentials")
  }

}

const validateAdmin = () => {

  adminName = document.getElementById("adminName").value;
  adminId = document.getElementById("adminId").value;

  if(adminName == "harish" && adminId == "12345") {
    window.location.href = 'Admin.html'
  }
  else {
    window.alert("Invalid login credentials")
  }

}