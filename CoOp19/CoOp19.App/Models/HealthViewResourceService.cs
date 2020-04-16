using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class HealthViewResourceService
  {
    public int Id { get; set; }
    public string ServiceName { get; set; }
    public string ServiceDesc { get; set; }
    public int? AvgWaitHours { get; set; }
    public decimal EstCost { get; set; }
    public int RecourceId { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
  }
}
