using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class HealthViewResource
  {
    public int Id { get; set; }
    public int ResourceId { get; set; }
    public bool ProvidesTests { get; set; }
    public decimal? TestPrice { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public DateTime DateModified { get; set; } = DateTime.Now;

    public List<HealthViewResource> ConsumableViewResources { get; set; } = new List<HealthViewResource>();
  }
}
