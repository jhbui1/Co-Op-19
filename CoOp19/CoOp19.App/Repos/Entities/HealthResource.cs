using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class HealthResource
    {
        public HealthResource()
        {
            HealthResourceServices = new HashSet<HealthResourceServices>();
        }

        public int Id { get; set; }
        public int ResourceId { get; set; }
        public bool ProvidesTests { get; set; }
        public decimal? TestPrice { get; set; }

        public virtual GenericResource Resource { get; set; }
        public virtual ICollection<HealthResourceServices> HealthResourceServices { get; set; }
    }
}
