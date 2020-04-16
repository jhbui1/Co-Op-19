using System;
using System.Collections.Generic;

namespace CoOp19.Dtb.Entities
{
    public partial class HealthResourceServices
    {
        public int Id { get; set; }
        public string ServiceName { get; set; }
        public string ServiceDesc { get; set; }
        public int? AvgWaitHours { get; set; }
        public decimal EstCost { get; set; }
        public int RecourceId { get; set; }

        public virtual HealthResource Recource { get; set; }
    }
}
