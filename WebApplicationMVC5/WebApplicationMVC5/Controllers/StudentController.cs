using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class StudentController : Controller
    {
        #region Method for Listing Students

        //GET Students/GetStudents
        public JsonResult GetStudents()
        {
            using (var db = new CoursesEntities())
            {
                List<Students> listingStudents = db.Students.ToList();

                return Json(listingStudents);
            }
        }

        #endregion

        #region Method for Add Student - CREATE

        //POST Student/AddStudent
        [HttpPost]
        public JsonResult AddStudent(Students student)
        {
            if (student != null)
            {
                using (var db = new CoursesEntities())
                {
                    db.Students.Add(student);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Method to Update Student - UPDATE

        [HttpPost]
        public JsonResult UpdateStudent(Students student)
        {
            using (var db = new CoursesEntities())
            {
                var studentUpdated = db.Students.Find(student.Student_Id);

                if (studentUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    studentUpdated.Student_Name = student.Student_Name;
                    studentUpdated.Student_Date_of_Birth = student.Student_Date_of_Birth;
                    studentUpdated.Student_ID_Number = student.Student_ID_Number;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Method to delete Student - DELETE

        [HttpPost]
        public JsonResult DeleteStudent(int id)
        {
            using (var db = new CoursesEntities())
            {
                var student = db.Students.Find(id);
                if (student == null)
                {
                    return Json(new { success = false });
                }

                db.Students.Remove(student);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}