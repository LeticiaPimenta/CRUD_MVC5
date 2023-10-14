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
    }
}