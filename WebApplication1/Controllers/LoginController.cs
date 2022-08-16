using Microsoft.AspNetCore.Mvc;
using PeijiShoppingSolution.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeijiShoppingSolution.Controllers
{
    public class LoginController : Controller
    {
        private readonly PeijiShoppingContext _context;

        public LoginController(PeijiShoppingContext context)
        {
            _context = context;
        }

        public class LoginRequest
        {
          public string userId { get; set; }
          public string password { get; set; }
        }
        [HttpPost]
        public bool Login([FromBody] LoginRequest request)
        {
            var users =  _context.Users.FirstOrDefault(x => x.UserID == request.userId && x.Password == request.password);
            if(users == null)
            {
                return false;
            }
            return true;
        }

    }
}
