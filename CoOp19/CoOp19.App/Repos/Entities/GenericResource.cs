using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class GenericResource
    {
        public GenericResource()
        {
            ConsumableResource = new HashSet<ConsumableResource>();
            HealthResource = new HashSet<HealthResource>();
            ShelterResource = new HashSet<ShelterResource>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? LocId { get; set; }

        public virtual MapData Loc { get; set; }
        public virtual ICollection<ConsumableResource> ConsumableResource { get; set; }
        public virtual ICollection<HealthResource> HealthResource { get; set; }
        public virtual ICollection<ShelterResource> ShelterResource { get; set; }
    }
}
