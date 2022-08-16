using Microsoft.AspNetCore.Mvc;
using PeijiShoppingSolution.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeijiShoppingSolution.Controllers
{

    public class DashboardController : Controller
    {
        private readonly PeijiShoppingContext _context;
        public DashboardController(PeijiShoppingContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _context.Products.ToList();
            if (products == null)
            {
                return NotFound();
            }
           return Json(products);
        }
    }




}
