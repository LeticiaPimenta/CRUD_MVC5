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

        #region Method for Add Discipline - CREATE

        //POST Discipline/AddDiscipline
        [HttpPost]
        public JsonResult AddDiscipline(Discipline discipline)
        {
            if (discipline != null)
            {
                using (var db = new CoursesEntities())
                {
                    db.Discipline.Add(discipline);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Method to Update Discipline - UPDATE

        [HttpPost]
        public JsonResult UpdateDiscipline(Discipline discipline)
        {
            using (var db = new CoursesEntities())
            {
                var dsiciplineUpdated = db.Discipline.Find(discipline.Discipline_Id);

                if (dsiciplineUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    dsiciplineUpdated.Discipline_Name = discipline.Discipline_Name;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Method to delete Discipline - DELETE

        [HttpPost]
        public JsonResult DeleteDiscipline(int id)
        {
            using (var db = new CoursesEntities())
            {
                var discipline = db.Discipline.Find(id);
                if (discipline == null)
                {
                    return Json(new { success = false });
                }

                db.Discipline.Remove(discipline);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}