using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectAPI.Model;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrawlersController : Controller
    {
        LibraryContext context;
        public BrawlersController(LibraryContext ctxt)
        {
            context = ctxt;
        }

        [HttpGet]
        public List<Brawler> GetBrawlers()
        {
            return context.Brawlers.ToList();
        }
    }
}