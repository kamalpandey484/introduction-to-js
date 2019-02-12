(function emoloyeeDetail()
{
	var employee = [
	    { Name: 'Kamal', Age: 22, Salary: 7000, DOB: '27/11/1996' },
	    { Name: 'Joyesh', Age: 23, Salary: 6000, DOB: '23/04/1995' },
	    { Name: 'Rohit', Age: 27, Salary: 800, DOB: '27/11/1993' },
	    { Name: 'Mohit', Age: 20, Salary: 950, DOB: '27/11/1993' },
	    { Name: 'Sonu', Age: 18, Salary: 1000, DOB: '27/11/1993' },
	];

	console.log("1.");
	console.log("List of all employees= ",employee);
	console.log("2.");

	for(var i=0;i < employee.length;i++)
	{
	    if(employee[i].Salary > 5000)
	    console.log("Employees whose salary is greater then 5000 = ",employee[i]);
	}

	console.log("3.");

	for(var i=0;i < employee.length;i++)
	{
	    if(employee[i].Age < 20)
	    console.log("Employees whose age is less then 20 = ",employee[i]);
		else if(employee[i].Age >= 20 && employee[i].Age < 25)
		console.log("Employees whose age is greater then or equal to 20 and less then 25 = ",employee[i]);
		else
		console.log("Employees whose age is greater then 25 = ",employee[i]);
	}

	console.log("4.");

	for(var i=0;i < employee.length;i++)
	{
	    if(employee[i].Salary < 1000 && employee[i].Age > 20)
	    {
	        var inc = employee[i].Salary * 5;
	        console.log("Salary of ",employee[i].Name," after increment= ",inc);
	    }
	    
	}
}
());