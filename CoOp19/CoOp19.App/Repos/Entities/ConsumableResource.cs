using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class ConsumableResource
    {
        public int Id { get; set; }
        public int ResourceId { get; set; }
        public decimal? Price { get; set; }
        public int Quantity { get; set; }
    public string RecName { get; set; }

    public virtual GenericResource Resource { get; set; }
    }
}
