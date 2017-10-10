using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Class
{
    public class Carta
    {
        public enum NAIPE
        {
            COPAS,
            ESPADAS,
            PAUS,
            OUROS
        }

        public enum VALOR
        {
            DOIS = 2, TRES, QUATRO, CINCO, SEIS, SETE, OITO,
            NOVE, DEZ, VALETES, RAINHA, REI, AS
        }


        public NAIPE Mnaipe { get; set; }
        public VALOR Mvalor { get; set; }
    }
}