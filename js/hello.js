var fdb = new ForerunnerDB();
var db = fdb.db("hello");


var studentCollection = db.collection('students');

// for (var i = 0; i < 10; i++) {
// //var newStudent = {
// var name: "Koding"+ math.floor(100*math.random()) ,
// var age: math.floor(100*math.random())
// }

//studentCollection.insert(newStudent)
//studentCollection.save()

//};


studentCollection.load()

function afterload() {
    var students = studentCollection.find()
    console.log(students)
    for (var i = 0; i < students.length; i++) {
        console.log(students[i]._id)
        $("#studentTable").append("<tr><td class ='studentsId'>" + students[i]._id + "</td><td>" + students[i].name + "</td > < /tr>");

    }
    $("#studentTable").on("click", ".studentsId" ,function()  {
        var studentsId = $(this).text()
        var query = {
        	_id : studentsId
        }
        var student = studentCollection.find(query)[0];
        console.log(student)
        $("#studentsname").text(student.name)
        $("#studentid").text(student._id)
        $("#studentage").text(student.age)
        $("#studentsinfo").modal('show')
        
    });
}

setTimeout(afterload, 1000)



function creat () {
	var name = $("#name").val();
	var age = $("#age").val();
	var newStudents = {
		name : name,
		age : age,
	}
	studentCollection.insert(newStudents)
	studentCollection.save()
	var student = studentCollection.find(newStudents)[0]
	$("#studentTable").append("<tr><td class ='studentsId'>" + student._id + "</td><td>" + student.name + "</td > < /tr>");
}


$('#creat').click(creat)