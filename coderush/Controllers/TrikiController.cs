using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrHelp.Controllers
{
    public class TrikiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
