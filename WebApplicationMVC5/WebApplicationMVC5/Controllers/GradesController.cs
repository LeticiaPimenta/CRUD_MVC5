using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class GradesController : Controller
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
    }
}