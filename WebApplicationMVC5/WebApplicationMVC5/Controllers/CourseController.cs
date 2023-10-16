using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class CourseController : Controller
    {
        #region Method for Listing Courses

        //GET Courses/GetCourse
        public JsonResult GetCourse()
        {
            using (var db = new CoursesEntities())
            {
                List<Courses> listingCourses = db.Courses.ToList();

                return Json(listingCourses, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Method for Add Course - CREATE

        //POST Courses/AddCourse
        [HttpPost]
        public JsonResult AddCourse(Courses course)
        {
            if (course != null)
            {
                using (var db = new CoursesEntities())
                {
                    db.Courses.Add(course);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Method to Update Course - UPDATE

        [HttpPost]
        public JsonResult UpdateCourse(Courses course)
        {
            using (var db = new CoursesEntities())
            {
                var courseUpdated = db.Courses.Find(course.Course_Id);

                if (courseUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    courseUpdated.Course_Name = course.Course_Name;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Method to delete Course - DELETE

        [HttpPost]
        public JsonResult DeleteCourse(int id)
        {
            using (var db = new CoursesEntities())
            {
                var course = db.Courses.Find(id);
                if (course == null)
                {
                    return Json(new { success = false });
                }

                db.Courses.Remove(course);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}