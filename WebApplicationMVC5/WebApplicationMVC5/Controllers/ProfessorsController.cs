using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class ProfessorsController : Controller
    {
        #region Method for Listing Professors

        //GET Professors/GetProfessors
        public JsonResult GetProfessors()
        {
            using (var db = new CoursesEntities())
            {
                List<Professors> listingProfessors = db.Professors.ToList();

                return Json(listingProfessors);
            }
        }

        #endregion
    }
}