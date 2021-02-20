using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using coderush.Data;
using coderush.Models;
using coderush.Services;
using coderush.Models.SyncfusionViewModels;
using Microsoft.AspNetCore.Authorization;
using Prueba.Models;

namespace coderush.Controllers.Api
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Departments")]
    public class DepartmentsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly INumberSequence _numberSequence;
        private readonly PruebaContext _pruebaContext = new PruebaContext();
        //private DepartamentLogic _departamentLogic ;
        public DepartmentsController(ApplicationDbContext contexts)
        {
            _context = contexts;
            
        }

        public IActionResult Index()
        {
            return View();
        }

        ////// GET: api/SalesType
        [HttpGet]
        public async Task<IActionResult> GetDepartments()
        {
            ////_departamentLogic = new DepartamentLogic(_pruebaContext);
            //var resul = _departamentLogic.GetDepartamento();
            List<Departments> Items = await _pruebaContext.Departments.ToListAsync();
            //List<Departments> Items = await resul;
            int Count = Items.Count();
            return Ok(new { Items, Count });
            //return await resul;
        }


        [HttpPost("[action]")]
        public IActionResult Insert([FromBody]CrudViewModel<Departments> payload)
        {
            Departments departments = payload.value;
            _pruebaContext.Departments.Add(departments);
            _pruebaContext.SaveChanges();
            return Ok(departments);
        }

        [HttpPost("[action]")]
        public IActionResult Update([FromBody]CrudViewModel<Departments> payload)
        {
            Departments departments = payload.value;
            _pruebaContext.Departments.Update(departments);
            _pruebaContext.SaveChanges();
            return Ok(departments);
        }

        [HttpPost("[action]")]
        public IActionResult Remove([FromBody]CrudViewModel<Departments> payload)
        {
            Departments departments = _pruebaContext.Departments
                .Where(x => x.Id == (int)payload.key)
                .FirstOrDefault();
            _pruebaContext.Departments.Remove(departments);
            _pruebaContext.SaveChanges();
            return Ok(departments);

        }

    }
}
