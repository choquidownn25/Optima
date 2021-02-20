using System;
using System.Collections.Generic;

namespace Conexion.Models
{
    public partial class TipoDocumento
    {
        public int Id { get; set; }
        public int Codigo { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Sigla { get; set; }
        public bool Activo { get; set; }
    }
}
