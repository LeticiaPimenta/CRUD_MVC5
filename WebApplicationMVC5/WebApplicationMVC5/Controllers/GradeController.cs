using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class GradeController : Controller
    {
        #region Method for Listing Grades

        //GET Grades/GetGrades
        public JsonResult GetGrades()
        {
            using (var db = new CoursesEntities())
            {
                List<Grades> listingGrades = db.Grades.ToList();

                return Json(listingGrades);
            }
        }

        #endregion

        #region Method for Add Grade - CREATE

        //POST Grade/AddGrade
        [HttpPost]
        public JsonResult AddGrade(Grades grade)
        {
            if (grade != null)
            {
                using (var db = new CoursesEntities())
                {
                    db.Grades.Add(grade);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Method to Update Grade - UPDATE

        [HttpPost]
        public JsonResult UpdateGrade(Grades grade)
        {
            using (var db = new CoursesEntities())
            {
                var gradeUpdated = db.Grades.Find(grade.Grades_Id);

                if (gradeUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    gradeUpdated.Student_Grade = grade.Student_Grade;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Method to delete Grade - DELETE

        [HttpPost]
        public JsonResult DeleteGrade(int id)
        {
            using (var db = new CoursesEntities())
            {
                var grade = db.Grades.Find(id);
                if (grade == null)
                {
                    return Json(new { success = false });
                }

                db.Grades.Remove(grade);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}