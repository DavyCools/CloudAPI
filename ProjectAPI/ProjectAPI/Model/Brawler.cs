using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Model
{
    public class Brawler
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Rarity { get; set; }
        public string Type { get; set; }
        public string Attack { get; set; }
        public string Super { get; set; }
        public string StarPower { get; set; }
        public string Picture { get; set; }
        public int Health { get; set; }
    }
}
