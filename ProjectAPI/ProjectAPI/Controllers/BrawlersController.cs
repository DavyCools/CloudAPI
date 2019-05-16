using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectAPI.Model;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class BrawlersController : Controller
    {
        LibraryContext context;
        public BrawlersController(LibraryContext ctxt)
        {
            context = ctxt;
        }

        /*[HttpGet]
        public List<Brawler> GetBrawlers()
        {
            return context.Brawlers.ToList();
        }*/

        [HttpGet]
        public List<Brawler> GetBooksParam(string name, int? noHealth, string rarity, string type,
                                string sortBy, string direction = "asc",
                                int pageSize = 5, int pageNumber = 0)
        {
            IQueryable<Brawler> query = context.Brawlers;
            if (!string.IsNullOrEmpty(name))
                query = query.Where(b => b.Name == name);
            if (!string.IsNullOrEmpty(rarity))
                query = query.Where(b => b.Rarity == rarity);
            if(!string.IsNullOrEmpty(type))
                query = query.Where(b => b.Type == type);
            if (noHealth != null)
                query = query.Where(b => b.Health == noHealth);

            if (string.IsNullOrEmpty(sortBy)) sortBy = "default";
            switch (sortBy.ToLower())
            {
                case "name":
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Name);
                    else
                        query = query.OrderByDescending(b => b.Name);
                    break;
                case "health":
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Health);
                    else
                        query = query.OrderByDescending(b => b.Health);
                    break;
                case "rarity":
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Rarity);
                    else
                        query = query.OrderByDescending(b => b.Rarity);
                    break;
                default:
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Id);
                    else
                        query = query.OrderByDescending(b => b.Id);
                    break;
            }
            query = query.Skip(pageNumber * pageSize);
            if (pageSize > 25) pageSize = 25;
            if (pageSize <= 0) pageSize = 5;
            query = query.Take(pageSize);
            return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Brawler> GetBrawler(int id)
        {
            //Find werkt enkel op de primaire sleutel:
            var theBrawler = context.Brawlers.Find(id);
            //var theBrawler= context.Brawlers.SingleOrDefault(brawler => brawler.Id == id);

            if (theBrawler == null)
                return NotFound();
            else
                return theBrawler;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteBrawler(int id)
        {
            var theBrawler = context.Brawlers.Find(id);


            if (theBrawler == null)
                return NotFound();

            context.Brawlers.Remove(theBrawler);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Brawler> AddBrawler([FromBody]Brawler brawler)
        {
            context.Brawlers.Add(brawler);
            context.SaveChanges();
            return Created("", brawler);
        }

        [HttpPut]
        public ActionResult<Brawler> UpdateBrawler([FromBody]Brawler brawler)
        {
            context.Brawlers.Update(brawler);
            context.SaveChanges();
            return Created("", brawler);
        }

    }
}