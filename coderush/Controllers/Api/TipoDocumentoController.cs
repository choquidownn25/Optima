using Microsoft.EntityFrameworkCore;
using coderush.Data;
using coderush.Models;
using coderush.Services;
using coderush.Models.SyncfusionViewModels;
using Microsoft.AspNetCore.Authorization;
//using Conexion.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
//using LogicaCapa.Repositorios;
using System;
using Prueba.Models;

namespace coderush.Controllers.Api
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/TipoDocumento")]
    public class TipoDocumentoController : Controller
    {
        private readonly ApplicationDbContext _context;
        private PruebaContext _pruebaContext = new PruebaContext();
        //private TipoDocumentoLogic tipoDocumentoLogic;
        public TipoDocumentoController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        ////// GET: api/SalesType
        [HttpGet]
        public async Task<IActionResult> GetTipoDocumento()
        {
            try
            {
                //tipoDocumentoLogic = new TipoDocumentoLogic(_pruebaContext);
                //ar resul = tipoDocumentoLogic.GetTipoDocumento();
                List<TipoDocumento> Items = await _pruebaContext.TipoDocumento.ToListAsync();
                int Count = Items.Count();
                return Ok(new { Items, Count });
                // await resul;
            }catch(Exception e)
            {
                return null;
            }
            

        }


        [HttpPost("[action]")]
        public IActionResult Insert([FromBody]CrudViewModel<TipoDocumento> payload)
        {
            TipoDocumento TipoDocumento = payload.value;
            _pruebaContext.TipoDocumento.Add(TipoDocumento);
            _pruebaContext.SaveChanges();
            return Ok(TipoDocumento);
        }

        [HttpPost("[action]")]
        public IActionResult Update([FromBody]CrudViewModel<TipoDocumento> payload)
        {
            TipoDocumento tipoDocumento = payload.value;
            _pruebaContext.TipoDocumento.Update(tipoDocumento);
            _pruebaContext.SaveChanges();
            return Ok(tipoDocumento);
        }

        [HttpPost("[action]")]
        public IActionResult Remove([FromBody]CrudViewModel<TipoDocumento> payload)
        {
            TipoDocumento tipoDocumento = _pruebaContext.TipoDocumento
                .Where(x => x.Id == (int)payload.key)
                .FirstOrDefault();
            _pruebaContext.TipoDocumento.Remove(tipoDocumento);
            _pruebaContext.SaveChanges();
            return Ok(tipoDocumento);

        }
    }
}
