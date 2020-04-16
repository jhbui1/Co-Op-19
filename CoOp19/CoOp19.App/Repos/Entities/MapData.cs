using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class MapData
    {
        public MapData()
        {
            GenericResource = new HashSet<GenericResource>();
            Users = new HashSet<Users>();
        }

        public int Id { get; set; }
        public decimal? Gpsn { get; set; }
        public decimal? Gpsw { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string State { get; set; }

        public virtual ICollection<GenericResource> GenericResource { get; set; }
        public virtual ICollection<Users> Users { get; set; }
    }
}
