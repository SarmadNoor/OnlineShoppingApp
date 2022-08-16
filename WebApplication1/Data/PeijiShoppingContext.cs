using PeijiShoppingSolution.Model;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace PeijiShoppingSolution.Data
{
    public class PeijiShoppingContext:DbContext
    {
        public PeijiShoppingContext(DbContextOptions<PeijiShoppingContext> options)
            : base(options)
        {
        }
        public DbSet<Users> Users { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<ShoppingCart> ShoppingCart { get; set; }
    }
}
