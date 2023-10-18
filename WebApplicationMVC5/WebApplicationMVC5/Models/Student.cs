using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationMVC5.Models
{
    public class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public DateTime StudentDateofBirth { get; set; }
        public string StudentIDNumber { get; set; }


        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}