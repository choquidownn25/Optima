using System;
using System.Collections.Generic;

namespace Prueba.Models
{
    public partial class Employees
    {
        public Employees()
        {
            InverseManager = new HashSet<Employees>();
        }

        public int Id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string PhoneNumber { get; set; }
        public int? ManagerId { get; set; }
        public int DepartmentId { get; set; }
        public int Salary { get; set; }
        public DateTime HireDate { get; set; }

        public virtual Departments Department { get; set; }
        public virtual Employees Manager { get; set; }
        public virtual ICollection<Employees> InverseManager { get; set; }
    }
}
