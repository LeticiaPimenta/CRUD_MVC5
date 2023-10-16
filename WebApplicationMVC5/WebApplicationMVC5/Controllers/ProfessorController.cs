using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationMVC5.Models;

namespace WebApplicationMVC5.Controllers
{
    public class ProfessorController : Controller
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

        #region Method for Add Professor - CREATE

        //POST Professor/AddProfessor
        [HttpPost]
        public JsonResult AddProfessor(Professors professor)
        {
            if (professor != null)
            {
                using (var db = new CoursesEntities())
                {
                    db.Professors.Add(professor);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Method to Update Professor - UPDATE

        [HttpPost]
        public JsonResult UpdateProfessor(Professors professor)
        {
            using (var db = new CoursesEntities())
            {
                var professorUpdated = db.Professors.Find(professor.Professor_Id);

                if (professorUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    professorUpdated.Professor_Name = professor.Professor_Name;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Method to delete Professor - DELETE

        [HttpPost]
        public JsonResult DeleteProfessor(int id)
        {
            using (var db = new CoursesEntities())
            {
                var professor = db.Professors.Find(id);
                if (professor == null)
                {
                    return Json(new { success = false });
                }

                db.Professors.Remove(professor);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}