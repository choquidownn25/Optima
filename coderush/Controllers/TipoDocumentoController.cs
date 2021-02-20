using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace coderush.Controllers
{
    [Authorize(Roles = Pages.MainMenu.TipoDocumento.RoleName)]
    public class TipoDocumentoController : Controller 
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
