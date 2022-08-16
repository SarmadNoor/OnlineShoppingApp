using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PeijiShoppingSolution.Model
{
    public class Users
    {
        public int ID { get; set; }
        public string UserID { get; set; }
        public string Password { get; set; }
        public bool isAdmin { get; set; }
        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }
    }
}
