using Microsoft.AspNetCore.Mvc;
using PeijiShoppingSolution.Data;
using PeijiShoppingSolution.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeijiShoppingSolution.Controllers
{
    public class ShoppingCartController:Controller
    {

        private readonly PeijiShoppingContext _context;
        public ShoppingCartController(PeijiShoppingContext context)
        {
            _context = context;
        }

        public class ShoppingCartRequest
        {
            public int UserId { get; set; }
            public int ProductId { get; set; }


        }

        public class ProductInCarts: Products
        {
            public int Quantity { get; set; }

        }

        [HttpPost]
        public IActionResult AddtoCart([FromBody] ShoppingCartRequest shoppingCartRequest)
        {
            ShoppingCart shoppingCart = new ShoppingCart();
            if(CheckIfItemsExist(shoppingCartRequest.ProductId, shoppingCartRequest.UserId))
            {
               ShoppingCart scart = _context.ShoppingCart.FirstOrDefault(s => s.ProductId == shoppingCartRequest.ProductId && s.UserId == shoppingCartRequest.UserId);
               scart.Quantity = scart.Quantity + 1;
                _context.Update(scart);
                _context.SaveChanges();
               return Ok();
            }

            shoppingCart.ProductId = shoppingCartRequest.ProductId;
            shoppingCart.Quantity = 1;
            shoppingCart.UserId = shoppingCartRequest.UserId;
            _context.ShoppingCart.Add(shoppingCart);
            _context.SaveChanges();
            return Ok();
        }
        private bool CheckIfItemsExist(int productId, int userId)
        {
            if (_context.ShoppingCart.Count(s => s.ProductId == productId && s.UserId == userId) > 0)
            {
                return true;
            }
            return false;
        }

        [HttpGet]
        public List<ProductInCarts> GetItemsFromCart(int userId)
        {
            List<ProductInCarts> productsInCart = (from scart in _context.Set<ShoppingCart>()
                                                 join prod in _context.Set<Products>()
                                                 on new { scart.UserId, scart.ProductId } equals new { prod.UserId, prod.ProductId }  
                                                 select new ProductInCarts { ProductId = prod.ProductId, Name = prod.Name, ImageUrl = prod.ImageUrl, UnitPrice = prod.UnitPrice, UserId = prod.UserId, Quantity = scart.Quantity }).ToList();
           return productsInCart;
        }
    }
}
