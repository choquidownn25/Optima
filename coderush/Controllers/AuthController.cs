using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace DrHelp.Controllers
{
    [Route("auth")]
    public class AuthController : Controller
    {
        [Route("singinfa")]
        public IActionResult SingInfa()
        {
            return Challenge(new AuthenticationProperties { RedirectUri = "/" });
        }
    }
}