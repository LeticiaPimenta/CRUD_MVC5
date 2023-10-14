using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class DisciplineController : Controller
    {
        #region Method for Listing Disciplines

        //GET Disciplines/GetDisciplines
        public JsonResult GetDisciplines()
        {
            using (var db = new CoursesEntities())
            {
                List<Discipline> listingDisciplines = db.Discipline.ToList();

                return Json(listingDisciplines);
            }
        }

        #endregion
    }
}