using System.ComponentModel.DataAnnotations;

namespace coderush.Models.AccountViewModels
{
    public class RegisterViewModel
    {

        [Required(ErrorMessage = "Eres auxiliar o bacteriologo?")]
        [StringLength(25)]
        [Display(Name = "Tipo Registro")]
        public string TipoRegistro { get; set; }

        [Required(ErrorMessage = "No te olvides del nombre")]
        [StringLength(25)]
        [Display(Name = "Nombre")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "No te olvides del apellido")]
        [StringLength(25)]
        [Display(Name = "Apellido")]
        public string Apellido { get; set; }

        //[Required(ErrorMessage = "No te olvides la ciudad")]
        //[StringLength(256)]
        //[Display(Name = "Ciudad")]
        //public string Ciudad { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        //[Required]
        //[StringLength(25)]
        //[Display(Name = "Direccion")]
        //public string Direccion { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "El {0} al menos debe ser {2} y al máximo {1} Caracteres largas.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "La contraseña y la contraseña de confirmación no coinciden.")]
        public string ConfirmPassword { get; set; }
    }
}
