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

                return Json(listingCourses);
            }
        }

        #endregion
    }
}