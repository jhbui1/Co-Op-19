using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class ShelterResource
    {
        public int Id { get; set; }
        public int ResourceId { get; set; }
        public int Vacancy { get; set; }
        public byte Rating { get; set; }
        public bool IsSafe { get; set; }

        public virtual GenericResource Resource { get; set; }
    }
}
