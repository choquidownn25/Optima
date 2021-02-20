using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace coderush.Models.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required(ErrorMessage = "Eres medico o paciente?")]
        [StringLength(25)]
        [Display(Name = "Tipo Registro")]
        public string TipoRegistro { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
