using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            //Is there already a test?
            if (!context.Brawlers.Any())
            {
                var brawler1 = new Brawler()
                {
                    Name = "Naam1"
                };
                var brawler2 = new Brawler()
                {
                    Name = "Naam2"
                };
                context.Brawlers.Add(brawler1);
                context.Brawlers.Add(brawler2);
                context.SaveChanges();
            }
        }
    }
}
